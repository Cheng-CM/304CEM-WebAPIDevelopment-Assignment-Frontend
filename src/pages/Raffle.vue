<template>
  <div>
    <header class="bg-primary py-5 mb-3 bgimg">
      <div class="container h-50">
        <div class="row h-100 align-items-center">
          <div class="col-lg-12">
            <h1 class="display-4 text-white mt-5 mb-2">User Item & Raffle</h1>
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
          <create-raffle/>
        </div>
      </div>
      <hr>
      <div class="col">
        <table class="table table-bordered table-striped table-responsive text-nowrap">
          <thead>
            <tr>
              <th scope="col">Action</th>
              <th scope="col">Raffle Name</th>
              <th scope="col">Item</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colspan="4" class="text-center">Nothing Here! Create one now!</td>
            </tr>
            <tr>
              <td>
                <base-button type="danger" icon="ni ni-fat-remove"></base-button>
                <base-button type="warning" icon="ni ni-settings-gear-65"></base-button>
              </td>
              <td>Mark</td>
              <td>Otto</td>
              <td>
                <base-button type="info">status</base-button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="container text-center">
      <div class="col-mb-2 text-left">
        <h4>Items</h4>
        <hr>
      </div>
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
            <tr>
              <td colspan="4" class="text-center">Nothing Here! Create one now!</td>
            </tr>
            <tr>
              <td>
                <base-button type="danger" icon="ni ni-fat-remove"></base-button>
                <base-button type="warning" icon="ni ni-settings-gear-65"></base-button>
              </td>
              <td>Mark</td>
              <td>Otto</td>
              <td>
                <base-button type="info">status</base-button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import BaseButton from "../components/BaseButton.vue";
import CreateRaffle from "./CreateRaffle.vue";
export default {
  name: "UserCreated",
  data() {
    return {
      raffles: []
    };
  },
  created() {
    if (!this.$cookies.get("UserId")) {
      this.$router.push("/login");
    }
  },
  components: {
    BaseButton,
    CreateRaffle
  }
};
</script>
