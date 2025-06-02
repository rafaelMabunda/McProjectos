<template>
    <div class="d-flex sheetContainer">
        <v-sheet color="#040e26" class="completeComplete1"></v-sheet>
        <v-sheet class="completeComplete1">
            <v-img height="100%" cover src="../assets/Screenshot (846).png"></v-img>
        </v-sheet>
        <v-sheet class="textSheet pa-0" color="transparent">
            <v-container>
                <v-row>
                    <v-col
                    cols="12"
                    md="6"
                    class="pa-0 ma-0"
                    style="height: 100%;"
                    >
                    <div class="d-flex flex-column justify-center">
                        <h5>WILCON A CONSTRUCTION COMPANY</h5>
                        <h1>Best Provider for Industrial <br> Services</h1>
                        <span class="mt-10"><h4>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</h4></span>
                        <p class="mt-3">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove <br> right at the coast of the Semantics, a large language ocean</p>
                    </div>
                    </v-col>
                    <v-col
                    class="pa-0"
                    >
                        <div class="d-flex justify-center flex-column">
                            <v-card color="#fc5e28" height="125" width="350" flat rounded="0">
                                <div class="px-5">
                                    <v-row
                                    class="ma-0"
                                    >
                                        <v-col
                                        cols="12"
                                        md="3"
                                        class="d-flex justify-center align-center"
                                        >
                                            <v-img src="../assets/engineer1.png"></v-img>
                                        </v-col>
                                        <v-col
                                        cols="12"
                                        md="9"
                                        >
                                        <div class="d-flex justify-center flex-column">
                                            <h2>48,000</h2>
                                            <h4>PROJECT COMPLETED</h4>
                                        </div>
                                        </v-col>
                                        
                                    </v-row>
                                </div>
                            </v-card>
                            <v-card class="mt-2" color="white" height="125" width="350" flat rounded="0">
                                <div class="px-5">
                                    <v-row
                                    class="ma-0"
                                    >
                                        <v-col
                                        cols="12"
                                        md="3"
                                        class="d-flex justify-center align-center"
                                        >
                                            <v-img src="../assets/worker2.png"></v-img>
                                        </v-col>
                                        <v-col
                                        cols="12"
                                        md="9"
                                        >
                                        <div class="d-flex justify-center flex-column">
                                            <h2>54,900</h2>
                                            <h4>PROJECT COMPLETED</h4>
                                        </div>
                                        </v-col>
                                    </v-row>
                                </div>
                            </v-card>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </v-sheet>
    </div>
</template>

<script setup>
// const counters = document.querySelectorAll('.counter')
// const speed = 200

// console.log(counters)
// counters.forEach(counter => {
//     const updateCount = () => {
//         const target = +counter.getAttribute('data-target');
//         const count = +counter.innerHTML;

//         const inc = target / speed

//         if (count < target) {
//             counter.innerHTML = count + inc;
//             setTimeout(updateCount, 1);
//         } else {
//             count.innerHTML = target
//         }
//     }

//     updateCount()
// })
</script>

<style>
.v-carousel__controls {
    align-items: end;
    justify-content: center;
}
.completeComplete1 {
    width: 50%;
    height: 100%;
}

.sheetContainer{
    margin-top: 450px;
    height: 520px;
}

.textSheet {
    position: absolute;
    width: 100%;
    height: 550px;
    z-index: 1;
    color: white;
}

.textSheet h5 {
    color: #fc5e28;
}

.textSheet div{
    height: 100%;
}

.textSheet h1{
    line-height: 1.2;
    font-size: 45px;
    color: white;
}

.textSheet span{
    color: #fc5e28;
}
.textSheet p{
    color: white;
}
.parentText{
    background-color: transparent;
    height: 100%;
    display: flex;
    flex-direction: column;
}

.textName p{
    font-size: 13px;
    color: #fc5e28;
}
</style>