<template>
    <section class="row">
      <div class="column">
        <table>
          <thead>
          <tr>
            <th class="first-col">&nbsp;</th>
            <th>Title</th>
            <th>ISBN</th>
            <th>Author</th>
            <th>Publisher</th>
            <th>&nbsp;</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(tableRow, index) in tableData" :key="index">
            <td>
              <button class="button button-clear fav-btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="fav"
                >
                  <path
                    d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"
                  />
                </svg>
              </button>
            </td>
            <td>{{ tableRow.title }}</td>
            <td>{{tableRow.isbn}}</td>
            <td>{{tableRow.author}}</td>
            <td>{{tableRow.publisher}}</td>
            <td>
              <RouterLink :to="{name: 'detail', params: {id:tableRow.id }}" >
                <button class="button">Detail</button>
              </RouterLink>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </section>
</template>

<script lang="ts" setup>
import { TableResult } from "../types/Table";
import { PropType} from "vue";

const props = defineProps({
  tableData :  {
    type: Array as PropType<TableResult[]>,
  }
})
</script>


<style scoped>
.fav-btn {
  padding: 0;
  margin-bottom: -45px;
}

.fav {
  width: 100%;
  height: 100%;
}

.first-col {
  width: 5%;
}

/*TODO: this should be done automatically*/
th {
  font-weight: bold
}
</style>
