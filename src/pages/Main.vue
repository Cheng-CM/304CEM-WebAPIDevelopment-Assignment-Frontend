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
          <a class="btn btn-primary btn-lg" href="/raffles">Take part now &raquo;</a>
        </div>
        <div class="col-md-4 mb-5">
          <h2>How to Use</h2>
          <hr>
          <p>If you see any items you want, click the item and join the raffle. </p>
          
        </div>
      </div>
      <!-- /.row -->

      <div class="row">
        <div v-for="item in raffles" v-bind:key='item._id' class="col-md-4 mb-5">
          <div class="card h-100">
            <img class="card-img-top" :src="item.img">
        
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
        res.data[i].img = element.data.img;
      }
      this.raffles = res.data;
      // console.log(this.raffles);
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