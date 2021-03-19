<template>
  <v-app>
    <v-app-bar app color="indigo" dark>
      <div class="header-parent">
        <div>
          <v-btn text>Restaurants</v-btn>
        </div>
        <div>
          <v-btn right color="indigo" dark v-on:click="createres('Admin')"
            >Go back</v-btn>
        </div>
      </div>
    </v-app-bar>
    <div class="parent-form">
      <v-form ref="form" v-model="valid" lazy-validation @submit="onSubmit">
        <v-text-field
          v-model="restaurant.name"
          :counter="10"
          :rules="nameRules"
          label="Name"
          class="input-form"
          required
        ></v-text-field>
        <v-text-field
          v-model="restaurant.description"
          label="Description"
          required
        ></v-text-field>

        <v-file-input
          v-model="restaurnt_image"
          show-size
          counter
          multiple
          label="Image"
        >
        </v-file-input>

        <v-text-field
          v-model="restaurant.location[0].city"
          label="City"
          required
        ></v-text-field>

        <v-text-field
          v-model.trim="restaurant.location[0].street"
          label="Street"
          required
        ></v-text-field>

        <v-text-field
          v-model="restaurant.telephone"
          :counter="9"
          :rules="telRules"
          label="Phone Number"
          required
        ></v-text-field>
        <v-btn
          :disabled="!valid"
          color="success"
          class="mr-4"
          @click="onSubmit"
        >
          Add Restaurant
        </v-btn>

        <v-btn color="error" class="mr-4" @click="reset"> Rest Form </v-btn>
      </v-form>
    </div>
  </v-app>
</template>

<script>
import axios from "axios";
export default {
  name: "CreateRestaurant",
  data() {
    return {
      restaurnt_image: null,
      restaurant: {
        name: "",
        description: "",
        images: [
          {
            public_id: "restaurants/dwameeok2nr3okr33",
            url:
              "https://blog.logomyway.com/wp-content/uploads/2017/01/mcdonalds-logo-1.jpg",
          },
        ],
        location: [
          {
            city: "",
            street: "",
          },
        ],
        telephone: "",
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
      this.$refs.form.validate();
      var formData = new FormData();
      formData.append("image", this.restaurnt_image[0]);
      formData.append("restaurant_name", this.restaurant.name);
      formData.append("restaurant_description", this.restaurant.description);
      formData.append(
        "restaurant_images_public_id",
        this.restaurant.images[0].public_id
      );
      formData.append("restaurant_images_url", this.restaurant.images[0].url);
      formData.append(
        "restaurant_location_city",
        this.restaurant.location[0].city
      );
      formData.append(
        "restaurant_location_street",
        this.restaurant.location[0].street
      );
      formData.append("restaurant_telephone", this.restaurant.telephone);

      evt.preventDefault();
      axios
        .post(`http://localhost:4000/restaurants`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then(() => {
          this.$router.push({
            name: "Admin",
          });
        })
        .catch();
    },
    reset() {
      this.$refs.form.reset();
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