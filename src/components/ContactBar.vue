<template>
  <v-toolbar
  :height="43"
  color="#040e26"
  flat
  >
    <v-container>
      <div class="d-flex align-center">
        <div>
          <v-icon icon="mdi-email" color="#fc5e28" size="small">          
          </v-icon>
          <span class="text-grey text-subtitle-2 ml-1 font-weight-light">mcprojectos@moz.co.mz</span>
        </div>
        <div class="ml-10">
          <v-btn size="small" icon="mdi-facebook" color="#fc5e28"></v-btn>
          <v-btn size="small" icon="mdi-twitter" color="#fc5e28"></v-btn>
          <v-btn size="small" icon="mdi-instagram" color="#fc5e28"></v-btn>
          <v-btn size="small" icon="mdi-basketball" color="#fc5e28"></v-btn>
        </div>
        <v-spacer></v-spacer>
        <v-btn 
        v-bind="activatorProps"
        color="#fc5e28" 
        variant="flat"
        >
          messagem
        <v-dialog
        transition="dialog-top-transition"
        activator="parent"
        max-width="340"
        >
          <template v-slot:default="{ isActive }">
            <v-card class="px-4" width="470">
                <v-btn
                icon
                variant="flat"
                class="ml-auto mt-2 mr-5"
                @click="isActive.value = false"
                >
                  <v-icon color="#fc5e28" icon="mdi-close"></v-icon>
                </v-btn>
              <v-container>
                <v-card-title><h2 class="font-weight-regular">Request Quote</h2></v-card-title>

                <v-card-text>
                  <v-text-field placeholder="Nome" variant="outlined"></v-text-field>
                  <v-text-field placeholder="Apelido" variant="outlined"></v-text-field>
                  <v-text-field placeholder="Email" variant="outlined"></v-text-field>
                  <v-select placeholder="Selecione o serviço" variant="outlined" :items="opcoesDeServico"></v-select>
                  <v-textarea placeholder="Mensagem" variant="outlined" rows="3"></v-textarea>

                  <v-btn color="#fc5e28" class="pa-7" block>Request a Quote</v-btn>
                </v-card-text>
              </v-container>
            </v-card>
          </template>
        </v-dialog>
      </v-btn>
      </div>
    </v-container>
  </v-toolbar>
</template>

<script setup>
import { ref } from 'vue'
const opcoesDeServico = ref (['Arquitetura', 'Renovação', 'Construção', 'Interior & Exterior', 'Outros Serviços']) 
</script>
<style>
.corDeFundo{
  color: #040e26;
}
.colorscheme{
  text-emphasis-color:#040e26;
  background-color: #fc5e28;
}

</style>
