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

    <v-file-input v-model="restaurnt_image" id="restaurant-image-form" show-size counter multiple label="Foto" required></v-file-input>

    <v-text-field v-model.trim="restaurant.location[0].city" label="Qyteti" required></v-text-field>

    <v-text-field v-model.trim="restaurant.location[0].street" label="Rruga" required></v-text-field>

    <v-text-field
      v-model.trim="restaurant.telephone"
      :counter="9"
      :rules="telRules"
      label="Phone Number"
      required
    ></v-text-field>
    <v-btn :disabled="!valid" color="success" class="mr-4" @click="onSubmit" >
      Shto
    </v-btn>

    <v-btn color="error" class="mr-4" @click="reset"> Reseto Formen </v-btn>
  </v-form>
</template>

<script>
import axios from 'axios';
export default {
  name: "EditRestaurant",
  data() {
    return {
      restaurant: {},
      restaurnt_image : null,
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
      select: null,
    };
  },
  created() {
    axios.get(`http://localhost:4000/restaurants/` + this.$route.params.id)
      .then((res) => {
        // console.log(res);
        this.restaurant = res.data;
      })
      .catch();
  },

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    onSubmit (evt) {

      var formData = new FormData();
      formData.append("image", this.restaurnt_image[0]);
      formData.append("restaurant_name", this.restaurant.name);
      formData.append("restaurant_description", this.restaurant.description);
      formData.append("restaurant_images_public_id", this.restaurant.images[0].public_id);
      formData.append("restaurant_images_url", this.restaurant.images[0].url);
      formData.append("restaurant_location_city", this.restaurant.location[0].city);
      formData.append("restaurant_location_street", this.restaurant.location[0].street);
      formData.append("restaurant_telephone", this.restaurant.telephone);

      evt.preventDefault()
      axios.put(`http://localhost:4000/restaurants/` + this.$route.params.id, formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          })
      .then(response => {
        // console.log(response)

        this.$router.push({
          name: 'Admin',
        })
        return response;
      })
      .catch();
  },
  }
};
</script>

<style>
</style>