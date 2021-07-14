<template>
  <section>
            
<nav class = "navbar">
      <div>
        <a style="color:black; font-size:20px; text-align:justify;">FOODPICKER</a>
      </div>
      <div>
     
          <li><a href="#home" act class="nav-link"><p>HOME</p></a></li>
          <li><a href="/Order"  class="nav-link"><p><br>ORDER</p></a></li>
          <li>
            <template v-if="user.loggedIn">
              <div class="nav-item">{{user.data.displayName}}</div>
              
                  <li class="nav-item">
                    <a class="nav-link" @click.prevent="signOut"><p>Sign out</p></a>
                  </li>
             
            </template>
            <template v-else>
                 <div>
                  
                  <li class="nav-item">
                    <router-link to="/login" class="nav-link"><p>LOGIN</p></router-link>
                  </li>
                  <li class="nav-item" >
                    <router-link to="/register" class="nav-link"><p>REGISTER</p></router-link>
                  </li>
               
                 </div>
            </template>

          </li>
       
      </div>
      </nav>
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