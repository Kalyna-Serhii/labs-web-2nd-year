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
                <input v-model.lazy="phone" ref="phone" class="form-control" name="phone"
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
import getFormBody from "@/utils/getFormBody";

export default {
  data() {
    return {
      user: [],
      phone: '',
    }
  },
  methods: {
    initInputMask() {
      const telElement = this.$refs.phone;
      if (telElement) {
        const TelMask = new InputMask('+38(099)-999-99-99');
        TelMask.mask(telElement);
      }
    },
    getUserIdFromRoute() {
      return this.$route.params.userId;
    },

    async getUserById(userId) {
      this.user = await api.users.getUserById(userId);
      this.phone = this.user.phone;
      await this.initInputMask();
    },

    async submitForm() {
      const form = this.$refs.form;
      const userId = this.user.id;
      const formBody = getFormBody(form);
      await api.users.updateUser(userId, formBody);
      this.$router.push('/users');
    },

    async deleteUser(id) {
      await api.users.deleteUser(id);
      this.$router.push('/users');
    },
  },

  async mounted() {
    const id = this.$refs.id;
    id.readOnly = true;
    const userId = this.getUserIdFromRoute();
    await this.getUserById(userId);
  },
}
</script>