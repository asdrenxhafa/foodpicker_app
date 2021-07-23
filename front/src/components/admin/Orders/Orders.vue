<template v-slot:default>
  <div class="table-parent">
    <h1 class="title">Orders</h1>
    <v-simple-table class="restaurant-parent">
      <v-btn slot="activator" color="primary" dark class="mb-2">New Item</v-btn>
      <template>
        <thead>
        <tr>
          <th class="text-left">#</th>
          <th class="text-left">Title</th>
          <th class="text-left">Details</th>
          <th class="text-left">Location</th>
          <th class="text-left">Telephone</th>
          <th class="text-left">Actions</th>
        </tr>
        </thead>
        <tbody>
        <tr class="tbody-table" v-for="order in orders" :key="order.id">
          <td>{{ order.id }}</td>
          <td>{{ order.title }}</td>
          <td>{{ order.details }}</td>
          <td>{{ order.location }}</td>
          <td>{{ order.telephone }}</td>
          <td>
            <!--              <v-card-actions>-->
            <v-btn color="blue darken-1" dark v-on:click="pranoporosine(order.id)"
            >Prano Porosine
            </v-btn
            >
            <!--            </v-card-actions>-->
          </td>
        </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
  <!-- <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.native="close">Cancel</v-btn>
          <v-btn color="blue darken-1" flat @click.native="save">Save</v-btn>
        </v-card-actions> -->
</template>

<script>
import axios from "axios";

export default {
  name: "Orders",
  data() {
    return {
      orders: [],
    };
  },
  created() {
    if (localStorage.getItem('token') === null) {
      this.$router.push('/AdminLogin');
    }
    this.fetchOrders();
  },
  methods: {
    fetchOrders() {
      axios
          .get("http://localhost:8000/api/orders")
          .then((res) => (this.orders = res.data))
          .catch();
    },

    pranoporosine(orderId) {
      axios.post('http://localhost:8000/api/orders/' + orderId + '/prano',)
          .then(() => this.fetchOrders())
          .catch(e => {
            console.log(e);
          })
    }
  }
};
</script>

<style scoped>
.text-left {
  font-family: monospace;
}
</style>