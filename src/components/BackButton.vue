<template>
  <button class="back-button" @click="goBack">Back</button>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

const goBack = () => {
  router.go(-1);
};
</script>

<style scoped>
.back-button {
  padding: 10px 20px;
  background-color: #1868c0;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  cursor: pointer;
}

.back-button:hover {
  background-color: #0056b3;
}
</style>
