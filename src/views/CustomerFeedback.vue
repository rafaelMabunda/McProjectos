<template>
    <div class="d-flex sheetContainer">
        <v-sheet color="#040e26" class="completeComplete1"></v-sheet>
        <v-sheet color="#fc5e28" class="completeComplete1"></v-sheet>
        <v-sheet class="textSheet" color="transparent">
            <v-container>
                <v-row>
                    <v-col
                    cols="12"
                    md="6"
                    >
                    <v-sheet class="bg-red d-flex align-center justify-center">
                        <div class="bg-green">
                            <span>Rafael</span>
                        </div>
                    </v-sheet>
                    <!-- <v-sheet class="parentText">
                        <div>
                            <p>WILCON A CONSTRUCTION COMPANY</p>
                            <h1>Best Provider for Industrial Services</h1>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        </div>
                    </v-sheet> -->
                    </v-col>
                </v-row>
            </v-container>
        </v-sheet>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style>
.completeComplete1 {
    width: 50%;
    height: 100%;
}

.sheetContainer{
    margin-top: 450px;
    height: 437px;
}

.textSheet {
    position: absolute;
    width: 100%;
    height: 437px;
    z-index: 1;
    color: white;
}

.textSheet p {
    color: #fc5e28;
}

.textSheet div{
    height: 100%;
}

.textSheet h1{
    line-height: 1.2;
    font-size: 45px;
    color: white;
    margin-bottom: 20px;
}

.parentText{
    background-color: transparent;
    height: 100%;
    display: flex;
    align-content: center;
    flex-direction: column;
}
</style>