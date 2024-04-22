<template>
  <Header></Header>
  <v-app-bar app>
    <v-spacer></v-spacer>
    <Search @search="updateSearchTerm"></Search>
  </v-app-bar>
  <v-main>
    <v-flex>
      <v-row class="pa-4">
            <v-col v-for="item in filteredList" :key="item.id" cols="12" sm="6" md="4" lg="3">
              <ProductItem :item="item"></ProductItem>
            </v-col>
          </v-row>
    </v-flex>
  </v-main>
</template>

<script setup>
import {getProducts} from '@/services/productService.js';
import { ref, onMounted, computed } from 'vue';

const searchTerm = ref("");
const items = ref(null);

const filteredList = computed(() => {
  if (!items.value){
    return [];
  }
  return items.value.filter(item =>
    item.name.toLowerCase().includes(searchTerm.value.toLowerCase()) || 
    item.binomialName.toLowerCase().includes(searchTerm.value.toLowerCase())
  );
});

const updateSearchTerm = (term) => {
  searchTerm.value = term;
};

onMounted(async () => {
  try {
    items.value = await getProducts();
  } catch (error) {
    console.error('Error al cargar los productos:', error);
  }
});
</script>
