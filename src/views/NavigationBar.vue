<template>
    <div class="navigation pa-0">
            <v-container>
                <v-toolbar :height="57" rounded="0" color="#040e26" class="pa-auto">
                    <v-list active-class="activeTab" class="d-flex" bg-color="#040e26">
                        <router-link
                        class="pa-0 ma-0"
                        style="text-decoration: none; color: inherit;" 
                        to="/"
                        >
                            <v-list-item  value="home" link class="py-5 px-6">HOME</v-list-item>
                        </router-link>
                        <router-link 
                        class="pa-0 ma-0"
                        style="text-decoration: none; color: inherit;" 
                        to="/about"
                        >
                            <v-list-item value="about" link class="py-5 px-6">ABOUT</v-list-item>
                        </router-link>
                        <v-list-item value="services" link class="px-6">SERVICES</v-list-item>
                        <v-list-item value="projects" link class="px-6">PROJECTS</v-list-item>
                        <v-list-item value="blog" link class="px-6">BLOG</v-list-item>
                        <v-list-item value="contact" link class="px-6">CONTACT</v-list-item>
                    </v-list>
                    
                    <v-spacer></v-spacer>

                    <v-btn variant="text">Inquire Now</v-btn>
                </v-toolbar>
            </v-container>
        </div>
</template>

<script setup>

</script>

<style >
.navigation {
    position: absolute;
    padding: 0px;
    width: 100%;
    z-index: 1;
}

.activeTab{
    background-color: #ef3e00;
    color: white;
}
</style>