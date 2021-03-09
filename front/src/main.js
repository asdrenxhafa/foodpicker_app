import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from "firebase";
import store from "./store";
import vuetify from './plugins/vuetify';
import axios from "axios";

Vue.config.productionTip = false

const configOptions = {
  apiKey: "AIzaSyD2tPUMYwDG64zcOz9fGzClzzhJ-kXC314",
  authDomain: "localhost",
  databaseURL: "",
  projectId: "foodpickerapp-b55de",
  storageBucket: "",
  messagingSenderId: "",
  appId: "1:693512628808:web:da127b7a70351b7557067d"
};

firebase.initializeApp(configOptions)


firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
})


new Vue({
  router,
  store,
  firebase,
  vuetify,
  axios,
  render: h => h(App)
}).$mount('#app')
