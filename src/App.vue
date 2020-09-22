<template>
  <div id="app">
    <div class="m-3 text-center">
      <img src="./assets/logo.png" title="Les carnets de Jo">
    </div>
    <div class="app__nav text-center">
      <b-nav align="center text-uppercase">
        <b-nav-item>
          Accueil
        </b-nav-item>
        <b-nav-item>
          Qui sommes nous ?
        </b-nav-item>
        <b-nav-item>
          Nos actions
        </b-nav-item>
        <b-nav-item>
          Nos outils
        </b-nav-item>
        <b-nav-item>
          Rejoignez-nous
        </b-nav-item>
        <b-nav-item>
          Contact
        </b-nav-item>
      </b-nav>
    </div>
    <div class="row">
      <div class="col-6">
        <div>
          Les carnets de Jo
        </div>
        <div>
          Association d'intérêt général dédiée à l'éducation par le sport !
        </div>
        <div>
          <div>
            # Apprendre
          </div>
          <div>
            # Jouer
          </div>
          <div>
            # Grandir
          </div>
        </div>
      </div>
      <div>
        <img src="./assets/pencil_case.png" title="Trousses et feutres">
      </div>
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
