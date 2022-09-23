<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import Headline from '../components/Headline.vue'
import SearchBar from '../components/SearchBar.vue'
import { ref } from "vue";


const options : string[] = ['-', 'Leanpub', 'McGraw-Hill']
const searchInput = ref('')
const selectedFilter = ref('')
</script>

<template>
  <main class="container">
    <Headline headline="2 Books displayed" />
    <SearchBar v-model:search-input="searchInput" v-model:selected-filter="selectedFilter" search-box-title="Search by Title" filter-box-title="Filter by Publisher" :options="options"/>
  </main>
</template>
