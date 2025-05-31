<template>
    <div class="parent">
        <v-card
        rounded="0"
        class="pt-4 pb-7"
        :height="150"
        flat
        >
        <v-container>
            <div class="d-flex align-center justify-space-between">
                <div class="d-flex align-center">
                    <v-img color="#fc5e28" class="text-white" :width="65" src="../assets/crane.png"></v-img>
                    <span class="font-weight-bold ml-2" >
                        MC PROJECTOS <br>
                        <small style="color: #fc5e28;">EMPRESA DE CONSTRUÇÃO, LDA</small>
                    </span>
                </div>
                <div class="d-flex align-center">
                    <v-sheet :width="40" :height="40" class="d-flex align-center justify-center mr-2 bordaSheet">
                        <font-awesome-icon style="height: 15px; color: #fc5e28;" :icon="['fas', 'map']" />
                    </v-sheet>
                    <div class="ml-2">
                        <span class="font-weight-bold text-body-2" style="color: #fc5e28;">Free call</span><span class="text-body-2"> +258 845 581 276</span>
                    <div class="font-weight-thin text-caption">Call Us Now 24/7 Customer Support</div>
                    </div>
                </div>
                <div class="d-flex align-center">
                    <v-sheet :width="40" :height="40" class="d-flex align-center justify-center mr-2 bordaSheet">
                        <font-awesome-icon style="height: 15px; color: #fc5e28;" :icon="['fas', 'paper-plane']" />
                    </v-sheet>
                    <div class="ml-2">
                        <span class="font-weight-bold text-body-2">Our Location</span>
                    <div class="font-weight-thin text-caption">Bairro das Mahotas</div>
                    </div>
                </div>
            </div>
        </v-container>
        </v-card>
        <div class="navigation pa-0">
            <v-container>
                <v-toolbar :height="57" rounded="0" color="#040e26" class="pa-auto">
                    <v-list active-class="activeTab" class="d-flex" bg-color="#040e26">
                        <v-list-item  value="home" link class="py-5 px-6">HOME</v-list-item>
                        <v-list-item value="about" link class="px-6">ABOUT</v-list-item>
                        <v-list-item value="services" link class="px-6">SERVICES</v-list-item>
                        <v-list-item value="projects" link class="px-6">PROJECTS</v-list-item>
                        <v-list-item value="blog" link class="px-6">BLOG</v-list-item>
                        <v-list-item value="contact" link class="px-6">CONTACT</v-list-item>
                    </v-list>
                    
                    <v-spacer></v-spacer>

                    <v-btn variant="text">Inquire Now</v-btn>
                </v-toolbar>
            </v-container>
        </div>
        <v-card flat rounded="0" :height="714">
            <v-img src="../assets/Screenshot (848).png" cover></v-img>

            <div class="d-flex v-card--reveal text-h2" style="height: 100%;"></div>

             <v-container style="bottom: 0;">
                <div class="textOverImage">
                    <h1 class="text-white">
                        WE BUILD
                    </h1>
                    <h1 class="text-white">GREAT PROJECTS</h1>
                    <div class="text-white mt-6 text-subtitle-1">
                        Far far away, behind the word mountains,  far from the countries<br> Vokalia and Consonantia, there live the blind texts. Separated they live <br>in Bookmarksgrove.
                    </div>
                
                    <v-btn class="mt-6" color="#fc5e28">Our Services</v-btn>
                    <v-btn class="mt-6 ml-3">Request A QUOTE</v-btn>
                </div>
                </v-container> 
        </v-card>
        <div>
            <v-container>
                <div class="d-flex inline-block justify-center companyAttributes">
                    <v-card
                    color="#040e26"
                    rounded="0"
                    :height="290"
                    :min-width="400"
                    >
                        <div class="atributesBackChild"></div> 

                        <div class="d-flex small-card1 text-h2" style="height: 100%;"></div>

                        <div class="textSmallCard pa-5">
                            <v-row no-gutters>
                                <v-col
                                cols="12"
                                md="4"
                                class="d-flex justify-center"
                                >
                                    <v-avatar :size="80" class="iconBackground" color="#fc5e28">
                                        <v-icon icon="mdi-account-hard-hat" size="50"></v-icon>
                                    </v-avatar>
                                </v-col>
                                <v-col
                                cols="12"
                                md="8"
                                class="justify-start"
                                >
                                <v-card-title class="text-white " style="font-size: x-large;">Quality <br> construction</v-card-title>
                                <v-card-text class="font-weight-light" style="font-size: 18px;">A small river named Duden flows by their place and supplies it with the necessary regelialia.</v-card-text>
                                </v-col>
                            </v-row>
                        </div>
                    </v-card>

                    <v-card
                    color="#fc5e28"
                    rounded="0"
                    :height="290"
                    :min-width="400"
                    >
                        <div class="atributesBackChild"></div> 

                        <div class="d-flex small-card2 text-h2" style="height: 100%;"></div>

                        <div class="textSmallCard pa-5">
                            <v-row no-gutters>
                                <v-col
                                cols="12"
                                md="4"
                                class="d-flex justify-center"
                                >
                                    <v-avatar :size="80" class="iconBackground" color="#040e26">
                                        <v-icon icon="mdi-account-hard-hat" size="50"></v-icon>
                                    </v-avatar>
                                </v-col>
                                <v-col
                                cols="12"
                                md="8"
                                class="justify-start"
                                >
                                <v-card-title class="text-white " style="font-size: x-large;">Quality <br> construction</v-card-title>
                                <v-card-text class="font-weight-light" style="font-size: 18px;">A small river named Duden flows by their place and supplies it with the necessary regelialia.</v-card-text>
                                </v-col>
                            </v-row>
                        </div>
                    </v-card>

                    <v-card
                    color="#040e26"
                    rounded="0"
                    :height="290"
                    :min-width="400"
                    >
                        <div class="atributesBackChild"></div> 

                        <div class="d-flex small-card1 text-h2" style="height: 100%;"></div>

                        <div class="textSmallCard pa-5">
                            <v-row no-gutters>
                                <v-col
                                cols="12"
                                md="4"
                                class="d-flex justify-center"
                                >
                                    <v-avatar :size="80" class="iconBackground" color="#fc5e28">
                                        <v-icon icon="mdi-account-hard-hat" size="50"></v-icon>
                                    </v-avatar>
                                </v-col>
                                <v-col
                                cols="12"
                                md="8"
                                class="justify-start"
                                >
                                <v-card-title class="text-white " style="font-size: x-large;">Quality <br> construction</v-card-title>
                                <v-card-text class="font-weight-light" style="font-size: 18px;">A small river named Duden flows by their place and supplies it with the necessary regelialia.</v-card-text>
                                </v-col>
                            </v-row>
                        </div>
                    </v-card>
                </div>
            </v-container>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const tab = ref(null);
console.log(tab)
</script>

<style scoped>
.bordaSheet{
    border-width: 1px;
}
.parent {
    position: relative;
}

.navigation {
    padding: 0px;
    position: absolute;
    width: 100%;
    top: 110px;
    z-index: 1;
}

.activeTab{
    background-color: #ef3e00;
    color: white;
}

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
.companyAttributes {
    position: absolute;
    bottom: -200px;
}

.atributesBackChild {
    margin-left: 150px;
	background-color: transparent;
	width: inherit;
	height: 0px;
	border-left: 100px solid transparent;
	border-right: 0px solid transparent;
	border-bottom: 400px solid white;
}

.small-card1 {
    background: #040e26;
    opacity: .9;
    position: absolute;
    bottom: 0;
    width: 100%;
}

.small-card2 {
    background: #ef3e00;
    opacity: .8;
    position: absolute;
    bottom: 0;
    width: 100%;
}

.textSmallCard{
    line-height: 1;
    font-size: 30px;
    position: absolute;
    top: 15px;
    line-height: 1.8;
}


</style>