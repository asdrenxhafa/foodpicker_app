<template  v-slot:default>
  <div class="table-parent">
    <h1 class="title">Orders</h1>
    <v-simple-table class="restaurant-parent">
      <v-btn slot="activator" color="primary" dark class="mb-2">New Item</v-btn>
      <template>
        <thead>
          <tr>
            <th class="text-left">Order</th>
            <th class="text-left">Food</th>
            <th class="text-left">Restaurant</th>
            <th class="text-left">Price</th>
            <th class="text-actions">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr  class="tbody-table">
            <!-- <td>{{ res.name }}</td>
            <td>{{ res.location[0].city }},{{ res.location[0].street }}</td>
            <td>{{ res.description }}</td>
            <td>{{ res.telephone }}</td> -->
            <td>
              <v-card-actions>
              <v-btn color="blue darken-1" dark v-on:click="pranoporosine(order)"
                >Prano Porosine</v-btn
              >
            </v-card-actions>
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
    if(localStorage.getItem('token')===null){
      this.$router.push('/AdminLogin');
    }
    axios
      .get("http://localhost:8000/api/orders")
      .then((res) => (this.orders = res.data))
      .catch();

  },methods:{
    //   pranoporosine(order){

    //   }
  }
};
</script>

<style scoped>
.text-left{
  font-family:monospace;
}
</style>