<template>
  <section class="row filter-search">
    <form action="#" class="column">
      <label for="search">{{searchBoxTitle}}</label>
      <input type="text" id="search" :value="searchInput" @change="$emit('change:searchInput' , $event.target.value)" @input="$emit('update:searchInput' , $event.target.value)"/>
    </form>

    <form action="#" class="column column-33">
      <label for="by-publisher">{{filterBoxTitle}}</label>
      <select id="by-publisher" @change="$emit('change:selected-filter', $event.target.value)">
        <option v-for="(option, index) in options" :key="index"  :value="option">{{option}}</option>
      </select>
    </form>
  </section>
</template>


<script lang="ts" setup>
defineEmits(['update:searchInput', 'change:searchInput', 'update:selectedFilter', 'change:selected-filter'])
const props = defineProps({
  searchBoxTitle: {
    type: String,
    required: true
  },
  filterBoxTitle: {
    type: String,
    required: true
  },
  searchInput: {
    type: String,
    required: true
  },
  options: {
    type: Array,
    required: true
  }
})


</script>
