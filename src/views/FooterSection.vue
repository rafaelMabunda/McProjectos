<template>
    <v-sheet 
    height="500" 
    width="100%" 
    color="#040e26" 
    class="pa-10 footerContainer"
    >
        <v-container>
            <v-row>
                <v-col
                cols="12"
                md="3"
                >
                <div class="titleStyle">
                    <h4>ABOUT</h4>
                    <p class="mt-8 text-grey">Far far away, behind the word mountains, far from the countries.</p>
                    <div class="mt-5">
                        <v-hover>
                            <template v-slot:default="{isHovering, props}">
                            <v-btn
                            size="small"
                            icon="mdi-twitter" 
                            v-bind="props"
                            variant="text"
                            :style="isHovering ? 'background-color: #fc5e28' : 'background-color: #040e26'"
                            ></v-btn>
                            </template>
                        </v-hover>
                        <v-hover>
                            <template v-slot:default="{isHovering, props}">
                            <v-btn 
                            size="small"
                            icon="mdi-facebook"
                            v-bind="props"
                            variant="text"
                            :style="isHovering ? 'background-color: #fc5e28' : 'background-color: #040e26'"
                            ></v-btn>
                            </template>
                        </v-hover>
                        <v-hover>
                            <template v-slot:default="{isHovering, props}">
                            <v-btn 
                            size="small"
                            icon="mdi-instagram"
                            v-bind="props"
                            variant="text"
                            :style="isHovering ? 'background-color: #fc5e28' : 'background-color: #040e26'"
                            ></v-btn>
                            </template>
                        </v-hover>
                    </div>
                </div>
                </v-col>

                <v-col
                cols="12"
                md="3"
                >
                    <div class="titleStyle">
                        <h4 class="ml-2">LINKS</h4>
                        <div class="mt-7">
                            <v-list 
                            v-for="(activity, i) in activities"
                            :key="i"
                            color="transparent" 
                            class="bg-transparent pa-0 ma-0">
                            <v-hover>
                                <template v-slot:default="{isHovering, props}">
                                    <v-list-item
                                    v-bind="props"
                                    link="#" 
                                    class="pa-0 ma-0" 
                                    density="compact" 
                                    :style="isHovering ? 'color: #fc5e28': 'color: grey'"
                                    >
                                    <v-icon icon="mdi-chevron-right"></v-icon>
                                    {{ activity }}
                                    </v-list-item>
                                </template>
                            </v-hover>
                            </v-list>
                        </div>
                        
                    </div>
                </v-col>
                <v-col
                cols="12"
                md="3"
                >
                    <div class="titleStyle">
                        <h4 class="ml-2">SERVICES</h4>
                        <div class="mt-7">
                            <v-list 
                            v-for="(service, i) in servicies"
                            :key="i"
                            color="transparent" 
                            class="bg-transparent pa-0 ma-0">
                            <v-hover>
                                <template v-slot:default="{isHovering, props}">
                                    <v-list-item
                                    v-bind="props"
                                    link="#" 
                                    class="pa-0 ma-0" 
                                    density="compact" 
                                    :style="isHovering ? 'color: #fc5e28': 'color: grey'"
                                    >
                                    <v-icon icon="mdi-chevron-right"></v-icon>
                                    {{ service }}
                                    </v-list-item>
                                </template>
                            </v-hover>
                            </v-list>
                        </div>
                    </div>
                </v-col>

                <v-col
                cols="12"
                md="3"
                >
                    <div class="titleStyle">
                        <h4 class="ml-2">HAVE QUESTIONS?</h4>
                        <div class="mt-7">
                            <div class="d-flex mr-10 text-grey">
                                <v-icon icon="mdi-map-marker"></v-icon>
                                <p class="ml-3">203 Fake St. Mountain View, San Francisco, California, USA</p>
                            </div>
                            <div class="d-flex mr-10 text-grey mt-5">
                                <v-icon size="small" icon="mdi-phone"></v-icon>
                                <p class="ml-3">+258 845 581 276</p>
                            </div>
                            <div class="d-flex align-center mr-10 text-grey mt-5">
                                <v-icon size="small" icon="mdi-email"></v-icon>
                                <p class="ml-3">rafaelmabunda@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </v-col>
            </v-row>
        </v-container>

    <div class="developerContact">
        <v-container>
            <div class="text-grey-lighten-2">
                <p>Copyright ©2025 All rights reserved | Made by Rafael Mabunda</p>
            </div>
            <div class="d-flex mr-10 mt-2 align-center text-grey-lighten-2">
                <v-icon size="small" icon="mdi-phone"></v-icon>
                <p class="ml-1">+258 845 581 276</p>
                <v-icon class="ml-8" size="small" icon="mdi-email"></v-icon>
                <p class="ml-2">rafaelnewmabunda@gmail.com</p>
            </div>
        </v-container>
    </div>
    </v-sheet>
</template>

<script setup>
import {ref} from 'vue'

const activities = ref(['Project', 'About Us', 'Services', 'Blog Posts', 'Industries']) 
const servicies = ref(['Customer Services', 'Prompt Delivery', 'Reliable Equipment', 'New Heavy Equipment'])
</script>

<style scoped>
.footerContainer {
    position: relative;
}
.titleStyle{
    margin-top: 10px;
}
h4 {
    letter-spacing: 2px;
}
.baseboardText {
    text-decoration: none;
}

.developerContact {
    bottom: 0;
    left: 0;
    position: absolute;
    border-bottom: 90px solid #fc5e28;
	border-left: 0px solid transparent;
	border-right: 80px solid transparent;
    width: 850px;
    height: 0px;
}

.developerContact div {
    margin-left: 80px;
}
</style>