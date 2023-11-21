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
          <ul v-if="this.accessToken" class='nav navbar-nav'>
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
      buttonsListForUser: [
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
          link: '/logout',
          name: 'Logout',
        },
      ],
      buttonsListForGuest: [
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
      ],
      accessToken: '',
    }
  },
  methods: {
    setAccessToken() {
      const cookies = document.cookie;
      if (cookies) {
        const accessTokenCookie = decodeURIComponent(cookies).split(';').find(cookie => cookie.trim().startsWith('accessToken='));
        const accessTokenData = accessTokenCookie ? accessTokenCookie.split('=')[1] : null;
        const accessToken = accessTokenData.split('.')[1];
        if(accessToken) {
          const tokenIsValid =  this.checkToken(accessToken);
          if(tokenIsValid) {
            this.accessToken = accessToken;
          } else {
            this.accessToken = '';
          }
        } else {
          this.accessToken = '';
        }
      }
    },
    checkToken(token) {
      if (token) {
        const tokenData = JSON.parse(atob(token));
        const currentTime = Math.floor(Date.now() / 1000);
        return  tokenData.exp > currentTime;
      }
    },
  },
  mounted() {
    this.setAccessToken();
    this.checkToken();
  }
}
</script>