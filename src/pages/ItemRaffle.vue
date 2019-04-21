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
                  <img v-lazy="item.img" class="rounded-circle">
                </div>
              </div>
              <div class="col-lg-4 order-lg-3 text-lg-right align-self-lg-center">
                <div class="card-profile-actions py-4 mt-lg-0">
                  <base-button
                    type="info"
                    size="sm"
                    class="mr-4"
                    v-if="joinCheck()"
                    @click="join()"
                  >Join!</base-button>
                </div>
              </div>
              <div class="col-lg-4 order-lg-1">
                <div class="card-profile-stats d-flex justify-content-center">
                  <div>
                    <span class="heading">{{joinedUser.length}}</span>
                    <span class="description">Joined</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="text-center mt-5">
              <h3>{{raffle.name}}</h3>
              <div class="h6 font-weight-300"></div>
              <div class="h6 mt-4">
                <i class="ni business_briefcase-24 mr-2"></i>
                {{item.name}}
              </div>
            </div>
            <div class="mt-5 py-3 border-top text-center">
              <div class="row justify-content-center">
                <div class="col-lg-9">
                  <p>{{raffle.description}}</p>
                </div>
              </div>
            </div>
            <div class="mt-5 py-3 border-top text-center">
              <div class="row">
                <div class="col-lg-2" v-for="user in joinedUser" v-bind:key="user">
                  <p>{{user}}</p>
                </div>
              </div>
            </div>
          </div>
        </card>
      </div>
    </section>
  </div>
</template>
<script>
import RaffleAPI from "../api/raffle.js";
import ItemAPI from "../api/item.js";
import AccountAPI from "../api/user.js";
export default {
  name: "raffle",
  data() {
    return {
      raffle: {
        id: "",
        name: "",
        description: "",
        joined: []
      },
      item: {
        id: "",
        img: "",
        name: ""
      },
      user: {
        id: "",
        username: ""
      },
      joinedUser: []
    };
  },
  methods: {
    async loadInfo() {
      var res = await RaffleAPI.findRaffleById(this.$route.params.id);
      this.raffle.id = res.data._id;
      this.raffle.name = res.data.name;
      this.raffle.description = res.data.description;
      this.raffle.joined = res.data.joined;
      var item = await ItemAPI.findItemById(res.data.item);
      this.item.id = item.data._id;
      this.item.img = item.data.img;
      this.item.name = item.data.name;
      var user = await AccountAPI.getUserInfo(res.data.createdBy);
      this.user.id = user.data._id;
      this.user.username = user.data.username;
      for (let i = 0; i < this.raffle.joined.length; i++) {
        const element = this.raffle.joined[i];
        var res = await AccountAPI.getUserInfo(element);
        console.log(res);
        this.joinedUser[i] = res.data.username;
      }
      console.log(this.joinedUser);
      
    },
    joinCheck() {
      return this.$cookies.get("UserId") != this.user.id;
    },
    async join() {
      var jwt = await this.$cookies.get("token");
      console.log(jwt)
      console.log(this.raffle.id, this.$cookies.get("UserId"));
      var res = await RaffleAPI.join(
        this.raffle.id,
        this.$cookies.get("UserId"),
        jwt
      );
      console.log(res);
    }
  },
  created() {
    this.loadInfo();
    this.joinCheck();
  }
};
</script>
<style>
</style>
