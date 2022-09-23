<template>
    <Headline headline="2 Books displayed" />
    <SearchBar v-model:search-input="searchInput"
               v-model:selected-filter="selectedFilter"
               search-box-title="Search by Title"
               filter-box-title="Filter by Publisher"
               :options="options"
               @change:searchInput="fetchResults"
    />
    <ResultsTable :table-data="resultLists" />
</template>


<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import Headline from '../components/Headline.vue'
import SearchBar from '../components/SearchBar.vue'
import ResultsTable from '../components/ResultsTable.vue'
import { ref, onMounted, Ref } from "vue";
import type { TableResult } from "../types/Table";
import axios from "axios";
import { BASE_URL, PATH } from "../constants/api.constants";


const options : string[] = ['-', 'Leanpub', 'McGraw-Hill']
const searchInput = ref('')
const selectedFilter = ref('')

const resultLists: Ref<TableResult[]> = ref([])

onMounted(() => {
  fetchResults()
})


const fetchResults = async () => {
  axios
    .get(`${BASE_URL}${PATH.books}`, { params: { q: searchInput.value } }).then((response) => {
    console.log("response length= ", response.data.length);
    resultLists.value = []
    resultLists.value = response.data
    console.log("resultList length= ",resultLists.value.length);
  })
    .catch((error) => {
    console.log(error)
  })
}
</script>
