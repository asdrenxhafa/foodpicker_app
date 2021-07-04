<template>
  <div>

    <div v-show="doingPayment === false">
      <Header></Header>
      <div class="container custom-container container-shadow">
        <div class="row">
          <div class="col-md-2">
            <side-menu :foodList="foodList"></side-menu>
          </div>
          <div class="col-md-6 food-list-wrapper">
            <div class="food-list-container">
              <div v-for="food in foodList" :key="food.id">
                <food-list :foods="food" v-on:addToCart="addToCart($event)"
                           v-on:removeFromCart="removeFromCart($event)"></food-list>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <cart :cart="cart" v-on:emptyCart="emptyCart"></cart>
          </div>
        </div>
      </div>
    </div>



    <div class="container rounded bg-white" v-show="doingPayment === true">
      <div class="row d-flex justify-content-center pb-5">
        <div class="col-sm-5 col-md-5 ml-1">
          <div class="py-4 d-flex flex-row">
            <h5><span class="fa fa-check-square-o"></span><b>2 Checkout</b> | </h5><span class="pl-2">Pay</span>
          </div>
          <h4 class="green">${{ total }}</h4>
          <h4>Diabetes Pump & Supplies</h4>
          <div class="d-flex pt-2">
            <div>
              <p><b>Insurance Responsibility.</b><span class="green">${{ total }}</span></p>
            </div>
          </div>
          <p>Insurance claims and all necessary dependencies will be submitted to your insurer for the coverred portion
            of this order</p>
          <div class="rounded bg-light d-flex">
            <div class="p-2">Aetna-Open Access</div>
            <div class="ml-auto p-2">OAP</div>
          </div>
          <hr>
          <div class="d-flex pt-2">
            <form class="form" role="form" autocomplete="off">

              <div class="form-group row">
                <div class="col-md-6">
                  <label for="cc_name">First Name</label>
                  <input v-model="first_name" type="text" class="form-control" id="cc_name" title="First and last name"
                         required="required">
                </div>

                <div class="col-md-6">
                  <label for="cc_name">Last Name</label>
                  <input v-model="last_name" type="text" class="form-control" id="cc_name" title="First and last name"
                         required="required">
                </div>
              </div>
              <div class="form-group">
                <label>Phone Number (please start with +383)</label>
                <input v-model="phone_number" type="text" class="form-control" autocomplete="off" maxlength="20" pattern="\d{16}"
                       title="Phone Number" required="">
              </div>
              <div class="form-group">
                <label class="col-md-12">Location</label>
                  <input v-model="location" type="text" class="form-control" autocomplete="off"
                         title="Three digits at back of your card" required="required">
              </div>

            </form>
          </div>
        </div>
        <div class="col-sm-3 col-md-4 offset-md-1 mobile">
          <div class="py-4 d-flex justify-content-end">
            <h6><a href="#">Cancel and return to website</a></h6>
          </div>
          <div class="bg-light rounded d-flex flex-column">

            <div class="col-md-12 offset-md-12">
              <span class="anchor" id="formPayment"></span>
              <hr class="my-5">

              <h3 class="text-center">Credit Card Payment</h3>
              <hr>
              <form onsubmit="return false" class="form" role="form" autocomplete="off">
                <div class="form-group">
                  <label for="cc_name">Card Holder's Name</label>
                  <input v-model="holder_name" type="text" class="form-control" id="cc_name" pattern="\w+ \w+.*" title="First and last name"
                         required="required">
                </div>
                <div class="form-group">
                  <label>Card Number</label>
                  <input v-model="ccnumber" type="text" class="form-control" autocomplete="off" maxlength="20" pattern="\d{16}"
                         title="Credit card number" required="">
                </div>
                <div class="form-group row">
                  <label class="col-md-12">Card Exp. Date</label>
                  <div class="col-md-4">
                    <select v-model="expire_month" class="form-control" name="cc_exp_mo" size="0">
                      <option value="01">01</option>
                      <option value="02">02</option>
                      <option value="03">03</option>
                      <option value="04">04</option>
                      <option value="05">05</option>
                      <option value="06">06</option>
                      <option value="07">07</option>
                      <option value="08">08</option>
                      <option value="09">09</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                    </select>
                  </div>
                  <div class="col-md-4">
                    <select v-model="expire_year" class="form-control" name="cc_exp_yr" size="0">
                      <option>2018</option>
                      <option>2019</option>
                      <option>2020</option>
                      <option>2021</option>
                      <option>2022</option>
                    </select>
                  </div>
                  <div class="col-md-4">
                    <input v-model="cvv" type="text" class="form-control" autocomplete="off" maxlength="3" pattern="\d{3}"
                           title="Three digits at back of your card" required="" placeholder="CVC">
                  </div>
                </div>
                <div class="row">
                  <label class="col-md-12">Amount</label>
                </div>
                <div class="form-group row">
                  <div class="col-md-12">
                    <div><span class="input-group-text">${{ total }}</span></div>
                  </div>
                </div>
                <hr>
                <div class="form-group row">
                  <div class="col-md-6">
                    <button type="reset" class="btn btn-default btn-lg btn-block" @click="orderingPage()">Cancel</button>
                  </div>
                  <div class="col-md-6">
                    <button class="btn btn-success btn-lg btn-block" @click="makePayment()">Submit</button>
                  </div>
                </div>
              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FoodList from "@/components/Orders/foodList";
