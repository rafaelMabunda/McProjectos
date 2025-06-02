<template>
    <div>
        <v-container>
            <v-sheet flat class="cardServices bg-grey-lighten-4">
                <div class="serviceTitle">
                    <div class="d-flex justify-center">
                        <h4>Our Blog</h4> 
                    </div>
                    <div class="d-flex justify-center">
                        <h1>Latest Updates</h1>
                    </div>
                </div>
            </v-sheet>

            <div>
                <v-row>
                    <v-col
                    v-for="(info, i) in blogInfos"
                    :key="i"
                    cols="12"
                    md="4"
                    >
                        <v-card rounded="0" flat class="parentCard">
                            <div>
                                <v-img cover height="300" :src="info.img"></v-img>
                            </div>
                            <div class="px-8 mt-5">
                                <h2>{{ info.text }}</h2>
                            </div>

                            <div class="floatingDiv d-flex align-center justify-center">
                                <v-btn 
                                color="white" 
                                variant="text" 
                                class="pa-0 mr-1" 
                                size="x-small" 
                                prepend-icon="mdi-calendar-month-outline"
                                >SEPT.06,2025</v-btn>
                                <v-btn 
                                color="white" 
                                variant="text" 
                                class="pa-0 mr-1" 
                                size="x-small" 
                                prepend-icon="mdi-account"
                                >ADMIN</v-btn>
                                <v-btn 
                                color="white" 
                                variant="text" 
                                class="pa-0" 
                                size="x-small" 
                                prepend-icon="mdi-chat"
                                >3</v-btn>
                            </div>

                            <v-card-actions class="px-8 mb-8 mt-3">
                                <v-hover>
                                    <template v-slot:default="{isHovering, props}">
                                    <v-btn 
                                    v-bind="props"
                                    :variant="isHovering ? 'outlined': 'flat'"
                                    color="#040e26" 
                                    >Read more</v-btn>
                                    </template>
                                </v-hover>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </div>
        </v-container>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const blogInfos = ref(
    [
        {
            img: require('../assets/Screenshot (850).png'),
            text: 'Best for any industrial & business solution'
        },
        {
            img: require('../assets/Screenshot (851).png'),
            text: 'Best for any industrial & business solution'
        },
        {
            img: require('../assets/Screenshot (852).png'),
            text: 'Best for any industrial & business solution'
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
.parentCard {
    position: relative;
}

.floatingDiv {
    left: 30px;
    top: 267px;
    position: absolute;
    width: 200px;
    height: 33px;
    background-color: #fc5e28;
}
</style>