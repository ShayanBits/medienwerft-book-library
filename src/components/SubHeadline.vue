<template>
  <h3> {{subHeadline}} </h3>
</template>

<script lang="ts" setup>
const props = defineProps({
  subHeadline: {
    type: String,
    required: true
  }
})
</script>
