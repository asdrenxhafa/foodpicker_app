<template  v-slot:default>
  <div>
    <h1 class="title">Foods</h1>
    <v-simple-table class="restaurant-parent">
      <v-btn slot="activator" color="primary" dark class="mb-2">New Item</v-btn>
      <template>
        <thead>
          <tr>
            <th class="text-left">Name</th>
            <th class="text-left">Description</th>
            <th class="text-left">Price</th>
            <th class="text-left">Photo</th>
            <th class="text-actions">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="res in restaurants" :key="res._id" class="tbody-table">
            <td>{{ res.name }}</td>
            <td>{{ res.location[0].city }},{{ res.location[0].street }}</td>
            <td>{{ res.description }}</td>
            <td>{{ res.telephone }}</td>
            <td>
              <v-card-actions>
              <v-btn color="blue darken-1" dark v-on:click="editres(res)"
                >Edit</v-btn
              >
              <v-btn color="red darken-1" dark v-on:click="deleteres(res)"
                >Delete</v-btn
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
  name: "Foods",
  data(){
    return{
      restaurants : [],
    }
  },
  created() {
    axios.get('http://localhost:4000/restaurants').then( res =>
        this.restaurants= res.data,
    ).catch();
  },
}
</script>

<style scoped>

</style>