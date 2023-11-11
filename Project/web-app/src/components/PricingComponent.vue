<template>
  <section id='pricing'>
    <div class='container'>
      <div class='section-header'>
        <h2 class='section-title wow fadeInDown'>Pricing</h2>
        <p class='wow fadeInDown'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget risus vitae
          massa <br> semper aliquam quis mattis quam.</p>
      </div>

      <div class='rowsPrice'>
        <div v-for="(item, index) in pricingList" :key="index" class="rowPrice">
          <div class="col-md-3 col-sm-6 col-xs-12 rowPrice">
            <div>
              <ul class="pricing">
                <li class="plan-header">
                  <div class="price-duration">
                    <span class="price">{{ item.price }}</span>
                    <span class="duration">Car Servicing</span>
                  </div>
                  <div class="plan-name">{{ item.name }}</div>
                </li>
                <li v-for="feature in item.features" :key="feature">{{ feature }}</li>
                <li class="plan-purchase"><a class="btn btn-primary" href="#">Get It Now!</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      pricingList: [
        {
          name: 'Basic',
          price: '$45',
        },
        {
          name: 'Silver',
          price: '$85',
        },
        {
          name: 'Gold',
          price: '$125',
        },
        {
          name: 'Diamond',
          price: '$185',
        },
      ]
    }
  }
}
</script>