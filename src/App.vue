<script setup>
import { RouterLink, RouterView } from 'vue-router'
import CreatedWith from './components/CreatedWith.vue'
</script>

<template>
  <main>
    <header>
      <img alt="Vue logo" src="@/assets/logo.svg"/>
      <nav>
        <RouterLink to="/posts">Posts</RouterLink>
        <RouterLink to="/authors">Authors</RouterLink>
        <RouterLink to="/">About</RouterLink>
      </nav>
    </header>
    <hr/>
    <article>
     <div>
       <RouterView />
     </div>
    </article>
    <hr/>
    <footer>
      <CreatedWith />
    </footer>
  </main>
</template>

<style scoped>
body {
  margin: 0;
  padding: 0;
}
main {
  display: flex;
  flex-direction: column;
  height: 100vh;
  min-height: 100vh;
  max-height: 100vh;
  width: 100vw;
  min-width: 100vw;
  max-width: 100vw;
  box-sizing: border-box;
}

header {
  height: 130px;
  width: 100%;
  line-height: 1.5;
  background: white;
  display: flex;
  flex-direction: column;
  place-items: center;
}

header img {
  width: 80px;
  height: 80px;
  padding: 16px;
  margin: 0;
}

nav {
  width: 100%;
  min-width: 100%;
  height: 30px;
  font-size: 12px;
  text-align: center;
  background: white;
  margin: 0;
  padding: 0;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}


article {
  box-sizing: border-box;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
 flex: 100;
}

article > div {
  height: 100%;
  min-height: 100%;
  width: 600px;
  max-width: 600px;
  display: inline-block;
}

article > * {
  display: inline-block;
  width: 600px;
  max-width: 600px;
}

footer {
  height: 80px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

footer > * {
  max-width: 600px;
}

</style>
