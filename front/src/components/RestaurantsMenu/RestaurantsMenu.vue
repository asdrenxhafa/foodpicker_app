<template>
  <!-- menu section -->
  <section id="menu" class="parallax-section">
    <div class="container">
      <div class="row images">
        <div class="col-md-offset-2 col-md-8 col-sm-12 text-center">
          <h1 class="heading">Places to eat...</h1>
          <hr>
        </div>

        <RestaurantItem v-for="restaurant in restaurants" :key="restaurant.id" :restaurant="restaurant"></RestaurantItem>


      </div>
    </div>
  </section>
</template>

<script>
import RestaurantItem from "@/components/RestaurantsMenu/RestaurantItem";
import axios from "axios";

export default {
name: "RestaurantsMenu",
  components: {RestaurantItem},
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