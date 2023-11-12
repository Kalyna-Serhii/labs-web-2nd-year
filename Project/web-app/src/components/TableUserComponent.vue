<template>
  <section>
    <h2>Users</h2>
    <section class="dataTable">
      <div class="container">
        <table class="resp-tab">
          <thead>
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Control</th>
          </tr>
          </thead>

          <tbody>
          <tr v-for='(item, index) in usersList' :key='index'>
            <td><span>Name</span> {{ item.name }}</td>
            <td><span>Name</span> {{ item.surname }}</td>
            <td><span>Name</span> {{ item.phone }}</td>
            <td><span>Name</span> {{ item.email }}</td>
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
          name: 'Serhii',
          surname: 'Kalyna',
          phone: '+380689225160',
          email: 'kalyna.serhii.lll.kpi.ua',
        },
        {
          name: 'Vlad',
          surname: 'Kurach',
          phone: '+380123456789',
          email: 'kurach.vlad.lll.kpi.ua',
        },

      ],
    }
  }
}
</script>