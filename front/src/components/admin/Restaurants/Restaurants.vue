<template>
  <v-simple-table>
    <v-btn slot="activator" color="primary" dark class="mb-2">New Item</v-btn>
    <template v-slot:default>
      <thead>
      <h1>Restaurants</h1>
      <tr>
        <th class="text-left">
          Emri
        </th>
        <th class="text-left">
          Location
        </th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="res in restaurants"
        :key="res._id">
        <td>{{res.name}}</td>
        <td>{{res.location[0].city}},{{res.location[0].street}}</td>
        <v-card-actions>
        <v-btn color="blue darken-1" dark v-on:click="editres(res._id)">Details</v-btn>
        <v-btn color="blue darken-1" dark v-on:click="deleteres(res._id)">Delete</v-btn>
        </v-card-actions>
      </tr>
      </tbody>
    </template>
  </v-simple-table>
  <!-- <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.native="close">Cancel</v-btn>
          <v-btn color="blue darken-1" flat @click.native="save">Save</v-btn>
        </v-card-actions> -->

</template>

<script>
import axios from "axios";

export default {
name: "Restaurants",
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
  methods:{
    editres(restaurant){
      console.log(restaurant.id);
      this.$router.push({
        name:'EditRestaurant',
        params:{id:restaurant.id}
      })
    },
    deleteres(restaurant){
      axios.delete('http://localhost:4000/restaurants/'+restaurant)
      .then((res)=>{
        console.log(res);
        this.$router.go();
      }).catch();
    }
  }
}
</script>

<style scoped>

</style>