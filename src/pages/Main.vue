<template>
  <div>
    <!-- Header -->
    <header class="bg-primary py-5 mb-5 bgimg">
      <div class="container h-100">
        <div class="row h-100 align-items-center">
          <div class="col-lg-12">
            <h1 class="display-4 text-white mt-5 mb-2">Raffle and Lottery for donating free stuff!</h1>
            <p
              class="lead mb-5 text-white-50"
            >Donate free books, furnitures, kitchen appliances to others.</p>
          </div>
        </div>
      </div>
    </header>

    <!-- Page Content -->
    <div class="container">
      <div class="row">
        <div class="col-md-8 mb-5">
          <h2>What We Do</h2>
          <hr>
          <p>We promote recycling and saving earth through donating and give stuff to people in needs.</p>
          <a class="btn btn-primary btn-lg" href="#">Take part now &raquo;</a>
        </div>
        <div class="col-md-4 mb-5">
          <h2>Hotest Item</h2>
          <hr>
          <address>
            <strong></strong>
            <br>3481 Melrose Place
            <br>Beverly Hills, CA 90210
            <br>
          </address>
          <address>
            <abbr title="Phone">P:</abbr>
            (123) 456-7890
            <br>
            <abbr title="Email">E:</abbr>
            <a href="mailto:#">name@example.com</a>
          </address>
        </div>
      </div>
      <!-- /.row -->

      <div class="row">
        <div v-for="item in raffles" v-bind:key='item._id' class="col-md-4 mb-5">
          <div class="card h-100">
            <img class="card-img-top" :src="`data:image/jpeg;base64,` + item.img">
            <!-- <img class="card-img-top" src="http://placehold.it/300x200" alt> -->
            <div class="card-body">
              <h4 class="card-title">{{item.name}}</h4>
              <p class="card-text">{{item.description}}</p>
            </div>
            <div class="card-footer">
              <a :href="`/raffle/`+item._id" class="btn btn-primary">Check it out</a>
            </div>
          </div>
        </div>
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
  </div>
</template>

<script>
import RaffleAPI from "../api/raffle.js";
import ItemAPI from "../api/item.js";
export default {
  name: "Main",
  data() {
    return {
      raffles: []
    };
  },
  methods: {
    async getRaffle() {
      var res = await RaffleAPI.findActive();
      for (let i = 0; i < res.data.length; i++) {
        const element = await ItemAPI.findItemById(res.data[i].item);
        res.data[i].img = this._arrayBufferToBase64(element.data.img.data.data);
      }
      this.raffles = res.data;
      // console.log(this.raffles);
    },
    _arrayBufferToBase64(buffer) {
      var binary = "";
      var bytes = new Uint8Array(buffer);
      var len = bytes.byteLength;
      for (var i = 0; i < len; i++) {
        binary += String.fromCharCode(bytes[i]);
      }
      return window.btoa(binary);
    }
  },
  created() {
    this.getRaffle();
  },
  mounted() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

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
.bgimg {
  background-image: url("../assets/Theme.jpg");
  background-size: cover;
}
</style>