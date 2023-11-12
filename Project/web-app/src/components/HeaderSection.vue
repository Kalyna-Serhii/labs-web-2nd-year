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
            <li><router-link class='scroll' to='/'>Home</router-link></li>
            <li><router-link class='scroll' to='/'>Services</router-link></li>
            <li><router-link class='scroll' to='/'>About</router-link></li>
            <li><router-link class='scroll' to='/'>Table</router-link></li>
            <li><router-link class='scroll' to='/'>Pricing</router-link></li>
            <li><router-link class='scroll' to='/contacts'>Contacts</router-link></li>
            <li><router-link class='scroll' to='/FAQ'>FAQ</router-link></li>
            <li><router-link class='scroll' to='/login'>Login</router-link></li>
            <li><router-link class='scroll' to='/register'>Register</router-link></li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>