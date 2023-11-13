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
          <ul class='nav navbar-nav'>
            <li v-for="(button, index) in buttonsList" :key="index">
              <router-link class='scroll' :to='button.link'> {{ button.name }} </router-link>
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
      buttonsList: [
        {
          link: '/',
          name: 'Home',
        },
        {
          link: '/users',
          name: 'Users',
        },
        {
          link: '/',
          name: 'About',
        },
        {
          link: '/',
          name: 'Table',
        },
        {
          link: '/',
          name: 'Pricing',
        },
        {
          link: '/contacts',
          name: 'Contacts',
        },
        {
          link: '/FAQ',
          name: 'FAQ',
        },
        {
          link: '/login',
          name: 'Login',
        },
        {
          link: '/register',
          name: 'Register',
        },
      ]
    }
  }
}
</script>