<template>
  <div class="profile-page">
    <section class="section-profile-cover section-shaped my-0">
      <div class="shape shape-style-1 shape-primary shape-skew alpha-4">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </section>
    <section class="section section-skew">
      <div class="container">
        <card shadow class="card-profile mt--300" no-body>
          <div class="px-4">
            <div class="row justify-content-center">
              <div class="col-lg-3 order-lg-2">
                <div class="card-profile-image">
                  <a href="#">
                    <img v-lazy="'img/theme/team-4-800x800.jpg'" class="rounded-circle">
                  </a>
                </div>
              </div>
            </div>
            <div class="text-center mt-5">
              <h3>{{username}}</h3>
              <h4 class="text-center mt-3">{{email}}</h4>
            </div>
          </div>
        </card>
      </div>
    </section>
  </div>
</template>
<script>
import AccountAPI from "../api/user.js";
export default {
  name: "Profile",
  data() {
    return {
      id: "",
      username: "",
      email: ""
    };
  },
  methods: {
    async loadProfile() {
      console.log(this.$route.params.id);
      
      var res = await AccountAPI.getUserInfo(this.$route.params.id);
      this.id = res.data.id;
      this.username = res.data.username;
      this.email = res.data.email;
    }
  },
  created() {
    this.loadProfile();
  }
};
</script>
<style>
</style>
