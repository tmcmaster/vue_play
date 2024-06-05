<script setup>
import {RouterLink, RouterView} from 'vue-router'
import CreatedWith from './components/about/CreatedWith.vue'
import PageLayout from '@/components/layout/PageLayout.vue'

const pageTheme = {
  header: {},
  footer: {
    centerFlex: "3"
  }
};

</script>

<template>
  <PageLayout :fullScreen="true" :theme="pageTheme">
      <template v-slot:headerLeading>
        <img alt="Vue logo" src="@/assets/logo.svg"/>
      </template>
      <template v-slot:header>
        <h2>Posts and Todos</h2>
      </template>
      <template v-slot:headerTrailing>
      </template>
      <template v-slot:nav>
        <nav>
          <RouterLink to="/posts">Posts</RouterLink>
          <RouterLink to="/authors">Authors</RouterLink>
          <RouterLink to="/todos">Todos</RouterLink>
          <RouterLink to="/">About</RouterLink>
        </nav>
      </template>
      <template v-slot:mainBody>
        <RouterView/>
      </template>
      <template v-slot:footer>
        <CreatedWith/>
      </template>
    </PageLayout>
</template>

<style scoped>


img {
  width: 80px;
  height: 80px;
  padding: 16px;
  margin: 0;
}

/**
nav {
  border-bottom: solid grey 1px;
}
**/

nav > * {
  padding-left: 0.5rem;
}

nav > :first-child {
  padding-left:0;
}

</style>
