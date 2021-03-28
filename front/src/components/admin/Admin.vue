<template>
  <v-app>
    <v-app-bar app color="indigo" dark>
      <div class="header-parent">
        <div>
          <v-btn text v-on:click="changeBodyState('restaurants')">
            Restaurants
          </v-btn>

        </div>
        <div>
          <v-btn
            right
            color="indigo"
            dark
            v-on:click="createres('CreateRestaurant')"
            v-if="this.restaurantOrFoods === 'restaurants'"
            >Create New Restaurant</v-btn
          >
          <v-btn
            right
            color="indigo"
            dark
            v-on:click="createres('CreateFoods')"
            v-if="this.restaurantOrFoods === 'food'"
            >Create New Foods</v-btn
          >
        </div>
      </div>
    </v-app-bar>

    <v-main>
      <template v-if="this.restaurantOrFoods === 'restaurants'">
        <Restaurants></Restaurants>
      </template>


      <router-view />
    </v-main>
  </v-app>
</template>


<script>
import Restaurants from "@/components/admin/Restaurants/Restaurants";
export default {
  components: { Restaurants },
  data() {
    return {
      restaurantOrFoods: "restaurants",
    };
  },
  created(){
    if(localStorage.getItem('token')===null){
      this.$router.push('/AdminLogin');
    }
  },
  methods: {
    changeBodyState(name) {
      this.restaurantOrFoods = name;
    },
    createres(routeName) {
      this.$router.push({
        name: routeName,
      });
    },
  },
};
</script>


<style>
</style>