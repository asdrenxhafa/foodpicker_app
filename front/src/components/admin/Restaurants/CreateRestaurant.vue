<template>
  <v-form ref="form" v-model="valid" lazy-validation @submit="onSubmit">
    <v-text-field
      v-model.trim="restaurant.name"
      :counter="10"
      :rules="nameRules"
      label="Name"
      required
    ></v-text-field>
    <v-text-field
      v-model.trim="restaurant.description"
      label="Description"
      required
    ></v-text-field>

    <v-file-input
      v-model="this.restaurnt_image"
      show-size
      counter
      multiple
      label="Foto"
      required
    ></v-file-input>

    <v-text-field
      v-model.trim="restaurant.location[0].city"
      label="Qyteti"
      required
    ></v-text-field>

    <v-text-field
      v-model.trim="restaurant.location[0].street"
      label="Rruga"
      required
    ></v-text-field>

    <v-text-field
      v-model.trim="restaurant.telephone"
      :counter="9"
      :rules="telRules"
      label="Phone Number"
      required
    ></v-text-field>
    <v-btn :disabled="!valid" color="success" class="mr-4" @click="onSubmit">
      Shto
    </v-btn>

    <v-btn color="error" class="mr-4" @click="reset"> Reseto Formen </v-btn>
  </v-form>
</template>

<script>
import axios from 'axios';
export default {
  name: "CreateRestaurant",
  data() {
    return {
      restaurnt: {},
      restaurnt_image : null,
    };
  },
  methods: {
    onSubmit(evt) {

      var formData = new FormData();
      formData.append("image", this.restaurnt_image[0]);
      formData.append("restaurant_name", this.restaurant.name);
      formData.append("restaurant_description", this.restaurant.description);
      formData.append("restaurant_images_public_id", this.restaurant.images[0].public_id);
      formData.append("restaurant_images_url", this.restaurant.images[0].url);
      formData.append("restaurant_location_city", this.restaurant.location[0].city);
      formData.append("restaurant_location_street", this.restaurant.location[0].street);
      formData.append("restaurant_telephone", this.restaurant.telephone);

      evt.preventDefault();
      axios.post(`http://localhost:4000/restaurants`, formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data'
            })
        .then((res) => {
          this.$router.push({
            name: "Admin",
          });
        return res
        })
        .catch();
    },
  },
};
</script>

<style>
</style>