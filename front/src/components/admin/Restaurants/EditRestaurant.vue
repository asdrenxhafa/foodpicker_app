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

    <v-file-input v-model="restaurant.images[0]" show-size counter multiple label="Foto" required></v-file-input>

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
        console.log(res);
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
      evt.preventDefault()
      axios.put(`http://localhost:4000/restaurants/` + this.$route.params.id, this.restaurant)
      .then(response => {
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