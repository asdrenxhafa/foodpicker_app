<template>
  <v-app>
    <v-app-bar app color="indigo" dark>
      <div class="header-parent">
        <div>
          <v-btn text v-on:click="changeBodyState('restaurants')">
            Restaurants
          </v-btn>

          <v-btn text v-on:click="changeBodyState('food')"> Foods </v-btn>
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
          <!-- <v-btn
            right
            color="indigo"
            dark
            v-on:click="createres('CreateFoods')"
            v-if="this.restaurantOrFoods === 'food'"
            >Create New Foods</v-btn
          > -->
        </div>
      </div>
    </v-app-bar>

    <v-main>
      <template v-if="this.restaurantOrFoods === 'restaurants'">
        <Restaurants></Restaurants>
      </template>

      <template v-if="this.restaurantOrFoods === 'food'">
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
  components: { Foods, Restaurants },
  data() {
    return {
      restaurantOrFoods: "restaurants",
    };
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