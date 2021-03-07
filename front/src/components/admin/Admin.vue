<template>
   <v-app>
  <v-app-bar app color="indigo" dark >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>
        <v-navigation-drawer 
        v-model="drawer"
      app
        >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Admin
          </v-list-item-title>
          <v-list-item-subtitle>
            Panel
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
   </v-app>
</template>

<script>
export default {
    data: () => ({
    drawer:null,
        items: [
          { title: 'Dashboard', icon: 'mdi-view-dashboard' },
          { title: 'Restaurants', icon: 'mdi-image' },
          { title: 'Foods', icon: 'mdi-help-box' },
        ],
        right: null,
     
      
    }),


}
</script>

<style>

</style>