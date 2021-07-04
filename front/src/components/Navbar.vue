<template>
  <!-- navigation section -->
  <section class="navbar navbar-default navbar-fixed-top" role="navigation">
    <div class="container">
      <div class="navbar-header">
        <a class="nav navbar-nav navbar-right" style="color:gray;text-align:right; font-size:20px; text-shadow: 1px 1px;">FOODPICKER</a>
      </div>
      <div class="collapse navbar-collapse">
     
          <li><a href="#home" class="smoothScroll mr-4" style="color:gray;text-align:center; text-shadow: 1px 1px; font-size:15px;" ><b>HOME</b></a></li>
          <li><a href="/Order" class="smoothScroll mr-4" style="color:gray;text-align:center;text-shadow: 1px 1px; font-size:15px;"><b>ORDER</b></a></li>
          <li>
            <template v-if="user.loggedIn">
              <div class="nav-item">{{user.data.displayName}}</div>
              
                  <li class="nav-item">
                    <a class="nav-link" @click.prevent="signOut" style="color:gray;text-align:center; text-shadow: 1px 1px"><b>Sign out</b></a>
                  </li>
              
            </template>
            <template v-else>
                 <div class="collapse navbar-collapse">
                  
                  <li class="nav-item">
                    <router-link to="/login" class="nav-link" style="color:gray;text-align:center;text-shadow: 1px 1px; font-size:15px;"><b>LOGIN</b></router-link>
                  </li>
                  <li class="nav-item" >
                    <router-link to="/register" class="nav-link" style="color:gray;text-align:center; text-shadow: 1px 1px;font-size:15px;"><b>REGISTER</b></router-link>
                  </li>
               
                 </div>
            </template>

          </li>
      
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