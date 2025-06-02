<template>
    <v-container>
        <v-row>
            <v-col
            v-for="item in cardProperties"
            :key="item.title"
            cols="12"
            md="4"
            > 
            <v-hover>
                <template v-slot:default="{isHovering, props}">
                    <div class="serviceWrapper">
                        <v-card 
                        v-bind="props"
                        class="pa-5 parentCard"
                        flat
                        >
                            <div>
                                <div class="imageCard">
                                    <v-img :src="item.img"></v-img>
                                </div>
                                <div class="avatarCard d-flex justify-center">
                                    <v-avatar
                                     class="adjustImage"
                                    :color="isHovering? '#fc5e28' : 'white'" 
                                    :size="85">
                                        <v-img
                                        :src="isHovering ? item.icon1 : item.icon2"
                                        ></v-img>
                                    </v-avatar>
                                </div>
                                <div class="titleCard d-flex justify-center flex-wrap">
                                    <h3>{{ item.title }}</h3>
                                    <p>{{ item.text }}</p>
                                </div>
                            </div>    
                        </v-card>
                        <div class="btnServiceCard">
                            <v-btn 
                            v-bind="props"
                            :color="isHovering ? '#fc5e28': '#040e26'" 
                            :width="260" 
                            :height="50"
                            flat 
                            >Read More</v-btn>
                        </div>
                    </div>
                </template>
                </v-hover>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import { ref } from 'vue'

const cardProperties = ref([
    {
        title: 'Architecture',
        text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia',
        icon1: require('../assets/architect1.png'),
        icon2: require('../assets/architect.png'),
        img: require('../assets/Screenshot (857).png')
    },
    {
        title: 'Renovation',
        text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia',
        icon1: require('../assets/worker11.png'),
        icon2: require('../assets/worker1.png'),
        img: require('../assets/Screenshot (856).png')
    },
    {
        title: 'Construction',
        text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia',
        icon1: require('../assets/hammer(1).png'),
        icon2: require('../assets/hammer.png'),
        img: require('../assets/Screenshot (845).png')
    },
]) 
</script>

<style scoped>
.imageCard{
    height: 220px;
}

/* .serviceCardParent{
    height: 500px;
    margin-top: 200px;
} */

.serviceWrapper {
    top: -180px;
    position: absolute;
}

.parentCard { 
    box-shadow: 0px 10px 25px -15px rgba(0, 0, 0, 0.28);
    height: 500px;
    width: 350px;
}

.avatarCard {
    position: absolute;
    bottom: 230px;
    left: 130px;
    width: 85px;
    height: 85px;
    border-radius: 50%;
    box-shadow: 0px 11px 32px -12px rgba(0, 0, 0, 0.28)
}

.titleCard {
    font-size: 20px;
    margin-top: 50px;
}


.titleCard p{
    padding: 5px;
    line-height: 1.7;
    text-align: center;
    font-size: 17px;
    margin-top: 10px;
    color: grey;
}

.btnServiceCard {
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
}

.adjustImage {
    padding: 17px;
}
</style>