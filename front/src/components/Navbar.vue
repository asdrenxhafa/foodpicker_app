<template>
  <!-- navigation section -->
  <section class="navbar navbar-default navbar-fixed-top" role="navigation">
    <div class="container">
      <div class="navbar-header">
        <button class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
          <span class="icon icon-bar"></span>
          <span class="icon icon-bar"></span>
          <span class="icon icon-bar"></span>
        </button>
        <a href="#" class="navbar-brand">FOODPICKER</a>
      </div>
      <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav navbar-right">
          <li><a href="#home" class="smoothScroll">HOME</a></li>
          <li><a href="#restaurant" class="smoothScroll">RESTAURANTS</a></li>
          <li><a href="#contact" class="smoothScroll mr-4">CONTACT</a></li>
          <li>
            <template v-if="user.loggedIn">
              <div class="nav-item">{{user.data.displayName}}</div>
              <ul>
                  <li class="nav-item">
                    <a class="nav-link" @click.prevent="signOut">Sign out</a>
                  </li>
              </ul>
            </template>
            <template v-else>
                <ul>
                  <li class="nav-item">
                    <router-link to="/login" class="nav-link">Login</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/register" class="nav-link">Register</router-link>
                  </li>
                </ul>
            </template>
<!--            <router-link to="/login">LOG IN/ REGISTER</router-link>-->
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import firebase from "firebase";

export default {
name: "Navbar",
  computed: {
    ...mapGetters({
// map `this.user` to `this.$store.getters.user`
      user: "user"
    })
  },
  methods: {
    signOut() {
      firebase
          .auth()
          .signOut()
          .then(() => {
            this.$router.replace({name: "Main"});
          });
    }
  }
}
</script>

<style scoped>

</style>