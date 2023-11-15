<template>
  <section>
    <h2>Users</h2>
    <section>
      <div class="container">
        <table class="resp-tab">
          <thead>
          <tr>
            <th>ID</th>
            <th>Current package</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Password</th>
            <th>Control</th>
          </tr>
          </thead>

          <tbody>
          <tr v-for='(user, index) in usersList' :key='index'>
            <td><span>ID</span> {{ user.id }} </td>
            <td><span>Current package</span> {{ user.current_package }} </td>
            <td><span>Name</span> {{ user.name }} </td>
            <td><span>Surname</span> {{ user.surname }} </td>
            <td><span>Phone</span> {{ user.phone }} </td>
            <td><span>Email</span> {{ user.email }} </td>
            <td><span>Password</span> {{ user.password }} </td>
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
export default {
  data() {
    return {
      usersList: [
        {
          id: 1,
          current_package: 12,
          name: 'Serhii',
          surname: 'Kalyna',
          phone: '+380689225160',
          email: 'kalyna.serhii.lll.kpi.ua',
          password: '12345678',
        },
        {
          id: 2,
          current_package: 5,
          name: 'Vlad',
          surname: 'Kurach',
          phone: '+380123456789',
          email: 'kurach.vlad.lll.kpi.ua',
          password: '12345678',
        },
      ],
    }
  }
}
</script>