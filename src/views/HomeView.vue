<template>
  <div class="homeOrganizer">
    <HomePageImg />
    <CompanyAtributies />
  </div>
  <AboutView />
  <ServiceTitle />
  <v-sheet rounded="0" color="grey-lighten-4" class="serviceCardParent">
    <ServicesView />
    <CompletedProjects />
  </v-sheet>
  <PricingProjects />
  <CustomerFeedback />
  <v-sheet rounded="0" color="grey-lighten-4 backgroundDefiner">
    <CompanyBlog />
  </v-sheet>
  <FooterSection />
</template>

<script setup>
import HomePageImg from './HomePageImg.vue';
import CompanyAtributies from './CompanyAtributies.vue';
import AboutView from './AboutView.vue';
import ServiceTitle from './ServiceTitle.vue';
import ServicesView from './ServicesView.vue';
import CustomerFeedback from './CustomerFeedback.vue';
import CompletedProjects from './CompletedProjects.vue';
import PricingProjects from './PricingProjects.vue';
import CompanyBlog from './CompanyBlog.vue';
import FooterSection from './FooterSection.vue';

</script>
<style>
.homeOrganizer {
  position: relative;
}
.serviceCardParent {
  position: relative;
  margin-top: 250px;
}
.backgroundDefiner {
  height: 940px;
}
</style>