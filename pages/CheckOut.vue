<template>
  <section id="checkout" style="padding:0 !important;">
    <v-container fluid class="pa-0">
      <v-row>
        <v-col cols="7" class="col-left">
          <v-card elevation="0" class="w-100 pa-0" style="background:transparent;padding:0 !important;">
            <v-card-title class="text-left font-weight-bold">Mart Project</v-card-title>
            <v-breadcrumbs :items="['cart', 'Information']">
              <template v-slot:divider><v-icon color="var(--gray5)">mdi-chevron-right</v-icon></template>
            </v-breadcrumbs>
            <v-card-actions class="d-flex flex-row justify-space-between align-center">
              <v-btn class="w-50 rounded-md font-weight-bold border-none" height="45" variant="outlined" density="compact" style="background-color:var(--shin-blue3);color:var(--white2);font-size:1rem;">shop
                <span style="padding:0.3rem 0.4rem;border-radius:0.4rem;color:var(--shin-blue3);background-color:var(--white2);">pay</span>
              </v-btn>
              <v-btn class="w-50 rounded-md border-none" height="45" variant="outlined" density="compact" style="background-color:var(--black2);color:var(--white2);font-size:1rem;"><v-icon color="red">mdi-google</v-icon>pay</v-btn>
            </v-card-actions>
          </v-card>
          <div class="d-flex-r-st-c my-4 pl-2" style="gap:1rem;"> <!-- line -->
            <v-divider></v-divider>
            <span style="color:var(--gray5);text-transform:uppercase;">or</span>
            <v-divider></v-divider>
          </div>
          <v-card elevation="0">
            <div class="contact-block block d-block w-100 pa-0"> <!-- CONTACT BLOCK -->
              <div class="heading d-flex-r-bt-c w-100 mb-2"> <!-- title parent -->
                <h4>contact</h4> 
                <div class="d-flex-r-st-c" style="gap:0.2rem;font-size:0.9rem;">
                  <span>have an account?</span>
                  <router-link :to="{ name: 'loginpage' }">login</router-link>
                </div>
              </div>
              <div class="input-parent d-flex-r-bt-c rounded-lg w-100"> <!-- input-parent -->
                <div class="d-flex-c-st-st w-75 position-relative">
                  <input type="text" required>
                  <label>Email or mobile phone number</label>
                </div>
                <v-icon class="phone-icon">mdi-cellphone</v-icon>
              </div>
              <div class="d-flex-r-st-c my-3" style="gap:0.4rem;padding:0;"> <!-- email me -->
                <input type="checkbox" id="email-me">
                <label for="email-me" style="font-size:0.9rem;text-transform:none;">Email me with news and offers</label>
              </div>
            </div>
            <div class="delivery-block block d-block text-left w-100 py-3"> <!-- DELIVERY BLOCK -->
              <h4 style="margin-bottom:8px;">delivery method</h4>
              <div class="check-parent d-block w-100">
                <div class="check d-flex-r-st-c w-100" :class="{ 'selectedcheck': selectedDelivery === 'ship' }" @click="selectDelivery('ship')">
                  <input type="radio" v-model="selectedDelivery" value="ship">
                  <v-icon>mdi-truck-outline</v-icon>
                  <p class="margin-left:1.5rem;">ship</p>
                </div>
                <div class="check d-flex-r-st-c w-100" :class="{ 'selectedcheck': selectedDelivery === 'pickup' }" @click="selectDelivery('pickup')">
                  <input type="radio" v-model="selectedDelivery" value="pickup">
                  <v-icon>mdi-gift-outline</v-icon>
                  <p class="margin-left:1.5rem;">pick up</p>
                </div>
              </div>
            </div>
            <div class="shipping-block block d-block text-left w-100 py-3"> <!-- SHIPPING BLOCK -->
              <h4 style="margin-bottom:8px;">shipping address</h4>
              <form class="d-flex-c-st-end" style="gap:0.7rem;">
                <div class="input-parent d-flex-c-st-st position-relative rounded-lg w-100"> <!-- input-parent -->
                  <input type="text" maxlength="35" required>
                  <label>fullname</label>
                </div>
                <div class="input-parent d-flex-c-st-st position-relative rounded-lg w-100"> <!-- input-parent -->
                  <input type="text" required>
                  <label>address</label>
                </div>
                <div class="d-flex-r-bt-c w-100" style="gap:0.6rem;">
                   <div class="input-parent d-flex-c-st-st position-relative rounded-lg w-100"> <!-- input-parent -->
                     <input type="text" maxlength="15" required>
                     <label>government</label>
                   </div>
                   <div class="input-parent d-flex-c-st-st position-relative rounded-lg w-100"> <!-- input-parent -->
                     <input type="text" maxlength="15" required>
                     <label>city</label>
                   </div>
                   <div class="input-parent d-flex-c-st-st position-relative rounded-lg w-100"> <!-- input-parent -->
                     <input type="text" maxlength="9" required>
                     <label>postal code</label>
                   </div>
                </div>
                <v-btn class="btn2 mt-3" @click="dialog = true">continue shipping</v-btn>
              </form>
            </div>
          </v-card>
        </v-col> <!-- END COL -->
        <v-col cols="5" class="col-right">
          <div class="card d-flex-r-bt-c py-2 px-0 my-4" v-for="item in cartItems" :key="item.id">
            <div class="parent px-0 py-0 d-flex-r-st-c" style="gap:1rem;">
              <v-badge :content="item.quantity"><img :src="item.thumbnail" width="50" height="50" style="border-radius:0.3rem;object-fit:cover;" alt=""></v-badge>
              <div class="d-flex-c-st-st">
                <v-title style="font-size:1rem;font-weight:bold;">{{ item.title }}</v-title>
                <p style="color:var(--gray5);font-size:0.8rem;">xs / black</p>
              </div>
            </div>
            <p style="color:var(--gray3);margin:0 !important;">${{ (Math.ceil(item.price - item.price * (item.discountPercentage / 100)) * item.quantity) }}</p>
          </div>
          <div class="discount-block d-flex-r-bt-c pa-0 my-5"> <!-- Discount -->
            <input type="text" placeholder="Discount code">
            <v-btn elevation="0">apply</v-btn>
          </div>
          <v-card-text class="d-flex flex-row justify-space-between pa-0" style="font-size:0.9rem;"> <!-- subtotal -->
            <span>subtotal</span>
            <span class="font-weight-bold">${{ calculateTotal }}</span>
          </v-card-text>
          <v-card-text class="d-flex flex-row justify-space-between pa-0 my-2" style="font-size:0.9rem;"> <!-- shipping -->
            <span>shipping</span>
            <span>$20</span>
          </v-card-text>
          <v-card-text class="d-flex flex-row justify-space-between pa-0 mb-15 font-weight-bold" style="font-size:1rem;"> <!-- Total -->
            <span>total</span>
            <span>${{ calculateTotal }}</span>
          </v-card-text>
        </v-col> <!-- END COL -->
      </v-row>
    </v-container>
    <OrderSuccess :popup="dialog" v-if="dialog" @close_popup="dialog = false"/>
  </section>
