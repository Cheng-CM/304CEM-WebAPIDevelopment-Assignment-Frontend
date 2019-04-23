<template>
  <div>
    <header class="bg-primary py-5 mb-3 bgimg">
      <div class="container h-50">
        <div class="row h-100 align-items-center">
          <div class="col-lg-12">
            <h1 class="display-4 text-white mt-5 mb-2">Your Item & Raffle</h1>
          </div>
        </div>
      </div>
    </header>

    <div class="container text-center">
      <div class="row">
        <div class="col-md-8 text-left">
          <h4>Raffles</h4>
        </div>
        <div class="col-md-4">
          <div class="row">
            <base-button type="neutral" icon="fa fa-refresh" @click="update()"></base-button>
            <create-raffle/>
          </div>
        </div>
      </div>
      <hr>
      <div class="col">
        <table class="table table-bordered table-striped table-responsive text-nowrap">
          <thead>
            <tr>
              <th scope="col">Action</th>
              <th scope="col">Raffle Name</th>
              <th scope="col">Description</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="raffles.length <= 0">
              <td colspan="4" class="text-center">Nothing Here! Create one now!</td>
            </tr>
            <tr v-else v-for="raffle in raffles" v-bind:key="raffle._id">
              <td>
                <base-button
                  type="danger"
                  icon="ni ni-fat-remove"
                  @click="deleteRaffle(raffle._id)"
                ></base-button>
                <base-button
                  type="warning"
                  class="mb-1"
                  icon="ni ni-settings-gear-65"
                  @click=" modal3 = true, loadRaffle(raffle)"
                ></base-button>
              </td>
              <td>{{raffle.name}}</td>
              <td>{{raffle.description}}</td>
              <td>
                <base-button
                  v-if="raffle.active == true"
                  type="success"
                  @click="changeStatus(raffle,false)"
                >Active</base-button>
                <base-button
                  v-if="raffle.active == false"
                  type="danger"
                  @click="changeStatus(raffle,true)"
                >Inactive</base-button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="container text-center">
      <div class="row">
        <div class="col-md-8 text-left">
          <h4>Items</h4>
        </div>
        <div class="col-md-4">
          <create-item/>
        </div>
      </div>
      <hr>
      <div class="col">
        <table class="table table-bordered table-striped table-responsive text-nowrap">
          <thead>
            <tr>
              <th scope="col">Action</th>
              <th scope="col">Item Name</th>
              <th scope="col">Description</th>
              <th scope="col">Image</th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="items.length <= 0">
              <td colspan="4" class="text-center">Nothing Here! Create one now!</td>
            </tr>
            <tr v-else v-for="item in items" v-bind:key="item._id">
              <td>
                <base-button type="danger" icon="ni ni-fat-remove" @click="deleteItem(item._id)"></base-button>
                <base-button
                  type="warning"
                  class="mb-1"
                  icon="ni ni-settings-gear-65"
                  @click=" modal2 = true, loadItem(item)"
                ></base-button>
              </td>
              <td>{{item.name}}</td>
              <td>{{item.description}}</td>
              <td class="img">
                <img class="card-img-top" :src="item.img">
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col-md-4">
        <modal
          :show.sync="modal"
          gradient="danger"
          modal-classes="modal-danger modal-dialog-centered"
        >
          <div class="py-3 text-center">
            <i class="ni ni-bell-55 ni-3x"></i>
            <p>Delete raffle that use the item first then the Item.</p>
          </div>
          <template slot="footer">
            <base-button type="link" text-color="white" class="ml-auto" @click="modal = false">Close</base-button>
          </template>
        </modal>
        <modal :show.sync="modal2" body-classes="p-0" modal-classes="modal-dialog-centered modal">
          <card
            type="neutral"
            shadow
            header-classes="bg-white pb-5"
            body-classes="px-lg-5 py-lg-5"
            class
          >
            <template>
              <div class="text-center mb-4">
                <p>Edit Item</p>
              </div>
              <form role="form">
                <base-input class="mb-3" placeholder="Item Name" v-model="item.name"></base-input>
                <textarea
                  class="form-control mb-3"
                  rows="3"
                  v-model="item.description"
                  placeholder="Item Description"
                ></textarea>
                <image-uploader
                  :debug="0"
                  :maxWidth="512"
                  :quality="1"
                  :autoRotate="true"
                  outputFormat="string"
                  accept="image/*"
                  doNotResize="['gif', 'svg']"
                  v-model="item.img"
                ></image-uploader>
                <div class="text-center">
                  <base-button type="primary" class="my-4" @click="updateItem()">Edit</base-button>
                </div>
                <div class="text-center warning">
                  <p class="text-danger">{{status}}</p>
                </div>
              </form>
            </template>
          </card>
        </modal>
        <modal :show.sync="modal3" body-classes="p-0" modal-classes="modal-dialog-centered modal">
          <card
            type="neutral"
            shadow
            header-classes="bg-white pb-5"
            body-classes="px-lg-5 py-lg-5"
            class
          >
            <template>
              <div class="text-center mb-4">
                <p v-if="items.length > 0">Edit raffle</p>
                <p v-else>Create an item first!</p>
              </div>
              <form role="form" v-if="items.length > 0">
                <base-input class="mb-3" placeholder="Raffle Name" v-model="raffle.name"></base-input>
                <textarea
                  class="form-control mb-3"
                  rows="3"
                  v-model="raffle.description"
                  placeholder="Raffle Description"
                ></textarea>
                <base-dropdown>
                  <base-button slot="title" type="secondary" class="dropdown-toggle">Item</base-button>
                  <a
                    v-bind:key="item.id"
                    v-for="item in items"
                    class="dropdown-item"
                    href="#"
                    @click="changeImg(item.img), raffle.item = item._id"
                  >{{item.name}}</a>
                </base-dropdown>
                <img v-if="raffle.img" class="card-img-top" :src="raffle.img">
                <div class="text-center">
                  <base-button type="primary" class="my-4" @click="updateRaffle()">Edit</base-button>
                </div>
                <div class="text-center warning">
                  <p class="text-danger">{{status}}</p>
                </div>
              </form>
            </template>
          </card>
        </modal>
      </div>
    </div>
  </div>
