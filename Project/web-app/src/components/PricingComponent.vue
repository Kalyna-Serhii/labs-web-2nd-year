<template>
  <section id='pricing'>
    <div class='container'>
      <div class='section-header'>
        <h2 class='section-title wow fadeInDown'>Pricing</h2>
        <p class='wow fadeInDown'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget risus vitae
          massa <br> semper aliquam quis mattis quam.</p>
      </div>

      <div class='row'>
        <div v-for="(plan, index) in pricingList" :key="index">
          <div class="col-md-3 col-sm-6 col-xs-12">
            <div class="frame">
              <ul class="pricing">
                <li class="plan-header">
                  <div class="price-duration">
                    <span class="price">{{ plan.price }}</span>
                    <span class="duration">Car Servicing</span>
                  </div>
                  <div class="plan-name">{{ plan.name }}</div>
                </li>
                <li> {{ plan.description1 }}</li>
                <li> {{ plan.description2 }}</li>
                <li> {{ plan.description3 }}</li>
                <li> {{ plan.description4 }}</li>
                <li> {{ plan.description5 }}</li>
                <li> {{ plan.description6 }}</li>
                <li> {{ plan.description7 }}</li>
                <li v-for="feature in plan.features" :key="feature">{{ feature }}</li>
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
          description1: 'Washing & cleaning',
          description2: 'Engine tuning',
          description3: 'Car body repair',
          description4: 'Car painting',
          description5: 'Car polishing',
          description6: 'Car interior repair',
          description7: 'Car interior cleaning',
        },
        {
          name: 'Silver',
          price: '$85',
          description1: 'Washing & cleaning',
          description2: 'Engine tuning',
          description3: 'Car body repair',
          description4: 'Car painting',
          description5: 'Car polishing',
          description6: 'Car interior repair',
          description7: 'Car interior cleaning',
        },
        {
          name: 'Gold',
          price: '$125',
          description1: 'Washing & cleaning',
          description2: 'Engine tuning',
          description3: 'Car body repair',
          description4: 'Car painting',
          description5: 'Car polishing',
          description6: 'Car interior repair',
          description7: 'Car interior cleaning',
        },
        {
          name: 'Diamond',
          price: '$185',
          description1: 'Washing & cleaning',
          description2: 'Engine tuning',
          description3: 'Car body repair',
          description4: 'Car painting',
          description5: 'Car polishing',
          description6: 'Car interior repair',
          description7: 'Car interior cleaning',
        },
      ]
    }
  }
}
</script>