</template>

<script>
import { cartStore } from "@/stores/cart";
import { mapState } from "pinia";
import OrderSuccess from "@/components/order_success/OrderSuccess";

export default {
  components: {
    OrderSuccess,
  },
  data: () => ({
    selectedDelivery:null,
    dialog:false,
  }),
  methods: {
    selectDelivery(delivery) {
      this.selectedDelivery = this.selectedDelivery === delivery ? null : delivery;
    }
  },
  computed: {
    ...mapState(cartStore, ["cartItems"]),
    calculateSubtotal() {
      return this.cartItems.reduce((total, item) => {
        return total + (Math.ceil(item.price - item.price * (item.discountPercentage / 100)) * item.quantity);
      }, 0);
    },
    calculateTotal() {
      return this.calculateSubtotal;
    }
  },
};
</script>

<style lang="scss" scoped>
.col-left {padding:1rem 3rem 1rem 6% !important;
           background:var(--white2);

  .block {margin-bottom:1rem !important;}

  .contact-block {

    .input-parent {height:3rem;
                   padding:0 0 0 0.5rem;
                   border:1px solid var(--gray8);

      label {color:var(--gray5);
             font-size:1rem;
             text-transform:none;
             position:absolute;
             top:50%;
             transform:translateY(-50%);
             left:0;
             transition:all 0.3s linear;}

      input[type="text"] {background-color:transparent;
                          color:var(--gray2);
                          font-size:1rem;
                          padding:0 0 0.1rem 0;
                          width:80% !important;
                          margin:0;
                          margin-top:1.1rem;
                          border:none;}

      input[type="text"]:focus {background:transparent !important;
                                background-color:transparent !important;
                                box-shadow:none !important;
                                outline:none;}

      input[type="text"]:focus ~ label, 
      input[type="text"]:valid ~ label {top:calc(50% - 0.8rem);}

      .phone-icon {padding:0.7rem 1.7rem !important;
                   height:100% !important;
                   background-color:var(--primary9);
                   color:var(--white2);
                   border-top-right-radius:8px;
                   border-bottom-right-radius:8px;}
    }
  }

  .delivery-block {
    .check-parent {
      .check {gap:0.8rem;
              padding:0.7rem 0.9rem;
              border:1px solid var(--gray8);
        .v-icon {font-size:1rem;}
      }

        .check:first-child {border-top-left-radius:0.3rem;
                            border-top-right-radius:0.3rem;}

        .check:last-child {border-bottom-left-radius:0.3rem;
                           border-bottom-right-radius:0.3rem;
                           border-top:none;}
    }
    .selectedcheck {background-color:var(--blue1);}
  }

  .shipping-block {

    .input-parent {height:3rem;
                   padding:0 0 0 0.5rem;
                   border:1px solid var(--gray8);

      label {color:var(--gray5);
             font-size:1rem;
             text-transform:none;
             position:absolute;
             top:50%;
             transform:translateY(-50%);
             left:0.5rem;
             transition:all 0.3s linear;}

      input[type="text"] {background-color:transparent;
                          color:var(--gray2);
                          font-size:1rem;
                          padding:0 0 0.1rem 0;
                          width:100% !important;
                          margin:0;
                          margin-top:1.1rem;
                          border:none;}

      input[type="text"]:focus {background:transparent !important;
                                background-color:transparent !important;
                                box-shadow:none !important;
                                outline:none;}

      input[type="text"]:focus ~ label, 
      input[type="text"]:valid ~ label {top:calc(50% - 0.8rem);}

      .phone-icon {padding:0.7rem 1.7rem !important;
                   height:100% !important;
                   background-color:var(--primary9);
                   color:var(--white2);
                   border-top-right-radius:8px;
                   border-bottom-right-radius:8px;}
    }
  }
}

.col-right {padding:1rem 6% 1rem 3rem !important;
            background:var(--gray10);
            border-left:1.5px solid var(--gray8);

  .discount-block {
  
    input[type="text"] {width:80%;
                        background-color:var(--white);
                        border:1px solid var(--gray8);
                        padding:0.7rem 0.8rem;
                        border-radius:0.5rem;}
  
    .v-btn {padding:0.7rem;
            height:fit-content;
            color:var(--gray2);
            font-size:1rem;
            font-weight:bold;
            background-color:var(--gray8);}
  }
}
</style>