<script>
import PageHeader from './PageHeader.vue';
import PageFooter from './PageFooter.vue';
import PageBody from './PageBody.vue';
import PageNavBar from "@/components/layout/PageNavBar.vue";

export default {
  name: "PageLayout",
  components: {
    PageNavBar,
    PageHeader,
    PageFooter,
    PageBody
  },
  props: {
    theme: {
      type: Object,
      default: () => ({
        header: {
          leftFlex: "1",
          centerFlex: "2",
          rightFlex: "1"
        },
        footer: {
          leftFlex: "1",
          centerFlex: "2",
          rightFlex: "1"
        }
      })
    },
    fullScreen: { // Define the prop for controlling the width
      type: Boolean,
      default: false
    }
  }
};
</script>

<template>
  <main :class="{ 'full-screen': fullScreen }">
    <article>
      <div class="container">
        <PageHeader class="header"
                    :leftFlex="theme.header.leftFlex"
                    :centerFlex="theme.header.centerFlex"
                    :rightFlex="theme.header.rightFlex"
        >
          <template v-slot:left>
            <slot name="headerLeading"></slot>
          </template>
          <template v-slot:center>
            <slot name="header"></slot>
          </template>
          <template v-slot:right>
            <slot name="headerTrailing"></slot>
          </template>
        </PageHeader>
        <PageNavBar class="nav">
          <slot name="nav"></slot>
        </PageNavBar>
        <div class="main">
          <PageBody>
            <slot name="mainBody"></slot>
          </PageBody>
        </div>
        <PageFooter class="footer"
                    :leftFlex="theme.footer.leftFlex"
                    :centerFlex="theme.footer.centerFlex"
                    :rightFlex="theme.footer.rightFlex"
        >
          <template v-slot:left>
            <slot name="footerLeading"></slot>
          </template>
          <template v-slot:center>
            <slot name="footer"></slot>
          </template>
          <template v-slot:right>
            <slot name="footerTrailing"></slot>
          </template>
        </PageFooter>
      </div>
    </article>
  </main>
</template>

<style scoped>

.full-screen {
  width: 100vw;
  min-width: 100vw;
  max-width: 100vw;
  height: 100vh;
  min-height: 100vh;
  max-height: 100vh;
}

main {
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  height: 100%;
  min-height: 100%;
  max-height: 100%;
  display: flex;
  box-sizing: border-box;
  padding: 0.5rem;
}

article {
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: auto;
  width: 100%;
  max-width: 100%;
  min-width: 100%;
  height: 100%;
  min-height: 100%;
  max-height: 100%;
  box-sizing: border-box;
  padding: 0.5rem;
  background: #f8f8f8;
}

main.full-screen > article {
  width: 600px;
  max-width: 600px;
  min-width: 600px;
}

.container {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  overflow-y: scroll;
}

.main {
  display: flex;
  flex-direction: column;
  align-self: stretch;
  height: 100%;
  width: 100%;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.footer {
  display: flex;
  padding: 10px;
}

.nav {
  display: flex;
  padding-bottom: 10px;
}

</style>
