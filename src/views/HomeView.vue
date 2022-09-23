<template>
    <Headline :headline="`${resulListStore.books.length} Books displayed`" />
    <SearchBar v-model:search-input="searchInput"
               search-box-title="Search by Title"
               filter-box-title="Filter by Publisher"
               :options="options"
               @change:searchInput="fetchResults(searchInput)"
               @change:selected-filter="fetchResults($event)"
    />
    <ResultsTable />
</template>


<script setup lang="ts">
import Headline from '../components/Headline.vue'
import SearchBar from '../components/SearchBar.vue'
import ResultsTable from '../components/ResultsTable.vue'
import { ref, onMounted, Ref } from "vue";
import axios from "axios";
import { BASE_URL, PATH } from "../constants/api.constants";
import { useResultListsStore } from "../stores/resultLists";


const options : string[] = ['-', 'Leanpub', 'McGraw-Hill']
const searchInput = ref('')
const selectedFilter = ref('')
const resulListStore = useResultListsStore()


onMounted(() => {
  fetchResults()
})


const fetchResults = async (searchParam?:string) => {
  axios
    .get(`${BASE_URL}${PATH.books}`, { params: { q: searchParam } }).then((response) => {
    console.log("response length= ", response.data.length);
    resulListStore.books = response.data
  })
    .catch((error) => {
    console.log(error)
  })
}
</script>