</template>
<script>
import BaseButton from "../components/BaseButton.vue";
import BaseDropdown from "../components/BaseDropdown.vue";
import Modal from "../components/Modal.vue";
import CreateRaffle from "./CreateRaffle.vue";
import CreateItem from "./CreateItem.vue";
import ItemAPI from "../api/item.js";
import RaffleAPI from "../api/raffle.js";

export default {
  name: "UserCreated",
  data() {
    return {
      items: [],
      raffles: [],
      modal: false,
      modal2: false,
      modal3: false,
      status: "",
      item: { img: "", description: "", name: "", id: "" },
      raffle: { item: "", description: "", name: "", id: "", img: "" }
    };
  },
  methods: {
    async getTokenByCookies() {
      if (this.$cookies.get("token")) {
        return this.$cookies.get("token");
      } else {
        this.$router.push("/login");
        return "";
      }
    },
    async changeImg(img) {
      this.raffle.img = img;
    },
    async update() {
      var items = await ItemAPI.findItemByCreated(this.$cookies.get("UserId"));
      this.items = items.data;

      var raffles = await RaffleAPI.findCreatedBy(this.$cookies.get("UserId"));
      this.raffles = raffles.data;
    },
    async deleteItem(id) {
      var jwt = this.$cookies.get("token");
      var res = await ItemAPI.deletebyId(id, jwt);

      if (res.data == "Delete Raffle first then Item.") {
        this.modal = true;
      }
      this.update();
    },
    async deleteRaffle(id) {
      var jwt = this.$cookies.get("token");
      await RaffleAPI.deletebyId(id, jwt);
      this.update();
    },
    async updateItem() {
      if (
        this.item.name &&
        this.item.description &&
        this.item.img &&
        this.item.id
      ) {
        var params = {
          name: this.item.name,
          description: this.item.description,
          img: this.item.img
        };

        var jwt = await this.getTokenByCookies();

        await ItemAPI.updateById(this.item.id, params, jwt);
        this.modal2 = false;
      } else {
        this.status = "Invaild Information.";
      }
      this.update();
    },
    async updateRaffle() {
      if (this.raffle.name && this.raffle.description && this.raffle.item) {
        var params = {
          name: this.raffle.name,
          description: this.raffle.description,
          item: this.raffle.item
        };

        var jwt = await this.getTokenByCookies();

        await RaffleAPI.updateById(this.raffle.id, params, jwt);
        this.modal3 = false;
      } else {
        this.status = "Invaild Information.";
      }
      this.update();
    },
    async changeStatus(raffle, boolean) {
      var jwt = this.$cookies.get("token");
      await RaffleAPI.updateStatus(raffle._id, boolean, jwt);

      raffle._id = boolean;
      this.update();
    },
    loadItem(item) {
      this.item.img = item.img;
      this.item.name = item.name;
      this.item.description = item.description;
      this.item.id = item._id;
    },
    loadRaffle(item) {
      this.raffle.img = item.img;
      this.raffle.name = item.name;
      this.raffle.description = item.description;
      this.raffle.id = item._id;
    }
  },
  async created() {
    if (!this.$cookies.get("UserId")) {
      this.$router.push("/login");
    }
    this.update();
  },
  components: {
    BaseButton,
    BaseDropdown,
    CreateRaffle,
    CreateItem,
    Modal
  }
};
</script>
<style>
.img {
  height: 85px;
  width: 85px;
}
</style>
