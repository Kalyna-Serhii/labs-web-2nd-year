<template>
  <section>
    <h2>Edit user</h2>
    <div class="container">
      <div>
        <form ref="form" @submit.prevent="submitForm">
          <div class="row border mb-3">
            <div class="col-3">
              <label class="form-label">ID</label>
              <input class="form-control" ref="id" type="number" :value="user.id"/>
            </div>
            <div class="col-3">
              <label class="form-label">Name</label>
              <input class="form-control" name="name" type="text" :value="user.name" required/>
            </div>
            <div class="col-3">
              <label class="form-label">Gender</label>
              <input class="form-control" name="gender" type="text" :value="user.gender" required/>
            </div>
            <div class="col-3">
              <label class="form-label">Phone</label>
              <input ref="phone" class="form-control" name="phone"
                     type="tel" id="phone" :value="user.phone" required/>
            </div>
            <div class="col-3">
              <label class="form-label">Email</label>
              <input class="form-control" name="email" type="email" :value="user.email"/>
            </div>
            <div class="col-3">
              <label class="form-label">Role</label>
              <input class="form-control" name="role" type="text" :value="user.role" required/>
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
  </section>
</template>

<script>
import api from '@/api';
import initInputMask from '@/utils/initInputMask';
import getFormBody from "@/utils/getFormBody";

export default {
  data() {
    return {
      user: [],
    }
  },
  methods: {
    getUserIdFromRoute() {
      return this.$route.params.userId;
    },
    async getUserById(userId) {
      this.user = await api.users.getUserById(userId);
    },
    async submitForm() {
      const form = this.$refs.form;
      const userId = this.user.id;
      const formBody = getFormBody(form);
      const response = await api.users.updateUser(userId, formBody);
      if (response && response.status === 200) {
        this.$router.push('/users');
      }
    },
    async deleteUser(id) {
      const response = await api.users.deleteUser(id);
      if (response && response.status === 200) {
        this.$router.push('/users');
      }
    },
  },
  async mounted() {
    const id = this.$refs.id;
    id.readOnly = true;
    const userId = this.getUserIdFromRoute();
    await this.getUserById(userId);
    initInputMask(this.$refs.phone);
  },
}
</script>