<template>
    <v-card class="imgHome" flat rounded="0" :height="714">
            <v-img src="../assets/Screenshot (848).png" cover></v-img>

            <div class="d-flex v-card--reveal text-h2" style="height: 100%;"></div>

             <v-container style="bottom: 0;">
                <div class="textOverImage">
                    <HomeText />
                     <!-- <AboutSeparated /> -->
                </div>
                </v-container> 
        </v-card>
</template>

<script setup>
import HomeText from './HomeText.vue';
// import AboutSeparated from './AboutSeparated.vue';


</script>

<style>
.v-card--reveal{
    background: #040e26;
    opacity: .5;
    position: absolute;
    bottom: 0;
    width: 100%;
}

.textOverImage {
    line-height: 1;
    font-size: 30px;
    position: absolute;
    top: 200px;
}

.imgHome {
    position: relative;
    top: 45px;
}
</style>