<template>
  <v-form ref="form" v-model="valid" lazy-validation @submit="onSubmit">
    <v-text-field
      v-model="restaurant.name"
      :counter="10"
      :rules="nameRules"
      label="Name"
      required
    ></v-text-field>
    <v-text-field
      v-model="restaurant.description"
      label="Description"
      required
    ></v-text-field>

    <!-- <v-file-input
    v-model="restaurnt_image"
      show-size
      counter
      multiple
      label="Foto"
      
    ></v-file-input> -->
  

    <v-text-field
      v-model="restaurant.location[0].city"
      label="Qyteti"
      required
    ></v-text-field>

    <v-text-field
      v-model.trim="restaurant.location[0].street"
      label="Rruga"
      required
    ></v-text-field>

    <v-text-field
      v-model="restaurant.telephone"
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
      restaurnt_image :[
        {
            public_id: "restaurants/dwameeok2nr3okr33",
            url: "https://blog.logomyway.com/wp-content/uploads/2017/01/mcdonalds-logo-1.jpg"
        }],
      restaurant: {
        name:'',
        description:'',
        images:[
          {
            public_id: "restaurants/dwameeok2nr3okr33",
            url: "https://blog.logomyway.com/wp-content/uploads/2017/01/mcdonalds-logo-1.jpg"
          }
        ],
        location:[{
          city:'',
          street:''
        }],
        telephone:''
      },
      valid: true,
      name: "",
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
      ],
      email: "",
      emailRules: [(v) => !!v || "Description is required"],
      telRules: [
        (v) => !!v || "Telephone is required",
        (v) =>
          (v && v.length <= 9 && v.length >= 9) ||
          "Telephone must be 9 numbers",
      ],
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      axios.post(`http://localhost:4000/restaurants`, this.restaurant)
        .then((res) => {
          this.$router.push({
            name: "Admin",
          });
       console.log(res);
        })
        .catch();
    },
    reset() {
      this.$refs.form.reset();
    },
  },
};
</script>

<style>
</style>