<script>
export default {
  computed: {
    telLink() {
      return "tel:+1234567890";
    },
    emailLink() {
      return "mailto:example@gmail.com";
    },
    telegramLink() {
      return "https://t.me/futurefkslaves";
    },
    serhiiTelegramLink() {
      return "https://t.me/Serega_10_04";
    },
    viberLink() {
      return "viber://chat?number=+1234567890";
    },
  },
};
</script>
<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-6">
        &copy; 2023 by <a target="_blank" href="https://github.com/Kalyna-Serhii/labs-web-2nd-year/tree/main/Lab%203">Vladyslav
        Kurach and Serhii Kalyna</a>
      </div>
      <div class="col-sm-6">
        <ul class="social-icons">
          <li><a :href="telLink"><i class="bi bi-telephone"></i></a></li>
          <li><a :href="emailLink"><i class="bi bi-envelope"></i></a></li>
          <li><a :href="telegramLink"><i class="bi bi-telegram"></i></a></li>
          <li><a :href="serhiiTelegramLink"><i class="bi bi-telegram"></i></a></li>
          <li><a :href="viberLink"><i class="bi bi-telephone-fill"></i></a></li>
        </ul>
      </div>
    </div>
  </div>
</template>
