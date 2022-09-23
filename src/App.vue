<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="row">
        <div class="column"><p class="logo">IT.Book.Library</p></div>
        <div class="column">
          <nav class="mainnav">
            <RouterLink to="/" class="mainnav-link">Home</RouterLink>
            <RouterLink to="/detail" class="mainnav-link ">Detail</RouterLink>
            <RouterLink to="/favorites" class="mainnav-link">Favorites <span class="mainnav-number">2</span> </RouterLink>
          </nav>
        </div>
      </div>
    </div>
<!--    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />-->

<!--    <div class="wrapper">-->
<!--      <HelloWorld msg="You did it!" />-->

<!--    </div>-->
  </header>

  <RouterView />
</template>

<style scoped>


nav a.router-link-exact-active {
  color: var(--primary);
  border-bottom-color: var(--primary);
}

/*nav a.router-link-exact-active:hover {*/
/*  color: var(--primary);*/
/*}*/

/*nav a {*/
/*  display: inline-block;*/
/*  padding: 0 1rem;*/
/*  border-left: 1px solid var(--color-border);*/
/*}*/

/*nav a:first-of-type {*/
/*  border: 0;*/
/*}*/

/*@media (min-width: 1024px) {*/
/*  header {*/
/*    display: flex;*/
/*    place-items: center;*/
/*    padding-right: calc(var(--section-gap) / 2);*/
/*  }*/

/*  .logo {*/
/*    margin: 0 2rem 0 0;*/
/*  }*/

/*  header .wrapper {*/
/*    display: flex;*/
/*    place-items: flex-start;*/
/*    flex-wrap: wrap;*/
/*  }*/

/*  nav {*/
/*    text-align: left;*/
/*    margin-left: -1rem;*/
/*    font-size: 1rem;*/

/*    padding: 1rem 0;*/
/*    margin-top: 1rem;*/
/*  }*/
/*}*/


/* book-app styles*/



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

main .fav-btn {
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

</style>
