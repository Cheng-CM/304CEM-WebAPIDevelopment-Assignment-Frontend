<template>
  <div class="section section-shaped section-lg my-0">
    <div class="shape shape-style-1 bg-gradient-default">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="container pt-lg-md">
      <div class="row justify-content-center">
        <div class="col-lg-5 my-5">
          <card
            type="primary"
            shadow
            header-classes="bg-white pb-5"
            body-classes="px-lg-5 py-lg-5"
            class="border-0"
          >
            <template>
              <div class="text-neutral text-center mb-4">
                <p>Sign in</p>
              </div>
            </template>
            <template>
              <form role="form" method="post">
                <base-input
                  v-model="email"
                  class="mb-3"
                  placeholder="Email"
                  addon-left-icon="ni ni-email-83"
                ></base-input>
                <base-input
                  v-model="password"
                  type="password"
                  placeholder="Password"
                  addon-left-icon="ni ni-lock-circle-open"
                ></base-input>
                <!-- <base-checkbox class="text-muted">Remember me</base-checkbox> -->
                <div class="text-center">
                  <base-button type="success" class="my-4" @click="signin()">Sign In</base-button>
                </div>
              </form>
              <div class="col-8 center">
                <p class="text-warning">
                  <small>{{ status }}</small>
                </p>
              </div>
            </template>
          </card>
          <div class="row mt-3">
            <div class="col-6 text-center">
              <a href="/register" class="text-light text-center">
                <small>Create new account</small>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BaseButton from "../components/BaseButton.vue";
import BaseInput from "../components/BaseInput.vue";
import Card from "../components/Card.vue";
import AccountAPI from "../api/user.js";
export default { 
  name: "login",
  components: {
    BaseButton,
    BaseInput,
    Card
  },
  data() {
    return {
      email: "",
      password: "",
      status: ""
    };
  },
  methods: {
    async signin() {
      if (this.email && this.password) {
        var params = {
          email: this.email,
          password: this.password
        };
        var response = await AccountAPI.login(params);
        this.status = response.data.message;
        if (response.data.status == "success") {
          this.$cookies.set("UserId", response.data.data.User, "1y");
          this.$cookies.set("token", response.data.data.token,'1y')
          this.$router.push("/");
          location.reload();
        }
      } else {
        this.status = "Enter email and password.";
      }
    }
  },
  created(){
    if (this.$cookies.get("UserId")) {
      this.$router.push('/');
    }
  }
};
</script>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  padding-top: 0px;
}
</style>
