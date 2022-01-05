<template>
  <div
    id="app"
    class="d-flex flex-column min-vh-100"
  >
    <TheHeader class="mb-auto" />
    <router-view />
    <TheFooter class="mt-auto" />
  </div>
</template>

<script>
import TheHeader from './components/TheHeader'
import TheFooter from './components/TheFooter'
export default {
  name: 'TopIndex',
  components: {
    TheHeader,
    TheFooter
  }
}
</script>

<style>
  #app {
    color: #555;
    min-height: 100vh;
    font-family: 'Kosugi Maru', sans-serif;
    background-color: #e5e2df;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .2s;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

</style>
