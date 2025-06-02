<template>
  <ContactBar />
  <HomePage />
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
import ContactBar from '../components/ContactBar.vue';
import HomePage from '@/components/HomePage.vue';
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
.serviceCardParent {
  position: relative;
  margin-top: 250px;
}
.backgroundDefiner {
  height: 940px;
}
</style>