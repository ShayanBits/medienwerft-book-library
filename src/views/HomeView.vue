<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import Headline from '@/components/Headline.vue'
import SearchBar from '@/components/SearchBar.vue'
import ResultsTable from '@/components/ResultsTable.vue'
import { ref } from "vue";
import type { TableResult } from "../types/Table";


const options : string[] = ['-', 'Leanpub', 'McGraw-Hill']
const searchInput = ref('')
const selectedFilter = ref('')

const resultLists: TableResult[] = [
  {
    title: 'The Lean Startup',
    ISBN: '978-0-7352-1501-7',
    author: 'Eric Ries',
    publisher: 'McGraw-Hill',
  },
  {
    title: 'Book2',
    ISBN: '978-0-7352-1501-7',
    author: 'John Doe',
    publisher: 'Axle S.',
  }
]

const fetchResults = () => {
  console.log('fetching results')
}

</script>

<template>
  <main class="container">
    <Headline headline="2 Books displayed" />
    <SearchBar v-model:search-input="searchInput" v-model:selected-filter="selectedFilter" search-box-title="Search by Title" filter-box-title="Filter by Publisher" :options="options"/>
    <ResultsTable :table-data="resultLists" />
  </main>
</template>
