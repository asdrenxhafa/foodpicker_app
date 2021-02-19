<template>
  <div class="col-md-6 col-sm-6">
    <h4>{{ this.restaurant.name }}</h4><span><img :src="this.restaurant.logo"></span>
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