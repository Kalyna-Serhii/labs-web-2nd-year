<template>
  <section id='pricing'>
    <div class='container'>
      <div id='contacts-form'>
        <form @submit.prevent='submitForm'>
          <h2>Leave a review</h2>
          <div class='form-group'>
            <label for='message'>Your feedback about us:</label>
            <textarea v-model='message' class='form-control item' id='message' name='message' required></textarea>
          </div>
          <button type='submit' class='btn btn-primary btn-lg'>Send</button>
        </form>
      </div>

      <div v-for="(review, index) in reviews" :key="index">
        <div class='col-md-3 col-sm-6 col-xs-12'>
          <div class='frame'>
            <ul class='pricing'>
              <li class="plan-header">
                <div class="price-duration">
                  <span>{{ review.message }}</span>
                </div>
              </li>
              <li>{{ review.userName }}</li>
              <li>{{ review.date }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
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
      if (reviews) {
        this.reviews = reviews.sort((a, b) => b.id - a.id);
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