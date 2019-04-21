<template>
  <div class="col">
    <base-button
      block
      type="success"
      class="mb-1"
      @click="modal = true, getItemByUserId(),clear();"
    >Create Raffle</base-button>
    <modal :show.sync="modal" body-classes="p-0" modal-classes="modal-dialog-centered modal">
      <card
        type="neutral"
        shadow
        header-classes="bg-white pb-5"
        body-classes="px-lg-5 py-lg-5"
        class
      >
        <template>
          <div class="text-center mb-4">
            <p v-if="items.length > 0">Create raffle</p>
            <p v-else>Create an item first!</p>
          </div>
          <form role="form" v-if="items.length > 0">
            <base-input class="mb-3" placeholder="Raffle Name" v-model="name"></base-input>
            <textarea
              class="form-control mb-3"
              rows="3"
              v-model="description"
              placeholder="Raffle Description"
            ></textarea>
            <base-dropdown>
              <base-button slot="title" type="secondary" class="dropdown-toggle">Item</base-button>
              <a
                v-bind:key="item.id"
                v-for="item in items"
                class="dropdown-item"
                href="#"
                @click="changeImg(item.img), itemId = item._id"
              >{{item.name}}</a>
            </base-dropdown>
            <img v-if="img" class="card-img-top" :src="img">
            <div class="text-center">
              <base-button type="primary" class="my-4" @click="createRaffle()">Create</base-button>
            </div>
            <div class="text-center warning">
              <p class="text-danger">{{status}}</p>
            </div>
          </form>
        </template>
      </card>
    </modal>
  </div>
</template>
<script>
import BaseInput from "../components/BaseInput.vue";
import BaseButton from "../components/BaseButton.vue";
import BaseDropdown from "../components/BaseDropdown.vue";
import Modal from "../components/Modal.vue";
import ItemAPI from "../api/item.js";
import RaffleAPI from "../api/raffle.js";
export default {
  name: "create-raffle",
  components: {
    Modal,
    BaseInput,
    BaseButton,
    BaseDropdown
  },
  data() {
    return {
      modal: false,
      items: [],
      img: "",
      itemId: "",
      name: "",
      description: "",
      status: ""
    };
  },
  methods: {
    async getIdByCookies() {
      if (this.$cookies.get("UserId")) {
        return this.$cookies.get("UserId");
      } else {
        this.$router.push("/login");
        return "";
      }
    },
    async getTokenByCookies() {
      if (this.$cookies.get("token")) {
        return this.$cookies.get("token");
      } else {
        this.$router.push("/login");
        return "";
      }
    },
    async getItemByUserId() {
      var id = await this.getIdByCookies();
      var res = await ItemAPI.findItemByCreated(id);
      this.items = res.data;
      this.clear();
    },
    _arrayBufferToBase64(buffer) {
      var binary = "";
      var bytes = new Uint8Array(buffer);
      var len = bytes.byteLength;
      for (var i = 0; i < len; i++) {
        binary += String.fromCharCode(bytes[i]);
      }
      return window.btoa(binary);
    },
    changeImg(img) {
      this.img = img;
    },
    clear() {
      this.img = "";
      this.status = "";
      if (this.items.length <= 0) {
        this.status = "You don't have an item!";
      } else {
        this.status = "";
      }
    },
    async createRaffle() {
      if (this.name && this.description && this.itemId) {
        var params = {
          name: this.name,
          description: this.description,
          item: this.itemId,
          createdBy: await this.getIdByCookies()
        };
        var jwt = await this.getTokenByCookies();

        await RaffleAPI.create(params, jwt);
        this.modal = false;
      } else {
        this.status = "Invaild Information.";
      }
    }
  }
};
</script>