import SideMenu from "@/components/Orders/sideMenu";
import Cart from "@/components/Orders/cart";
import axios from "axios";

export default {
  name:"Order",
  components: {Cart, SideMenu, FoodList},
  data() {
    return {
      // csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
      foodData: [],
      cart: [],

      doingPayment: false,

      location      : "",
      first_name    : "",
      last_name     : "",
      phone_number  : "",
      holder_name   : "",
      ccnumber      : "",
      cvv           : "",
      expire_month  : "",
      expire_year   : "",
      total         : 0,
    };
  },
  mounted() {

  },
  methods: {
    addToCart: function (foodToAdd) {
      const locationInCart = this.cart.findIndex(f => {
        return f.details.name === foodToAdd.name;
      });

      if (locationInCart === -1) {
        this.cart.push({
          details: foodToAdd,
          quantity: 1
        });
      } else {
        this.cart[locationInCart].quantity++
      }
    },
    removeFromCart: function (foodToRemove) {
      if (this.cart.length !== 0) {
        const locationInCart = this.cart.findIndex(f => {
          return f.details.name === foodToRemove.name;
        });
        if (this.cart[locationInCart].quantity <= 1) {
          this.cart.splice(locationInCart, 1)
        } else {
          this.cart[locationInCart].quantity--
        }
      }

    },
    emptyCart: function () {
      this.$store.commit('emptyCart');
      this.cart = [];
    },
    makePayment() {

      // axios.get('http://localhost:8000/api/orders')
      //     .then(response => console.log(response))
      //     .catch(e => {
      //       console.log(e);
      //     })

      // axios.post('http://localhost:8000/api/orders',{
      //   title         : "Food Order",
      //   details       : this.orderDetails,
      //   location      : this.location,
      //   telephone     : this.phone_number,
      //   first_name    : this.first_name,
      //   last_name     : this.last_name,
      //   phone_number  : this.phone_number,
      //   holder_name   : this.holder_name,
      //   ccnumber      : this.ccnumber,
      //   cvv           : this.cvv,
      //   expire_month  : this.expire_month,
      //   expire_year   : this.expire_year,
      //   total         : this.total
      // })
      //     .then(response => console.log(response))
      //     .catch(e => {
      //       console.log(e);
      //     })


      var formData = new FormData();
      formData.append('title', "Food Order");
      formData.append('details', this.orderDetails);
      formData.append('location', this.location);
      formData.append('telephone', this.phone_number);
      formData.append('first_name', this.first_name);
      formData.append('last_name', this.last_name);
      formData.append('phone_number', this.phone_number);
      formData.append('holder_name', this.holder_name);
      formData.append('ccnumber', this.ccnumber);
      formData.append('cvv', this.cvv);
      formData.append('expire_month', this.expire_month);
      formData.append('expire_year', this.expire_year);
      formData.append('total', this.total);
      formData.append('_method', 'POST');
      axios.post('http://localhost:8000/api/orders', formData, {})
          .then(response => console.log(response))
          .catch(e => {
            console.log(e);
          })

    },
    orderingPage(){
      this.doingPayment = false;
    },
    paymentPage(){
      this.doingPayment = true;
    }
  },
  computed: {
    foodList: function () {
      var foodByCategory = {};
      this.foodData.forEach(function (food) {

        foodByCategory[food.category] = foodByCategory[food.category] || []
        foodByCategory[food.category].push(food);

      });
      return foodByCategory;
    },
    orderDetails: function () {
      var details = "";
      this.cart.forEach(function (food) {

        details += food.details.name + " quantity:" + food.quantity  + ", ";

      });
      return details;
    }

  },
  created() {
    var self = this;


    self.foodData = [
      {
        id: 1,
        name: "Testi1",
        description: "asd",
        price: 11
      },
      {
        id: 2,
        name: "Testi2",
        description: "asd",
        price: 22
      },
      {
        id: 3,
        name: "Testi3",
        description: "asd",
        price: 33
      },
    ];

  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.food-list-wrapper {
  min-height: calc(100vh - 130px);
  max-height: calc(100vh - 130px);
  border: 1px solid transparent;
  border-color: #e7e7e7;
  border-radius: 4px;
  padding: 0px;
}

.food-list-container {
  max-height: calc(100vh - 150px);
  overflow: auto;
}

body {
  color: #76430f !important;
}

.lfloat {
  float: left;
}

.rfloat {
  float: right;
}

.custom-container {
  min-height: calc(100vh - 100px);
  padding: 15px;
}

.container-shadow {
  box-shadow: 0 1px 5px 3px rgba(0, 0, 0, 0.085) !important;
}

.bg-color,
.bg-color:hover,
.bg-color:active,
.bg-color:link {
  background: #ffcc33 !important;

  border: none;
  color: #76430f !important;
}

.btn-custom {
  color: #76430f;
  background-color: #ffcc33;
  border-color: #D7A612;
  box-shadow: 1px 1px 2px 0px #ccc;

}


.btn-custom:hover {
  background: #ffdd76;

}

body {
  background-color: #eeeeee
}

.green {
  color: rgb(15, 207, 143);
  font-weight: 680
}

@media (max-width: 567px) {
  .mobile {
    padding-top: 40px
  }
}


</style>
