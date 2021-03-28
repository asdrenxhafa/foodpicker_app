<template>
  <div class="col-md-6 col-sm-6">
    <h4>{{ this.restaurant.name }}</h4>
    <span><img :src="this.restaurant.images[0].url"></span>
    <h4>{{ this.restaurant.hours[0].from + " " + this.restaurant.hours[0].to }}</h4>
  </div>
</template>

<script>
export default {
name: "RestaurantItem",
  props : ['restaurant']
}
</script>

<style scoped>

</style>