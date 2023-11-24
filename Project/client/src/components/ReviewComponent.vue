<template>
  <section id='contacts'>
<!--    <div class='container'>-->
<!--      <div id='contacts-form'>-->
<!--        <form @submit.prevent='submitForm'>-->
<!--          <h2>Залиште відгук</h2>-->
<!--          <div class='form-group'>-->
<!--            <label for='message'>Ваш відгук про нас:</label>-->
<!--            <textarea v-model='message' class='form-control item' id='message' name='message' required></textarea>-->
<!--          </div>-->
<!--          <button type='submit' class='btn btn-primary btn-lg'>Відправити</button>-->
<!--        </form>-->
<!--      </div>-->

<!--      <div v-for="(review, index) in reviews" :key="index">-->
<!--        <div class='col-md-6 col-sm-6 col-xs-12'>-->
<!--          <div class='frame'>-->
<!--            <div class='pricing'>-->
<!--              <li  class="plan-header">-->
<!--                <div class="price-duration">-->

<!--                </div>-->
<!--              </li>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--    </div>-->
  </section>
</template>

<script>
import api from '@/api';
export default {
  data() {
    return {
      reviews: [],
      message: '',
    };
  },
  methods: {
    async getReviews() {
      const response = await api.reviews.getReviews();
      this.reviews = response;
    },
    async sortReviewsById(reviews) {
      if(reviews) {
        this.reviews = reviews.sort((a, b) => a.id - b.id);
      }
    },
    async submitForm() {
      const message = this.message;
      const formBody = {message};
      await api.reviews.createReview(formBody);
      this.clearForm();
      await this.getReviews();
      await this.sortReviewsById(this.reviews);
          },
    clearForm() {
      this.message = '';
    },
  },
  async mounted() {
    await this.getReviews();
    await this.sortReviewsById(this.reviews);
  },
};
</script>