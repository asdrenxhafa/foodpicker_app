<template>
  <!-- contact section -->
  <section id="contact" class="parallax-section">
    <div class="container">
      <div class="row">
        <div class="col-md-offset-1 col-md-10 col-sm-12 text-center">
          <h1 class="heading">Contact Us</h1>
          <hr>
        </div>
        <div class="col-md-offset-1 col-md-10 col-sm-12 wow fadeIn" data-wow-delay="0.9s">
          <form @submit.prevent="sendEmail">
            <div class="col-md-6 col-sm-6">
              <input name="name" type="text" class="form-control" id="name" placeholder="Name" v-model="name">
            </div>
            <div class="col-md-6 col-sm-6">
              <input name="email" type="email" class="form-control" id="email" placeholder="Email" v-model="email">
            </div>
            <div class="col-md-12 col-sm-12">
              <textarea name="message" rows="8" class="form-control" id="message" placeholder="Message" v-model="message"></textarea>
            </div>
            <div class="col-md-offset-3 col-md-6 col-sm-offset-3 col-sm-6">
              <input name="submit" type="submit" class="form-control" value="Send">
            </div>
          </form>
        </div>
        <div class="col-md-2 col-sm-1"></div>
      </div>
    </div>
  </section>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
name: "Contact",
data(){
  return {
    name:'',
    email:'',
    message:''
  }
},
methods:{
  sendEmail(e){
    try{
      emailjs.sendForm('service_zo0r2ac','template_9b0lt2p',e.target,'user_sv4mq4lgK8UUlZvHgDCOs',{
        name:this.name,
        email:this.email,
        message:this.message
      })
    } catch(error){
      console.log(error);
    }
    this.name=''
    this.email=''
    this.message=''
  },
}
}
</script>

<style scoped>

</style>