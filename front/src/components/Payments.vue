<template>
  <div class="container rounded bg-white">
    <div class="row d-flex justify-content-center pb-5">
      <div class="col-sm-5 col-md-5 ml-1">
        <div class="py-4 d-flex flex-row">
          <h5><span class="fa fa-check-square-o"></span><b>2 Checkout</b> | </h5><span class="pl-2">Pay</span>
        </div>
        <h4 class="green">$85.00</h4>
        <h4>Diabetes Pump & Supplies</h4>
        <div class="d-flex pt-2">
          <div>
            <p><b>Insurance Responsibility.</b><span class="green">$71.76</span></p>
          </div>
        </div>
        <p>Insurance claims and all necessary dependencies will be submitted to your insurer for the coverred portion of this order</p>
        <div class="rounded bg-light d-flex">
          <div class="p-2">Aetna-Open Access</div>
          <div class="ml-auto p-2">OAP</div>
        </div>
        <hr>
        <div class="pt-2">
          <div class="d-flex">
            <div>
              <p><b>Patient Balance.</b><span class="green">$13.24</span></p>
            </div>
          </div>
          <p> This is an estimate for the portion of your order (not covered by insurance) due today . once insurance finalizes their review refunds and/or balances will reconcile automatically. </p>
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
                <form class="form" role="form" autocomplete="off">
                  <div class="form-group">
                    <label for="cc_name">Card Holder's Name</label>
                    <input type="text" class="form-control" id="cc_name" pattern="\w+ \w+.*" title="First and last name" required="required">
                  </div>
                  <div class="form-group">
                    <label>Card Number</label>
                    <input type="text" class="form-control" autocomplete="off" maxlength="20" pattern="\d{16}" title="Credit card number" required="">
                  </div>
                  <div class="form-group row">
                    <label class="col-md-12">Card Exp. Date</label>
                    <div class="col-md-4">
                      <select class="form-control" name="cc_exp_mo" size="0">
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
                      <select class="form-control" name="cc_exp_yr" size="0">
                        <option>2018</option>
                        <option>2019</option>
                        <option>2020</option>
                        <option>2021</option>
                        <option>2022</option>
                      </select>
                    </div>
                    <div class="col-md-4">
                      <input type="text" class="form-control" autocomplete="off" maxlength="3" pattern="\d{3}" title="Three digits at back of your card" required="" placeholder="CVC">
                    </div>
                  </div>
                  <div class="row">
                    <label class="col-md-12">Amount</label>
                  </div>
                  <div class="form-group row">
                    <div class="col-md-12">
                      <div><span class="input-group-text">120.22</span></div>
                    </div>
                  </div>
                  <hr>
                  <div class="form-group row">
                    <div class="col-md-6">
                      <button type="reset" class="btn btn-default btn-lg btn-block">Cancel</button>
                    </div>
                    <div class="col-md-6">
                      <button type="submit" class="btn btn-success btn-lg btn-block">Submit</button>
                    </div>
                  </div>
                </form>

          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<!--<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>-->





<script>
import axios from "axios";

export default {
  name: "Payments",

  data() {
    return {
      //   axios
      //       .post({
      //     url: '/company/premium/pay',
      //     type: 'POST',
      //     headers: {
      //       'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
      //     },
      //     data: {
      //       first_name: document.getElementById('fname').value,
      //       last_name: document.getElementById('lname').value,
      //       address: document.getElementById('address').value,
      //       city: document.getElementById('city').value,
      //       state: document.getElementById('state2').value,
      //       country: document.getElementById('billingcountry').value,
      //       email: document.getElementById('email').value,
      //       zip_code: document.getElementById('zipcode').value,
      //       ccnumber: document.getElementById('tiCNumber').value,
      //       cvv: document.getElementById('tiCVV').value,
      //       expire_month: document.getElementById('cbExpMounth').value,
      //       expire_year: document.getElementById('cbExpYear').value,
      //       days: {{ $days }},
      //   product: 'PRODUCT' + {{ $productId }}
      // },
      //   success: function (e) {
      //     window.location = '/company';
      //   },
      //   error: function (er) {
      //     console.log(er);
      //   }
      // });
      // })
    }
  },

  methods:{
    makePayment(){
      axios.post('/standup/'+ this.standup_id +'', {
        first_name: document.getElementById('fname').value,
        last_name: document.getElementById('lname').value,
        address: document.getElementById('address').value,
        city: document.getElementById('city').value,
        state: document.getElementById('state2').value,
        country: document.getElementById('billingcountry').value,
        email: document.getElementById('email').value,
        zip_code: document.getElementById('zipcode').value,
        ccnumber: document.getElementById('tiCNumber').value,
        cvv: document.getElementById('tiCVV').value,
        expire_month: document.getElementById('cbExpMounth').value,
        expire_year: document.getElementById('cbExpYear').value,
        product: 'PRODUCT' + '1',
          })
          .then(response => console.log(response))
          .catch(e => {
            console.log(e);
          })
    }

  }

}
</script>

<style scoped>
body {
  background-color: #eeeeee
}

.green {
  color: rgb(15, 207, 143);
  font-weight: 680
}

@media(max-width:567px) {
  .mobile {
    padding-top: 40px
  }
}
</style>