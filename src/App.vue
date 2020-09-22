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
    <div class="app_section1 row m-5">
      <div class="col-6 d-flex">
        <div class="w-50 text-center m-auto">
          <div class="app__section1__title text-uppercase">
            Les carnets de Jo
          </div>
          <div class="font-weight-bold">
            Association d'intérêt général dédiée à l'éducation par le sport !
          </div>
          <div class="text-uppercase font-weight-bold mt-3">
            <div>
              #Apprendre
            </div>
            <div>
              #Jouer
            </div>
            <div>
              #Grandir
            </div>
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

<style lang="scss" scoped>
.app {
  &__nav {
    background-color: #fdc500;

    .nav-link {
      color: black;
    }
  }

  &__section1__title {
    color: #00759b;
    font-size: 5rem;
  }
}
</style>
