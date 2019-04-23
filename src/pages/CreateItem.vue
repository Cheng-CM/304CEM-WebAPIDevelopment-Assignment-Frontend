<template>
  <div class="col">
    <base-button block type="success" class="mb-1" @click="modal = true">Create Item</base-button>
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
            <p>Create Item</p>
          </div>
          <form role="form">
            <base-input class="mb-3" placeholder="Item Name" v-model="name"></base-input>
            <textarea
              class="form-control mb-3"
              rows="3"
              v-model="description"
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
              v-model="img"
            ></image-uploader>
            <div class="text-center">
              <base-button type="primary" class="my-4" @click="createItem()">Create</base-button>
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
import Modal from "../components/Modal.vue";
import ItemAPI from "../api/item.js";
export default {
  name: "create-item",
  components: {
    Modal,
    BaseInput,
    BaseButton
  },
  data() {
    return {
      modal: false,
      name: "",
      description: "",
      status: "",
      img: ""
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
    clear() {
      this.img = "";
      this.status = "";
      this.name = "";
      this.description = "";
    },
    async createItem() {
      if (this.name && this.description && this.img) {
        var params = {
          name: this.name,
          description: this.description,
          createdBy: await this.getIdByCookies(),
          img: this.img
        };
        var jwt = await this.getTokenByCookies();

        await ItemAPI.create(params, jwt);

        this.modal = false;
        this.clear();
      } else {
        this.status = "Invaild Information.";
      }
    }
  }
};
</script>
