<template>
  <header>
    <nav id='main-nav' class='navbar navbar-default navbar-fixed-top'>
      <div class='container'>
        <div class='navbar-header'>
          <button type='button' class='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>
            <span class='sr-only'>Toggle navigation</span>
            <span class='icon-bar'></span>
            <span class='icon-bar'></span>
            <span class='icon-bar'></span>
          </button>
          <router-link class='navbar-brand' to='/'><img src='@/assets/img/logo.png' alt='logo'></router-link>
        </div>
        <div class='collapse navbar-collapse navbar-right'>
          <ul v-if="isAuth && isAdmin" class='nav navbar-nav'>
            <li v-for="(button, index) in buttonsListForAdmin" :key="index">
              <router-link class='scroll' :to='button.link'> {{ button.name }}</router-link>
            </li>
          </ul>
          <ul v-else-if="isAuth && !isAdmin" class='nav navbar-nav'>
            <li v-for="(button, index) in buttonsListForUser" :key="index">
              <router-link class='scroll' :to='button.link'> {{ button.name }}</router-link>
            </li>
          </ul>
          <ul v-else class='nav navbar-nav'>
            <li v-for="(button, index) in buttonsListForGuest" :key="index">
              <router-link class='scroll' :to='button.link'> {{ button.name }}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isAuth: localStorage.getItem('isAuth') || null,
      isAdmin: localStorage.getItem('isAdmin') || null,
      buttonsListForGuest: [
        {
          link: '/reviews',
          name: 'Reviews',
        },
        {
          link: '/login',
          name: 'Login',
        },
        {
          link: '/register',
          name: 'Register',
        },
      ],
      buttonsListForUser: [
        {
          link: '/reviews',
          name: 'Reviews',
        },
        {
          link: '/logout',
          name: 'Logout',
        },
      ],
      buttonsListForAdmin: [
        {
          link: '/',
          name: 'Home',
        },
        {
          link: '/users',
          name: 'Users',
        },
        {
          link: '/deals',
          name: 'Deals',
        },
        {
          link: '/cars',
          name: 'Cars',
        },
        {
          link: '/packages',
          name: 'Packages',
        },
        {
          link: '/services',
          name: 'Services',
        },
        {
          link: '/reviews',
          name: 'Reviews',
        },
        {
          link: '/logout',
          name: 'Logout',
        },
      ],
      accessToken: '',
    }
  },
}
</script>