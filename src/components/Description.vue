<template>
  <v-card>
    <v-card-title>{{ product.name }}</v-card-title>
    <v-card-subtitle>{{ product.binomialName }}</v-card-subtitle>
    <v-card-title>{{ product.price }}</v-card-title>
    <v-card-text>
      <p>Riegos por semana: {{ product.wateringsPerWeek }}</p>
      <p>Fertilizante recomendado: {{ product.fertilizerType }}</p>
      <p>Altura(cm): {{ product.heightInCm }}</p>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  product: Object
});

</script>
