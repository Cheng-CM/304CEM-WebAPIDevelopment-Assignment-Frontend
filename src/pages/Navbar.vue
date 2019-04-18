<template>
  <div>
    <base-nav type="default" effect="dark" expand title="Raffle.com" class="mt-0">
      <ul class="navbar-nav ml-lg-auto">
        <li class="nav-item">
          <a class="nav-link" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" v-if="this.$cookies.get('UserId')" href @click="signout()">Logout</a>
          <a class="nav-link" v-else href="/login">Login</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" v-if="this.$cookies.get('UserId')" href="/profile">{{ userName }}</a>
        </li>
      </ul>
      <div class="container">
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto"></ul>
        </div>
      </div>
    </base-nav>
  </div>
</template>
<script>
import BaseNav from "../components/BaseNav.vue";
import CloseButton from "../components/CloseButton";
import AccountAPI from "../api/user.js";
export default {
  name: "Navbar",
  components: {
    BaseNav,
    CloseButton
  },
  data() {
    return {
      userName: ""
    };
  },
  methods: {
    async getUserByCookies() {
      var res = await AccountAPI.getUserInfo(this.$cookies.get("UserId"));
      console.log(res);
      this.userName = res.data.username;
    },
    async signout() {
      var res = await AccountAPI.destoryCookies(this.$cookies.get("UserId"));
      this.$cookies.remove("UserId");
      this.$root.reload();
      this.$router.push("/");
    }
  },
  mounted() {
    this.getUserByCookies();
  }
};
</script>
<style lang="css">
body {
  padding-top: 0px;
  margin: 0px;
}
</style>

