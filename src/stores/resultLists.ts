import { defineStore } from 'pinia'
import type { Book } from "../types/Book";

export const useResultListsStore = defineStore('resultLists', () => {
  const books: Book[] = []

  return { books }
})
