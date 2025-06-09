<template>
  <v-app>
    <v-main>
      <ContactBar />
      <HomePage />
      <NavigationBar />
      <router-view/>
    </v-main>
  </v-app>
</template>

<script setup>
import NavigationBar from './views/NavigationBar.vue';
import ContactBar from './components/ContactBar.vue';
import HomePage from './components/HomePage.vue';

</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&amp;display=swap');
*{
  font-family: 'Roboto', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
