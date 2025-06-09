<template>
        <v-card
        rounded="0"
        class="pt-4 pb-7"
        :height="115"
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
</template>

<script setup>


// const tab = ref(null);

// console.log(tab)
</script>

<style scoped>
.bordaSheet{
    border-width: 1px;
}


</style>