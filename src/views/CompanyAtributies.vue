<template>
    <div>
        <v-container>
                <div class="d-flex inline-block justify-center companyAttributes">
                    <v-card
                    v-for="(card, i) in smallCards"
                    :key="i"
                    :color="card.smallCardColor"
                    rounded="0"
                    :height="290"
                    :min-width="400"
                    >
                        <div class="atributesBackChild"></div> 

                        <div :class="card.smallCardClass" class="d-flex text-h2" style="height: 100%;"></div>

                        <div class="textSmallCard pa-5">
                            <v-row no-gutters>
                                <v-col
                                cols="12"
                                md="4"
                                class="d-flex justify-center"
                                >
                                    <v-avatar :size="80" :color="card.smallCardAvatarColor">
                                        <v-icon :icon="card.icon" size="50"></v-icon>
                                    </v-avatar>
                                </v-col>
                                <v-col
                                cols="12"
                                md="8"
                                class="justify-start"
                                >
                                <v-card-title class="text-white " style="font-size: x-large;">{{ card.smallCardTitle }} <br> {{ card.smallCardTitleNewLine }}</v-card-title>
                                <v-card-text class="font-weight-light" style="font-size: 18px;">{{ card.smallCardText }}</v-card-text>
                                </v-col>
                            </v-row>
                        </div>
                    </v-card>
                </div>
            </v-container>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const smallCards = ref(
    [
        {
            icon: 'mdi-account-hard-hat',
            smallCardAvatarColor: '#fc5e28',
            smallCardColor: '#040e26',
            smallCardTitle: 'Quality',
            smallCardTitleNewLine: 'Construction',
            smallCardText: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
            smallCardClass: 'small-card1'
        },
        {
            icon: 'mdi-account-hard-hat',
            smallCardAvatarColor: '#040e26',
            smallCardColor: '#fc5e28',
            smallCardTitle: 'Professional',
            smallCardTitleNewLine: 'Liability',
            smallCardText: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
            smallCardClass: 'small-card2'
        },
        {
            icon: 'mdi-account-hard-hat',
            smallCardAvatarColor: '#fc5e28',
            smallCardColor: '#040e26',
            smallCardTitle: 'Dedicated To Our',
            smallCardTitleNewLine: 'Clients',
            smallCardText: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
            smallCardClass: 'small-card1'
        },
    ]
)
</script>

<style>
.companyAttributes {
    position: absolute;
    margin-top: -45px;
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