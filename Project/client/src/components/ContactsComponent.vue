<template>
  <section id='contacts'>
    <div class='container'>
      <div id='contacts-form'>
        <form @submit.prevent='submitForm'>
          <h2>Напишіть нам</h2>
          <div class='form-group'>
            <label for='name'>Ім'я:</label>
            <input v-model='formData.name' class='form-control item' type='text' id='name' name='name' placeholder='Ім`я'
                   required>
          </div>
          <div class='form-group'>
            <label for='email'>Email:</label>
            <input v-model='formData.email' class='form-control item' type='email' id='email' name='email'
                   placeholder='Email' required>
          </div>
          <div class='form-group'>
            <label for='message'>Повідомлення:</label>
            <textarea v-model='formData.message' class='form-control item' id='message' name='message' required></textarea>
          </div>
          <button type='submit' class='btn btn-primary btn-lg'>Відправити</button>
        </form>
      </div>
      <div class='contacts-header'>
        <p>Або Ви можете зв'язатися з нами за наступними контактами:</p>
        <ul>
          <li><strong>Email:</strong> {{ email }} </li>
          <li><strong>Телефон:</strong> {{ tel }} </li>
          <li><strong>Адреса:</strong> {{ address }} </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  data () {
    return {
      formData: {
        name: '',
        email: '',
        message: '',
      },
      errors: {},
      email: 'example@gmail.com',
      tel: '+1234567890',
      address: 'вул. Зразкова, 12345, місто Зразок',
    };
  },
  methods: {
    submitForm() {
      this.clearForm();
    },
    clearForm() {
      this.formData = {
        name: '',
        email: '',
        message: '',
      }
    }
  }
}
</script>