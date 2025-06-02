<template>
    <div class="d-flex sheetContainer">
        <v-sheet color="#fc5e28" class="completeComplete1"></v-sheet>
        <v-sheet color="#040e26" class="completeComplete1"></v-sheet>
        <v-sheet class="textSheet pa-0" color="transparent">
            <v-container>
                <v-row>
                    <v-col
                    cols="12"
                    md="6"
                    class="pa-0 ma-0"
                    >
                    <div class="d-flex flex-column justify-center">
                        <h5>READ TESTIMONIALS</h5>
                        <h1>It's always a joy to hear <br> that the work we do <br> has positively reviews</h1>
                    </div>
                    </v-col>

                    <v-col
                    cols="12"
                    md="6"
                    class="pa-0 ma-0"
                    >
                        <v-carousel
                        height="100%"
                        hide-delimiter-background=""
                        :show-arrows="false"
                        cycle
                        >
                            <v-carousel-item
                            v-for="(slide, i) in slides"
                            :key="i"
                            >
                                <v-card
                                rounded="0"
                                color="transparent"
                                >
                                    <v-row>
                                        <v-col
                                        cols="12"
                                        md="3"
                                        >
                                            <div class="d-flex justify-end align-end" style="height: 100%;">
                                                <v-avatar size="100">
                                                    <v-img :src="slide.img"></v-img>
                                                </v-avatar>
                                            </div>
                                        </v-col>
                                        <v-col
                                        cols="12"
                                        md="9"
                                        class="px-0 mx-0"
                                        >
                                        <div class="d-flex align-center text-white" style="height: 78%;">
                                            <p>{{ slide.text}}</p>
                                        </div>
                                        <div class="textName d-flex text-white flex-column" style="width: 100%; height: 22%;">
                                            <h3>{{ slide.nome }}</h3>
                                            <p>GUESTS</p>
                                        </div>
                                        </v-col>
                                    </v-row>       
                                </v-card>
                            </v-carousel-item>
                        </v-carousel>
                    </v-col>
                </v-row>
            </v-container>
        </v-sheet>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const slides = ref([
    {
        nome: "Rafael Mabunda",
        img: require('../assets/Screenshot (853).png'),
        text: "O sucesso é a soma de pequenos esforços repetidos dia após dia. Esta frase, que pode ser encontrada em diversos sites de motivação e inspiração, como o Pensador, ressalta a importância da persistência e do esforço contínuo para alcançar os objetivos. "
    },
    {
        nome: "Leia Sara Muhala",
        img: require('../assets/Screenshot (854).png'),
        text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean"
    },
    {
        nome: "Delfina Mabunda",
        img: require('../assets/Screenshot (855).png'),
        text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean"
    }
])
</script>

<style scoped>
.v-carousel__controls {
    align-items: end;
    justify-content: center;
}
.completeComplete1 {
    width: 50%;
    height: 100%;
}

.sheetContainer{
    margin-top: 110px;
    height: 437px;
}

.textSheet {
    position: absolute;
    width: 100%;
    height: 437px;
    z-index: 1;
    color: white;
}

.textSheet h5 {
    color: white;
}

.textSheet div{
    height: 100%;
}

.textSheet h1{
    line-height: 1.2;
    font-size: 50px;
    color: white;
}

.parentText{
    background-color: transparent;
    height: 100%;
    display: flex;
    /* align-content: center; */
    flex-direction: column;
}

.textName p{
    font-size: 13px;
    color: #fc5e28;
}
</style>