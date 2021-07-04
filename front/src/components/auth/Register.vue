<template>
  <div class="limiter">
    <div class="container-login100" style="background-image: url('images/bg-01.jpg');">
      <div class="wrap-login100">
        <div v-if="error" class="alert alert-danger">{{error}}</div>
        <form class="login100-form validate-form" @submit.prevent="submit">
					<span class="login100-form-logo">
						<i class="zmdi zmdi-landscape"></i>
					</span>

          <span class="login100-form-title p-b-34 p-t-27">
						Register
					</span>

           <div class="wrap-input100 validate-input" data-validate = "Enter username">
           <h3>Username</h3>
            <input
                id="username"
                type="text"
                class="input100"
                name="username"
                value
                required
                autofocus
                v-model="form.username"
            />
            <span class="focus-input100" data-placeholder=""></span>
          </div>

          <div class="wrap-input100 validate-input" data-validate = "Enter username">
          <h3>Email Address</h3>
            <input
                id="email"
                type="email"
                class="input100"
                name="email"
                value
                required
                autofocus
                v-model="form.email"
            />
            <span class="focus-input100" data-placeholder=""></span>
          </div>

          <div class="wrap-input100 validate-input" data-validate="Enter password">
          <h3>Password</h3>
            <input
                id="password"
                type="password"
                class="input100"
                name="password"
                required
                v-model="form.password"
            />
            <span class="focus-input100" data-placeholder=""></span>
          </div>

         

          <div class="container-login100-form-btn">
            <button class="login100-form-btn" type="submit">
              Register
            </button>
          </div>

          <div class="text-center p-t-90">
            <a class="txt1" href="login">
              Already have an account?
            </a>
          </div>
      
        </form>
      </div>
    </div>
  </div>
</template>


<script>
import firebase from "firebase";

export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: ""
      },
      error: null
    };
  },
  methods: {
    submit() {
      firebase
          .auth()
          .createUserWithEmailAndPassword(this.form.email, this.form.password)
          .then(data => {
            data.user
                .updateProfile({
                  displayName: this.form.name
                })
                .then(() => {
                  window.location = '/';
                });
          })
          .catch(err => {
            this.error = err.message;
          });
    }
  }
}
</script>

<style scoped>

</style>