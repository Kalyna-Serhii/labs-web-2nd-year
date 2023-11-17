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
            <th>Control</th>
          </tr>
          </thead>

          <tbody>
          <tr v-for='(user, index) in usersList' :key='index'>
            <td><span>ID</span> {{ user.id }} </td>
            <td><span>Name</span> {{ user.name }} </td>
            <td><span>Gender</span> {{ user.gender }} </td>
            <td><span>Phone</span> {{ user.phone }} </td>
            <td><span>Email</span> {{ user.email }} </td>
            <td>
              <span>Control</span>
              <router-link to="#"><i class="bi bi-pencil-square"></i></router-link>
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
  async mounted() {
    try {
      this.usersList = await api.users.getUsers();
    } catch (error) {
      alert(error);
    }
  },
  data() {
    return {
      usersList: [],
    };
  },
};
</script>