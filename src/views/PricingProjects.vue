<template>
    <div>
        <v-container>
            <v-sheet flat class="cardServices">
                <div class="serviceTitle">
                    <div class="d-flex justify-center">
                        <h4>Pricing</h4> 
                    </div>
                    <div class="d-flex justify-center">
                        <h1>Plans We Offer</h1>
                    </div>
                </div>
            </v-sheet>

            <div
            >
            <v-row>
                <v-col
                cols="12"
                md="4"
                v-for="(plan, i) in plans"
                :key="i"
                >
                <v-card border="red thin" width="370" elevation="0">
                    <v-sheet class="pricingWrapper d-flex align-center flex-column pa-7">
                        <div class="imgDesign d-flex mt-4">
                            <v-img src="../assets/skyline.png"></v-img>
                        </div>
                        <div class="mt-5 text-h5">
                            <span>{{ plan.title }}</span>
                        </div>
                        <div class="textManipulation mt-5">
                            <p>{{ plan.text }}</p>
                        </div>
                        <div class="textManipulation my-6 d-flex align-center">
                            <span class="text-h4">${{ plan.price }}</span>
                            <span class="text-grey ml-3">Per month</span>
                        </div>
                        <v-card-actions>
                            <v-hover>
                                <template v-slot:default="{isHovering, props}">
                                <v-btn 
                                rounded="0"
                                v-bind="props"
                                :variant="isHovering ? 'outlined': 'flat'"
                                color="#fc5e28" 
                                class="mt-4" 
                                flat
                                >Get started</v-btn>
                                </template>
                            </v-hover>
                        </v-card-actions>
                        <v-btn 
                        variant="text" 
                        color="#040e26" 
                        class="text-none mb-4"
                        >{{ plan.request }}</v-btn>
                    </v-sheet>
                </v-card>
                </v-col>
            </v-row>
            </div>
        </v-container>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const plans = ref([
    {
        title: 'Basic Plan',
        text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
        price: '29',
        request: 'Open Source'
    },
    {
        title: 'Standard Plan',
        text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
        price: '29',
        request: 'Free 30 Day Trial'
    },
    {
        title: 'Premium Plan',
        text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
        price: '29',
        request: 'Request a Quote'
    },
])
</script>

<style scoped>
.cardServices {
    margin-top: 110px;
    margin-bottom: 100px;
}


.serviceTitle h4{
    color: #fc5e28;
}

.imgDesign{
    height: 100px;
    width: 80px;
}
.textManipulation {
    display: flex;
    text-align: center;
    line-height: 1.9;
}

.v-btn::after {
background-color: transparent;
}
</style>