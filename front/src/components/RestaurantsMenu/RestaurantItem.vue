<template>
  <div class="col-md-6 col-sm-6">
<!--    <h4>{{ this.restaurant.name }}</h4><span><img :src="this.restaurant.images[0].url"></span>-->
    <h4>{{ this.restaurant.name }}</h4><span><img src="C:\Users\Asdren\Desktop\foodpicker_app\back\images\1615559417304.png"></span>
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