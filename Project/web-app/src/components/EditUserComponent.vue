<template>
  <section>
    <h2>Edit user</h2>
    <div class="container">
      <div class="table" id="users">
        <div id="userRow">
          <form class="form-user">
            <div class="row border mb-3">
              <div class="col-3">
                <label class="form-label">ID</label>
                <input class="form-control id" name="id" type="number" />
              </div>
              <div class="col-3">
                <label class="form-label">Current package</label>
                <input class="form-control id" name="current package" type="text" />
              </div>
              <div class="col-3">
                <label class="form-label">Name</label>
                <input class="form-control" name="name" type="text" />
              </div>
              <div class="col-3">
                <label class="form-label">Surname</label>
                <input class="form-control" name="surname" type="text" />
              </div>
              <div class="col-3">
                <label class="form-label">Phone</label>
                <input class="form-control" name="phone" type="tel" id="phone"/>
              </div>
              <div class="col-3">
                <label class="form-label">Email</label>
                <input class="form-control" name="email" type="email" />
              </div>
              <div class="col-3">
                <label class="form-label">Password</label>
                <input class="form-control" name="password" type="text" />
              </div>
              <div class="col-6">
                <label class="form-label">Control</label>
                <router-link to="#"><i class="bi bi-check-circle-fill"></i></router-link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import InputMask from "@/assets/js/inputmask.min";

export default {
  mounted() {
    const TelElement = document.querySelector('#phone');
    if (TelElement) {
      const TelMask = new InputMask("+38(099)-999-99-99");
      TelMask.mask(TelElement);
    }

    const idElements = document.querySelectorAll('.id');
    idElements.forEach(element => element.readOnly = true);
  },
  data() {
    return {
      usersList: [
        {
          name: 'Serhii',
          surname: 'Kalyna',
          phone: '+380689225160',
          email: 'kalyna.serhii.lll.kpi.ua',
        },
      ],
    }
  }
}
</script>