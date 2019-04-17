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
            type="default"
            shadow
            header-classes="bg-white pb-5"
            body-classes="px-lg-5 py-lg-5"
            class="border-0"
          >
            <template>
              <div class="text-muted text-center mb-3">
                <small>Sign in</small>
              </div>
         
            </template>
            <template>
            
              <form role="form">
                <base-input
                  
                  class="mb-3"
                  placeholder="Email"
                  addon-left-icon="ni ni-email-83"
                ></base-input>
                <base-input
                  
                  type="password"
                  placeholder="Password"
                  addon-left-icon="ni ni-lock-circle-open"
                ></base-input>
                <base-checkbox>Remember me</base-checkbox>
                <div class="text-center">
                  <base-button type="primary" class="my-4">Sign In</base-button>
                </div>
              </form>
            </template>
          </card>
          <div class="row mt-3">
            <div class="col-6">
              <a href="#" class="text-light">
                <small>Forgot password?</small>
              </a>
            </div>
            <div class="col-6 text-right">
              <a href="#" class="text-light">
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
import BaseCheckbox from "../components/BaseCheckbox.vue";
import BaseInput from "../components/BaseInput.vue";
import Card from "../components/Card.vue";
export default {
  name: "login",
  components: {
    BaseButton,
    BaseCheckbox,
    BaseInput,
    Card
  }
};
</script>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 0px;
  padding-top: 0px;
}
</style>
