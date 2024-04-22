<template>
  <router-link :to="'product/'+item.id" class="product-link">
    <v-card class="text-center">
      <v-img :src="item.imgUrl" :alt="item.name" class="image-container"></v-img>
      <v-card-title>{{ item.name }}</v-card-title>
      <v-card-subtitle>{{ item.binomialName }}</v-card-subtitle>
      <v-card-text>{{ item.price }}</v-card-text>
    </v-card>
  </router-link>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  item: Object
});

</script>

<style scoped>
.image-container {
  max-height: 200px;
  margin-top: 20px;
}

.product-link {
    text-decoration: none;
}
</style>
