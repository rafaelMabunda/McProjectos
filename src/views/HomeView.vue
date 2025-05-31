<template>
  <ContactBar />
  <HomePage />
  <AboutView />
  <ServiceTitle />
  <v-sheet rounded="0" color="grey-lighten-4" class="serviceCardParent">
    <ServicesView />
    <CustomerFeedback />
  </v-sheet>
</template>

<script setup>
import ContactBar from '../components/ContactBar.vue';
import HomePage from '@/components/HomePage.vue';
import AboutView from './AboutView.vue';
import ServiceTitle from './ServiceTitle.vue';
import ServicesView from './ServicesView.vue';
import CustomerFeedback from './CustomerFeedback.vue';

</script>
<style>
.serviceCardParent {
  position: relative;
  margin-top: 250px;
}
</style>