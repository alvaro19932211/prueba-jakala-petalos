<template>
  <v-card>
    <input class="search-container" type="text" v-model="searchTerm" @input="search" placeholder="Buscar...">
  </v-card>
</template>

<script setup>
import { ref, defineEmits } from 'vue';

const searchTerm = ref('');
const emit = defineEmits();

const search = () => {
  emit('search', searchTerm.value);
};
</script>

<style>
.search-container {
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px;
}
</style>