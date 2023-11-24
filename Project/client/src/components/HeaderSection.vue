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
          <ul v-if="this.accessToken && this.isAdmin" class='nav navbar-nav'>
            <li v-for="(button, index) in buttonsListForAdmin" :key="index">
              <router-link class='scroll' :to='button.link'> {{ button.name }}</router-link>
            </li>
          </ul>
          <ul v-else-if="this.accessToken && !this.isAdmin" class='nav navbar-nav'>
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
      isAdmin: false,
    }
  },
  methods: {
    setAccessToken() {
      const cookies = document.cookie;
      if (cookies) {
        const accessTokenCookie = decodeURIComponent(cookies).split(';').find(cookie => cookie.trim().startsWith('accessToken='));
        const accessTokenData = accessTokenCookie ? accessTokenCookie.split('=')[1] : null;
        const accessToken = accessTokenData.split('.')[1];
        if (accessToken) {
          const tokenIsValid = this.checkToken(accessToken);
          if (tokenIsValid) {
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
        return tokenData.exp > currentTime;
      }
    },
    checkRole(token) {
      if (token) {
        const tokenData = JSON.parse(atob(token));
        if (tokenData.role === 'admin') {
          this.isAdmin = true;
        }
      }
    },
  },
  mounted() {
    this.setAccessToken();
    this.checkRole(this.accessToken);
  }
}
</script>