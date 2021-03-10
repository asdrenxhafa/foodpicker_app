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
      v-model="restaurant.images[0]"
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
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      axios.post(`http://localhost:4000/restaurants`, this.restaurants)
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