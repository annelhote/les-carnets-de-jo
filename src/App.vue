<template>
  <div id="app">
    <div class="text-center">
      <img src="./assets/logo.png" title="Les carnets de Jo">
    </div>
    <div class="app__nav text-center">
      <b-nav align="center">
        <b-nav-item>Accueil</b-nav-item>
        <b-nav-item>Qui sommes nous ?</b-nav-item>
        <b-nav-item>Nos actions</b-nav-item>
        <b-nav-item>Nos outils</b-nav-item>
        <b-nav-item>Rejoignez-nous</b-nav-item>
        <b-nav-item>Contact</b-nav-item>
      </b-nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style scoped>
.app__nav {
  background-color: #fdc500;
}
</style>
