import { defineStore } from 'pinia'
import type { Book } from "../types/Book";

export const useFavoriteBooks = defineStore('favoriteBooks', () => {
  const books: Book[] = []
  return { books }
})
