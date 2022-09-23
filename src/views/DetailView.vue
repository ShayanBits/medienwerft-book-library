<template>
  <Headline :headline="detailInfo.title" />
  <SubHeadline :subHeadline="detailInfo.subtitle" />
  <section class="row">
    <div class="column column-67">
      <h3>Abstract</h3>
      <p>
        {{detailInfo.abstract}}
      </p>

      <h4>Details</h4>
      <ul>
        <li><strong>Author:</strong> {{detailInfo.author}}</li>
        <li><strong>Publisher:</strong> {{detailInfo.publisher}}</li>
        <li><strong>Pages:</strong> {{detailInfo.numPages}}</li>
      </ul>

      <button
        class="button button-outline"
        @click="$router.back()"
      >
        Back
      </button>
    </div>
    <div class="column column-33">
      <img :src="detailInfo.cover" alt="" />
    </div>
  </section>
</template>

<script lang="ts" setup>
import { onBeforeMount, defineProps, reactive } from "vue";
import axios from "axios";
import { BASE_URL, PATH } from "../constants/api.constants";
import type { Book } from "../types/Book";
import Headline from "../components/Headline.vue";
import SubHeadline from "../components/SubHeadline.vue";

const props = defineProps({
  id: {
    type: String,
    required: true
  }
})

const detailInfo : Book= reactive({} as Book)

onBeforeMount(() => {
  axios.get(`${BASE_URL}${PATH.books}/${props.id}`)
    .then(response => {
      Object.assign(detailInfo, response.data)
    })
    .catch(error => {
      console.log(error)
    })
})
</script>
