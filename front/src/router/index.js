import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Main from '../components/Main'
import Login from '../components/auth/Login'
import Register from '../components/auth/Register'
// import Admin from '../components/admin/Admin';
import EditRestaurant from '../components/admin/Restaurants/EditRestaurant';
import CreateRestaurant from '../components/admin/Restaurants/CreateRestaurant';
import LoginAdmin from "@/components/admin/auth/LoginAdmin";
import Admin from "@/components/admin/Admin";
import RegisterAdmin from "@/components/admin/auth/RegisterAdmin";
import Payments from "@/components/Payments";
import Order from "@/components/Order";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/Order',
    name: 'Order',
    component: Order
  },
  {
    path: '/Payments',
    name: 'Payments',
    component: Payments
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin
  },
  {
    path: '/admin/editrestaurant',
    name: 'EditRestaurant',
    component: EditRestaurant
  },
  {
    path: '/admin/createrestaurant',
    name: 'CreateRestaurant',
    component: CreateRestaurant
  },
  {
    path: '/AdminLogin',
    name: 'CreateRestaurant',
    component: LoginAdmin
  },
  {
    path: '/AdminRegister',
    name: 'CreateRestaurant',
    component: RegisterAdmin
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
