<template>
  <div v-if="!product">
    <v-container class="text-center">
      <v-progress-circular indeterminate color="primary"></v-progress-circular>
    </v-container>
  </div>
  <div v-else>
    <Header :breadcrumbTitle="product.name"></Header>
    <v-main>
      <v-container>
        <v-row class="justify-end pa-3">
          <BackButton/>
        </v-row>
        <v-row>
          <v-col cols="12" sm="6">
            <v-img :src="product.imgUrl" :alt="product.name" class="image-container"></v-img>
          </v-col>
          <v-col cols="12" sm="6">
            <Description :product="product"></Description>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { getProductDetails } from '@/services/productService.js';

const product = ref(null);
const route = useRoute();

onMounted(async () => {
  try {
    product.value = await getProductDetails(route.params.id);
  } catch (error) {
    console.error('Error al cargar los datos del producto:', error);
  }
});
</script>

<style scoped>
.back-button {
  display: inline-block;
  padding: 10px 20px;
  background-color: #1868c0;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  margin-bottom: 10px;
}

.back-button:hover {
  background-color: #0056b3;
}

.image-container {
  max-height: 300px;
  width: 100%;
}
</style>
