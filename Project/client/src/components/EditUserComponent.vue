<template>
  <section>
    <h2>Edit user</h2>
    <div class="container">
      <div class="table" id="users">
        <div id="userRow">
          <form class="form-user" @submit.prevent="submitForm">
            <div class="row border mb-3">
              <div class="col-3">
                <label class="form-label">ID</label>
                <input class="form-control id" type="number" :value="user.id"/>
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
                <input class="form-control" name="phone" type="tel" id="phone" :value="user.phone"/>
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
                <button type="submit" class="btn btn-primary">
                  <i class="bi bi-check-circle-fill"></i> Save
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
      const TelElement = document.querySelector('#phone');
      if (TelElement) {
        const TelMask = new InputMask("+38(099)-999-99-99");
        TelMask.mask(TelElement);
      }

      const idElements = document.querySelectorAll('.id');
      idElements.forEach(element => element.readOnly = true);
    },

    getUserIdFromRoute() {
      return this.$route.params.userId;
    },

    async getUserById(userId) {
      try {
        this.user = await api.users.getUserById(userId);
      } catch (error) {
        alert(error);
      }
    },

    async submitForm() {
      const form = document.querySelector('.form-user');
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
  },

  async mounted() {
    this.initInputMask();
    const userId = this.getUserIdFromRoute();
    await this.getUserById(userId);
  },

  data() {
    return {
      user: [],
    }
  }
}
</script>