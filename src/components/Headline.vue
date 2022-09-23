<template>
  <h2> {{headline}}</h2>
</template>

<script lang="ts" setup>
const props = defineProps({
  headline: {
    type: String,
    required: true
  }
})
</script>
