<template>
  <div>
    <Header></Header>
    <div class="container custom-container container-shadow">
      <div class="row">
        <div class="col-md-2">
          <side-menu :foodList="foodList"></side-menu>
        </div>
        <div class="col-md-6 food-list-wrapper">
          <div class="food-list-container">
            <div v-for="food in foodList" :key="food.id">
              <food-list :foods="food" v-on:addToCart="addToCart($event)" v-on:removeFromCart="removeFromCart($event)"></food-list>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <cart :cart="cart" v-on:emptyCart="emptyCart"></cart>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FoodList from "@/components/Orders/foodList";
import SideMenu from "@/components/Orders/sideMenu";
import Cart from "@/components/Orders/cart";
export default {
  components: {Cart, SideMenu, FoodList},
  data() {
    return {
      msg: "Welcome to Your Food Ordering App",
      foodData:[],
      cart:[]
    };
  },
  methods:{
    addToCart: function(foodToAdd){
      const locationInCart = this.cart.findIndex(f => {
        return f.details.name === foodToAdd.name;
      });

      if(locationInCart === -1){
        this.cart.push({
          details: foodToAdd,
          quantity: 1
        });
      } else {
        this.cart[locationInCart].quantity++
      }
    },
    removeFromCart:function(foodToRemove){
      if(this.cart.length !== 0){
        const locationInCart = this.cart.findIndex(f => {
          return f.details.name === foodToRemove.name;
        });
        if(this.cart[locationInCart].quantity <= 1){
          this.cart.splice(locationInCart, 1)
        } else {
          this.cart[locationInCart].quantity--
        }
      }

    },
    emptyCart:function(){
      this.$store.commit('emptyCart');
      this.cart = [];
    }
  },
  computed:{
    foodList:function(){
      var foodByCategory = {};
      this.foodData.forEach(function(food){

        foodByCategory[food.category] = foodByCategory[food.category] || []
        foodByCategory[food.category].push(food);

      });
      return foodByCategory;
    }

  },
  created(){
    var self=this;


    self.foodData = [
      {
          id          : 1,
          name        : "Testi1",
          description : "asd",
          price       : 11
      },
      {
        id          : 2,
        name        : "Testi2",
        description : "asd",
        price       : 22
      },
      {
        id          : 3,
        name        : "Testi3",
        description : "asd",
        price       : 33
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
body{
  color: #76430f !important;
}

.lfloat{
  float: left;
}

.rfloat{
  float: right;
}
.custom-container{
  min-height: calc(100vh - 100px);
  padding: 15px;
}

.container-shadow{
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

.btn-custom{
  color: #76430f;
  background-color: #ffcc33;
  border-color: #D7A612;
  box-shadow: 1px 1px 2px 0px #ccc;

}



.btn-custom:hover{
  background: #ffdd76;

}





</style>
