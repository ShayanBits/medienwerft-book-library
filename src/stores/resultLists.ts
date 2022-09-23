import { defineStore } from 'pinia'
import type {TableResult} from "../types/Table"

export const useResultListsStore = defineStore('resultLists', () => {
  const books: TableResult[] = []

  return { books }
})
