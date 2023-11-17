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
              <router-link :to="'/user/'+user.id"><i class="bi bi-pencil-square"></i></router-link>
              <router-link to="#"><i class="bi bi-trash-fill"></i></router-link>
            </td>
          </tr>
          </tbody>

        </table>
      </div>
    </section>
  </section>
</template>

<script>
import api from '../api';
export default {
  methods: {
    sortUsersById(users) {
      return users.sort((a, b) => a.id - b.id);
    },

    async getUsers() {
      try {
        const users = await api.users.getUsers();
        const sortedUsersById = this.sortUsersById(users);
        this.users = sortedUsersById;
      } catch (error) {
        alert(error);
      }
    }
  },

  async mounted() {
    await this.getUsers();
  },
  data() {
    return {
      users: [],
    };
  },
};
</script>