<template>
  <section>
    <h2>Users</h2>
    <section>
      <div class="container">
        <table class="resp-tab">
          <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Role</th>
            <th>Control</th>
          </tr>
          </thead>

          <tbody>
          <tr v-for='(user, index) in users' :key='index'>
            <td><span>ID</span> {{ user.id }} </td>
            <td><span>Name</span> {{ user.name }} </td>
            <td><span>Gender</span> {{ user.gender }} </td>
            <td><span>Phone</span> {{ user.phone }} </td>
            <td><span>Email</span> {{ user.email }} </td>
            <td><span>Role</span> {{ user.role }} </td>
            <td>
              <span>Control</span>
              <button @click="toCreatePage()" class="btn btn-small btn-primary"><i class="bi bi-plus-square"></i></button>
              <button @click="toEditPage(user.id)" class="btn btn-small btn-primary"><i class="bi bi-pencil-square"></i></button>
              <button @click="deleteUser(user.id)" class="btn btn-small btn-primary"><i class="bi bi-trash"></i></button>
            </td>
          </tr>
          </tbody>

        </table>
      </div>
    </section>
  </section>
</template>

<script>
import api from '@/api';

export default {
  data() {
    return {
      users: [],
    };
  },
  methods: {
    async getUsers() {
      const response = await api.users.getUsers();
      this.users = response;
    },
    async sortUsersById(users) {
      if(users) {
        this.users = users.sort((a, b) => a.id - b.id);
      }
    },
    async toCreatePage() {
      this.$router.push('/users/new');
    },
    async toEditPage(id) {
      this.$router.push(`/user/${id}`);
    },
    async deleteUser(id) {
      await api.users.deleteUser(id);
      await this.getUsers();
    },
  },
  async mounted() {
    await this.getUsers();
    await this.sortUsersById(this.users);
  }
}
</script>