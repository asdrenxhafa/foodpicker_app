<template>
    <div class="cart">
        <h5 class="cart-heading bg-color">Your Cart 
          <span class="empty-cart pull-right" title="empty cart">
            <span class="glyphicon glyphicon-trash" @click="emptyCart"></span>
          </span>
        </h5>
        <div class="row cart-container">
            <div class="col-md-12">
                <ul class="list-group">
                    <li class="list-group-item" v-for="item in cart" :key="item.id">
                      <span class="col-md-7 food-name">{{item.details.name}}</span>
                      <span class="col-md-2 quantity-wrapper">
                        X <span class="pull-right">{{item.quantity}}</span>
                      </span>  
                      <span class="sub-total col-md-3">
                        <span class="rs-sign">$</span>
                        {{getSubTotal(item.details.price, item.quantity)}}
                      </span>
                    </li>
                </ul>
            </div>
        </div>   
        <div class="row">
            <div class="col-md-12 total-price-wrapper">
                <h3>Total: <span class="total-price pull-right"> <span class="rs-sign">$</span> {{getTotal}}</span></h3>
            </div>
        </div>   
        <div class="row">
            <div class="col-md-10 col-md-offset-1 checkout">
              <button type="button" class=" btn btn-custom btn-lg" @click="checkoutButton()">Checkout</button>
            </div>
        </div>
    </div>
</template>

<script>
// import axios from "axios";

export default {
  props:['cart'],
  data() {
    return {
      total:0
    };
  },
  mounted(){
    this.$root.$on('addToCart', (food) => {

      this.total += food.price;
    })
  },
  methods:{
    getSubTotal: function(price,quantity){
      var subTotal = price*quantity;
      return subTotal;
    },
    emptyCart:function(){
      this.total = 0;
      this.$emit('emptyCart');
    },
    checkoutButton(){
      // axios.post('/standup', {
      //   title     : this.q1,
      //   number    : this.q2,
      //   details   : this.q3,
      //   location  : this.q3,
      //   telephone : this.q3,
      // })
      //     .then(response => console.log(response))
      //
      //     .catch(e => {
      //       console.log(e);
      //     })
      // this.$emit('doPayment');
      // this.$parent.$attrs.doingPayment =true;
      if(this.getTotal != 0){
        this.$parent.doingPayment = true;
        this.$parent.total = this.getTotal;
      }
    }
  },
  computed:{
    getTotal:function(){
      var sum = 0;
      this.cart.forEach(function(food) {
        var subTotal = food.details.price * food.quantity;
        sum +=subTotal;
      });
      return sum;
    }
  }
};
</script>

<style scoped>
.cart {
  min-height: 300px;
  border: 1px solid transparent;
  border-color: #e7e7e7;
  border-radius: 4px;
}
.cart-container{
  min-height: 200px;
}
.cart-heading {
  margin-top: 0;
  padding: 15px 15px;
}

.empty-cart {
  cursor: pointer;
}

.checkout {
  height: 50px;
  position: relative;
  bottom: 13px;
  padding: 0;
}

.checkout > button {
  position: relative;
  width: 100%;
  margin: 0 auto;
  align-self: center !important;
  text-transform: uppercase;
}

.quantity-wrapper {
  color: #ccc;
}
.quantity {
  margin-left: 20px;
  margin-right: 10px;
}
.sub-total {
  text-align: right;
}

.cart ul > li.list-group-item {
  border: none;
  padding: 20px 0;
}

.cart ul > li:last-child {
  border-radius: 0;
  border-bottom: 1px solid #ddd;
  padding-bottom: 30px;
}

.total-price-wrapper {
  margin-top: -20px;
  margin-bottom: 20px;
}

.total-price-wrapper > h3 {
  padding-left: 20px;
  padding-right: 20px;
}
</style>

