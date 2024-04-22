<template>
  <v-app-bar app color="primary">
    <v-toolbar-title>
      <router-link to="/" class="header-link">
        <v-icon>mdi-home</v-icon>
        Dulces Pétalos
      </router-link>
    </v-toolbar-title>
    <v-breadcrumbs :items="breadcrumbs">
      <template v-slot:item="{ item }">
        <v-breadcrumbs-item :disabled="item.disabled">
          <router-link :to=item.to class="header-link">
            {{ item.text.toUpperCase() }}
          </router-link>
        </v-breadcrumbs-item>
      </template>
  </v-breadcrumbs>
  </v-app-bar>
</template>

<script setup>
import { ref, defineProps } from 'vue';

const props = defineProps({
  breadcrumbTitle: String
});

const breadcrumbs = ref([]);
const breadcrumbTitle= props.breadcrumbTitle;
breadcrumbs.value= buildBreadcrumbs(breadcrumbTitle);

function buildBreadcrumbs(breadcrumbTitle) {
  const breadcrumbs = [
    { text: 'Inicio', disabled: true, to: '/' }
  ];
  if(breadcrumbTitle){
    breadcrumbs[0].disabled= false;
    breadcrumbs.push({ text: breadcrumbTitle, disabled: true });
  }
  return breadcrumbs;
}
</script>

<style scoped>
.header-link {
  color: white;
  text-decoration: none;
}
</style>
