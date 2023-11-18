<template>
  <section>
    <h2>Edit user</h2>
    <div class="container">
      <div>
        <div>
          <form ref="form" @submit.prevent="submitForm">
            <div class="row border mb-3">
              <div class="col-3">
                <label class="form-label">ID</label>
                <input class="form-control" ref="id" type="number" :value="user.id"/>
              </div>
              <div class="col-3">
                <label class="form-label">Name</label>
                <input class="form-control" name="name" type="text" :value="user.name"/>
              </div>
              <div class="col-3">
                <label class="form-label">Gender</label>
                <input class="form-control" name="gender" type="text" :value="user.gender"/>
              </div>
              <div class="col-3">
                <label class="form-label">Phone</label>
                <input v-model.lazy="phone" @input="initInputMask()" ref="phone" class="form-control" name="phone"
                       type="tel" id="phone"/>
              </div>
              <div class="col-3">
                <label class="form-label">Email</label>
                <input class="form-control" name="email" type="email" :value="user.email"/>
              </div>
              <div class="col-3">
                <label class="form-label">Role</label>
                <input class="form-control" name="role" type="text" :value="user.role"/>
              </div>
              <div class="col-6">
                <label class="form-label">Control</label>
                <button type="submit" class="btn btn-small btn-primary">
                  <i class="bi bi-check-circle-fill"></i> Save
                </button>
              </div>
              <div class="col-6">
                <label class="form-label"></label>
                <button type="button" @click="deleteUser(user.id)" class="btn btn-small btn-primary">
                  <i class="bi bi-trash"></i> Delete
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import api from '@/api';
import InputMask from "@/assets/js/inputmask.min";

export default {
  methods: {
    initInputMask() {
      const telElement = this.$refs.phone;
      if (telElement) {
        const TelMask = new InputMask("+38(099)-999-99-99");
        TelMask.mask(telElement);
      }

      const id = this.$refs.id;
      id.readOnly = true;
    },

    getUserIdFromRoute() {
      return this.$route.params.userId;
    },

    async getUserById(userId) {
      try {
        this.user = await api.users.getUserById(userId);
        this.phone = this.user.phone;
        this.initInputMask();
      } catch (error) {
        alert(error);
      }
    },

    async submitForm() {
      const form = this.$refs.form;
      const userId = this.user.id;
      const formBody = this.getFormBody(form);
      try {
        await api.users.updateUser(userId, formBody);
        this.$router.push('/users');
      } catch (error) {
        alert(error);
      }
    },

    getFormBody(form) {
      const formBody = {};
      const formElements = Array.from(form.elements);
      formElements.forEach((element) => {
        if (element.name) {
          formBody[element.name] = element.value;
        }
      });
      return formBody;
    },

    async deleteUser(id) {
      try {
        await api.users.deleteUser(id);
        this.$router.push('/users');
      } catch (error) {
        alert(error);
      }
    },
  },

  async mounted() {
    const userId = this.getUserIdFromRoute();
    await this.getUserById(userId);
    this.initInputMask()
  },

  data() {
    return {
      user: [],
      phone: '',
    }
  }
}
</script>