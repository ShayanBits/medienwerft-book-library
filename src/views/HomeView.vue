<template>
    <Headline headline="2 Books displayed" />
    <SearchBar v-model:search-input="searchInput"
               v-model:selected-filter="selectedFilter"
               search-box-title="Search by Title"
               filter-box-title="Filter by Publisher"
               :options="options"
               @change:searchInput="fetchResults"
    />
<!--    <ResultsTable :table-data="resultLists" />-->
    <ResultsTable />
</template>


<script setup lang="ts">
import Headline from '../components/Headline.vue'
import SearchBar from '../components/SearchBar.vue'
import ResultsTable from '../components/ResultsTable.vue'
import { ref, onMounted, Ref } from "vue";
import type { TableResult } from "../types/Table";
import axios from "axios";
import { BASE_URL, PATH } from "../constants/api.constants";
import { useResultListsStore } from "../stores/resultLists";


const options : string[] = ['-', 'Leanpub', 'McGraw-Hill']
const searchInput = ref('')
const selectedFilter = ref('')
const resulListStore = useResultListsStore()

const resultLists: Ref<TableResult[]> = ref([])

onMounted(() => {
  fetchResults()
})


const fetchResults = async () => {
  axios
    .get(`${BASE_URL}${PATH.books}`, { params: { q: searchInput.value } }).then((response) => {
    console.log("response length= ", response.data.length);
    resulListStore.books = response.data
    // resultLists.value = response.data
  })
    .catch((error) => {
    console.log(error)
  })
}
</script>
