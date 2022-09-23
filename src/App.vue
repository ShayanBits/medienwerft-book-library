<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useFavoriteBooks } from "./stores/favorites";

const favoriteBooks = useFavoriteBooks();
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="row">
        <div class="column"><p class="logo">IT.Book.Library</p></div>
        <div class="column">
          <nav class="mainnav">
            <RouterLink to="/" class="mainnav-link">Home</RouterLink>
            <RouterLink to="/favorites" class="mainnav-link">Favorites <span class="mainnav-number">{{favoriteBooks.books.length}}</span> </RouterLink>
          </nav>
        </div>
      </div>
    </div>

  </header>

  <main class="container">
    <RouterView />
  </main>
</template>

<style scoped>


nav a.router-link-exact-active {
  color: var(--primary);
  border-bottom-color: var(--primary);
}

.header {
  background: #f4f5f6;
  padding-top: 25px;
  margin-bottom: 40px;
}

.logo {
  color: var(--secondary);
  font-weight: bold;
  font-size: 2.7rem;
}

.mainnav {
  display: flex;
  justify-content: flex-end;
}

.mainnav-link {
  margin: 0 10px;
  line-height: 4.7rem;
  color: var(--secondary);
  border-bottom: 3px solid transparent;
}

.mainnav-link:hover {
  color: var(--primary);
}

.mainnav-link.mainnav-link--active {
  color: var(--primary);
  border-bottom-color: var(--primary);
}

.mainnav-number {
  background-color: var(--primary);
  color: #f4f5f6;
  padding: 0 5px;
  border-radius: 50%;
}

</style>
