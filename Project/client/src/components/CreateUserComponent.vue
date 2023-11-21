<template>
  <section>
    <h2>Create user</h2>
    <div class="container">
      <div>
        <div>
          <form ref="form" @submit.prevent="submitForm">
            <div class="row border mb-3">
              <div class="col-3">
                <label class="form-label">Name</label>
                <input class="form-control" name="name" type="text" required/>
              </div>
              <div class="col-3">
                <label class="form-label">Gender</label>
                <input class="form-control" name="gender" type="text"/>
              </div>
              <div class="col-3">
                <label class="form-label">Phone</label>
                <input ref="phone" class="form-control" placeholder='+38(0__)-___-__-__' name="phone" type="tel"
                       id="phone" required/>
              </div>
              <div class="col-3">
                <label class="form-label">Password</label>
                <input class="form-control" name="password" type="password" required/>
              </div>
              <div class="col-3">
                <label class="form-label">Email</label>
                <input class="form-control" name="email" type="email" />
              </div>
              <div class="col-3">
                <label class="form-label">Role</label>
                <input class="form-control" name="role" type="text"/>
              </div>
              <div class="col-6">
                <label class="form-label">Control</label>
                <button type="submit" class="btn btn-small btn-primary">
                  <i class="bi bi-check-circle-fill"></i> Create
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
import initInputMask from '@/utils/initInputMask';
import getFormBody from "@/utils/getFormBody";

export default {
  methods: {
    async submitForm() {
      const form = this.$refs.form;
      const formBody = getFormBody(form);
      const response = await api.users.createUser(formBody);
      if(response && response.status === 201) {
        this.$router.push('/users');
      }
    },
  },
  async mounted() {
    initInputMask(this.$refs.phone);
  },
}
</script>