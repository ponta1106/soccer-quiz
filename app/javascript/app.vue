<template>
  <div id="app" class="d-flex flex-column min-vh-100">
    <TheHeader class="mb-auto"></TheHeader>
    <router-view></router-view>
    <TheFooter class="mt-auto"></TheFooter>
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
}
p {
  font-size: 2em;
  text-align: center;
}
</style>
