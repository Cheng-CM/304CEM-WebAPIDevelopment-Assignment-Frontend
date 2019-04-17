<template>
  <div>
    <base-nav type="default" effect="dark" expand title="Raffle.com" class="mt-0">
      <div class="container">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a class="nav-link" href="/">
                Home
                <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Services</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" :href="status.link">{{status.text}}</a>
            </li>
          </ul>
        </div>
      </div>
    </base-nav>
  </div>
</template>
<script>
import BaseNav from "./BaseNav.vue";

export default {
  name: "Navbar",
  components: {
    BaseNav
  },
  data() {
    return {
      status: {
        text: "Login",
        link: "/#/login"
      }
    };
  },
  method: {}
};
</script>
<style lang="css">
body {
  padding-top: 0px;
  margin: 0px;
}
</style>

