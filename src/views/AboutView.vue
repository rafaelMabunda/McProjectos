<template>
  <div class="about">
    <v-container>
      <v-row>
        <v-col
        cols="12"
        md="6"
        > 
          <div class="parentAbout">
            <v-img src="../assets/Screenshot (847).png"></v-img>
            <div class="overAbout1"></div>
            <div  class="overAbout2 d-flex justify-center align-center">
              <v-img class="text-white" src="../assets/crane.png"></v-img>
            </div>
          </div>
          
        </v-col>
        <v-col
        cols="12"
        md="6"
        >
        <v-card
        style="height: 100%;"
        flat
        class="d-flex align-center pa-3 ml-7"
        >
          <div class="rightText">
            <p class="colorfulText">WELCOME TO MC PROJECTOS</p>
            <h1>Wilcon A Construction Company</h1>
            <div class="d-flex mt-5">
              <v-row>
                <v-col
                cols="12"
                md="2"
                >
                <v-img style="width: 50px; height: 60px;" src="../assets/hammer.png"></v-img>

                </v-col>
                <v-col
                cols="12"
                md="10"
                class="align-start"
                >
                  <h3>We're in this business since 1975 and We provide the best insdustrial services</h3>
                </v-col>
              </v-row>
          </div>
          <p class="mt-5 text-grey">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>

          <v-hover>
            <template v-slot:default="{isHovering, props}">
              <v-btn 
              v-bind="props"
              :variant="isHovering ? 'outlined': 'flat'"
              color="#fc5e28" 
              class="mt-4" 
              flat
              >Learn More</v-btn>
            </template>
          </v-hover>
          </div>

        </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<style>
.about {
  margin-top: 300px;
}

.parentAbout {
  position: relative;
}

.overAbout1 {
  top: 0px;
  border-top: 135px solid #fc5e28;
	border-left: 0px solid transparent;
	border-right: 135px solid transparent;
	height: 0;
	width: 0px;
  position: absolute;
}

.overAbout2 {
  right: -45px;
  top: 250px;
  background-color: #fc5e28; 
  width: 90px; 
  height: 120px;
  padding: 15px;
  position: absolute;
}

.colorfulText{
  color: #fc5e28;
  font-weight: bold;
  margin-bottom: 10px;
}

.rightText h1 {
font-size: 45px;
line-height: normal;

}

</style>
