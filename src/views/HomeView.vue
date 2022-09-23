<template>
    <Headline headline="2 Books displayed" />
    <SearchBar v-model:search-input="searchInput" v-model:selected-filter="selectedFilter" search-box-title="Search by Title" filter-box-title="Filter by Publisher" :options="options"/>
    <ResultsTable :table-data="resultLists" />
</template>


<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import Headline from '../components/Headline.vue'
import SearchBar from '../components/SearchBar.vue'
import ResultsTable from '../components/ResultsTable.vue'
import { ref, onMounted, reactive } from "vue";
import type { TableResult } from "../types/Table";
import axios from "axios";
import { BASE_URL, PATH } from "../constants/api.constants";


const options : string[] = ['-', 'Leanpub', 'McGraw-Hill']
const searchInput = ref('')
const selectedFilter = ref('')

const resultLists: TableResult[] = reactive([])

onMounted(() => {
  fetchResults()
})


const fetchResults = async () => {
  axios
    .get(`${BASE_URL}${PATH.books}`).then((response) => {
    Object.assign(resultLists, response.data)
  })
    .catch((error) => {
    console.log(error)
  })
}
</script>
