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
            class="border-0 outline-info"
          >
            <template>
              <div class="text-neutral text-center mb-4">
                <p>Registration</p>
              </div>
            </template>
            <template>
              <form role="form" method="post">
                <base-input
                  v-model="email"
                  type="email"
                  placeholder="Email"
                  class="mb-3"
                  addon-left-icon="ni ni-email-83"
                ></base-input>
                <base-input
                  v-model="username"
                  placeholder="Username"
                  class="mb-3"
                  addon-left-icon="ni ni-badge"
                ></base-input>
                <base-input
                  v-model="password"
                  placeholder="Password"
                  class="mb-3"
                  addon-left-icon="ni ni-lock-circle-open"
                  type="password"
                ></base-input>
                <base-input
                  v-model="passwordconf"
                  placeholder="Confirm Password"
                  addon-left-icon="ni ni-lock-circle-open"
                  class="mb-3"
                  type="password"
                ></base-input>
                <div class="text-center">
                  <base-button type="success" class="my-4" @click="register()">Register</base-button>
                </div>
              </form>
              <div class="col-10 center">
                <p class="text-warning">
                  <small>{{ status }}</small>
                </p>
              </div>
            </template>
          </card>
           <div class="row mt-3">
            <div class="col-8 text-center">
              <a href="/login" class="text-light text-center">
                <small>Already have account? Click here!</small>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AccountAPI from "../api/user.js";
export default {
  name: "Register",
  data() {
    return {
      email: "",
      username: "",
      password: "",
      passwordconf: "",
      status: ""
    };
  },
  methods: {
    async register() {
      if (this.email && this.username && this.password && this.passwordconf) {
        if (this.password == this.passwordconf) {
          var params;
          params = {
            email: this.email,
            username: this.username,
            password: this.password,
            passwordConf: this.passwordconf
          };
          var res = await AccountAPI.register(params);
          console.log(res);
        } else {
          this.status = "Password does not match.";
        }
      } else {
        this.status = "Please enter vaild information.";
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
