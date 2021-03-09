<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
      <h1>Foods</h1>
      <tr>
        <th class="text-left">
          Name
        </th>
        <th class="text-left">
          Calories
        </th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <!--          v-for="item in desserts"-->
        <!--          :key="item.name"-->
        <td></td>
        <td></td>
      </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
import axios from "axios";

export default {
  name: "Foods",
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