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
						Log in
					</span>

          <div class="wrap-input100 validate-input" data-validate = "Enter username">
            <input
                id="email"
                type="email"
                class="input100"
                name="email"
                value
                required
                autofocus
                v-model="email"
            />
            <span class="focus-input100" data-placeholder=""></span>
          </div>

          <div class="wrap-input100 validate-input" data-validate="Enter password">
            <input
                id="password"
                type="password"
                class="input100"
                name="password"
                required
                v-model="password"
            />
            <span class="focus-input100" data-placeholder=""></span>
          </div>

          <div class="contact100-form-checkbox">
            <input class="input-checkbox100" id="ckb1" type="checkbox" name="remember-me">
            <label class="label-checkbox100" for="ckb1">
              Remember me
            </label>
          </div>

          <div class="container-login100-form-btn">
            <button class="login100-form-btn" type="submit">
              Login
            </button>
          </div>

          <div class="text-center p-t-90">
            <a class="txt1" href="register">
              Don't have an account!
            </a>
          </div>
           <!-- <div class="text-center p-t-90">
            <a class="txt1" href="register">
              Don't have an account!
            </a>
          </div> -->
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
        email: "",
        password: "",
      error: ''
    };
  },
  methods: {
    submit() {
      let user={
          email:this.email,
          password:this.password
      }
      axios.post('http://localhost:4000/login',user)
      .then(res =>{
            console.log(res);
            localStorage.setItem('token',res.data.token);
            this.$router.push('/admin');
      },err=>{
        this.error= err.response.data.error
      })
    }
  }
};
</script>