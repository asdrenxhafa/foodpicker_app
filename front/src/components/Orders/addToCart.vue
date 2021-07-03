<template>
  <div class="add-to-cart lfloat">
    <span class="sub-item glyphicon glyphicon-minus-sign lfoat" @click="removeFromCart(food)"></span>
    <span class="quantity lfoat">{{ counter }}</span>
    <span class="add-item glyphicon glyphicon-plus-sign rfloat" @click="addToCart(food)"></span>
  </div>
</template>

<script>
export default {
  props: ['food'],
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    removeFromCart:function (food){
        if(this.counter!=0){
            this.counter--;
            this.$emit('removeFromCart',food);
        }

    },
    addToCart:function(food){
        this.counter++;
        this.$emit('addToCart',food);
    }
  },
}
</script>

<style scoped>

.add-to-cart {
  width: 15%;
  padding-top: 15px;
  margin-left: 20%;
}

.add-to-cart > .add-item,
.add-to-cart > .sub-item {
  width: 20px;
  height: 20px;
  cursor: pointer;
}

.add-to-cart > .quantity {
  margin: 0 10px;
}

</style>

