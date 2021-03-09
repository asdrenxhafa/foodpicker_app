<template>
  <v-app>
    <v-app-bar app color="indigo" dark>
      <v-btn text v-on:click="changeBodyState()">
        Restaurants
      </v-btn>

      <v-btn text v-on:click="changeBodyState()">
        Foods
      </v-btn>
    </v-app-bar>

    <v-main>

      <template v-if="this.restaurantOrFoods === 0">
        <Restaurants></Restaurants>
      </template>

      <template v-if="this.restaurantOrFoods === 1">
        <Foods></Foods>
      </template>


      <router-view />
    </v-main>
  </v-app>
</template>


<script>
import Restaurants from "@/components/admin/Restaurants/Restaurants";
import Foods from "@/components/admin/Foods/Foods";
export default {
  components: {Foods, Restaurants},
    data(){
      return{
        restaurantOrFoods : 0,
      }
    },
  methods : {
    changeBodyState(){
      if(this.restaurantOrFoods == 0 ){
        this.restaurantOrFoods = 1;
      }else if(this.restaurantOrFoods == 1){
        this.restaurantOrFoods = 0;
      }
    }
  },
}
</script>


<style>

</style>