<template>
  <div id="app" class="app container-fluid">
    <div class="app__nav row sticky-top bg-primary" :class="{ 'shrinked': isShrinked }">
      <div class="col-4 h-100">
        <img src="./assets/logo.png" alt="Les Carnets de Jo" class="pl-5 h-100">
      </div>
      <b-nav align="center" class="col-8 text-center text-uppercase text-white m-auto">
        <b-nav-item>
          <a @click="goTo('section1')">
            Accueil
          </a>
        </b-nav-item>
        <b-nav-item>
          <a @click="goTo('section2')">
            Qui sommes-nous ?
          </a>
        </b-nav-item>
        <b-nav-item>
          <a @click="goTo('section2')">
            L'histoire
          </a>
        </b-nav-item>
        <b-nav-item>
          <a @click="goTo('section2')">
            L'équipe
          </a>
        </b-nav-item>
        <b-nav-item>
          <a @click="goTo('section3')">
            Nos actions
          </a>
        </b-nav-item>
        <b-nav-item>
          <a @click="goTo('section4')">
            Nos outils
          </a>
        </b-nav-item>
        <b-nav-item>
          <a @click="goTo('section5')">
            Rejoignez-nous
          </a>
        </b-nav-item>
        <b-nav-item>
          <a @click="goTo('section6')">
            Contact
          </a>
        </b-nav-item>
      </b-nav>
    </div>
    <section class="app__section app__section__odd row" ref="section1">
      <div class="col-6 d-flex">
        <div class="w-50 text-center m-auto">
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
      <div class="col-6">
        <img src="./assets/pencil_case.png" alt="Trousses et feutres" width="843">
      </div>
    </section>
    <section class="app__section app__section__even row bg-warning justify-content-md-center" ref="section2">
      <div class="col-6">
        <div class="app__section__title font-weight-bold mb-5 text-center">
          Qui sommes-nous ?
        </div>
        <div class="app__section__content mt-3">
          Convaincus que le sport est source d'inspiration et d’épanouissement de la jeunesse,
          Les Carnets de Jo est une association qui met en place des actions et développe des outils pédagogiques
          et ludiques autour du sport pour favoriser la réussite éducative et l’insertion sociale des jeunes,
          particulièrement dans les quartiers prioritaires de la politique de la ville.<br><br>
          Grâce à des bénévoles d’horizons différents et à un réseau d’athlètes français qui ont en commun
          la passion du sport et la conviction que le sport et ses valeurs sont de formidables leviers pour
          renforcer l’égalité des chances et la cohésion sociale, l'association a pour vocation de développer
          l'impact éducatif du sport et s’adresse à la jeunesse pour lui donner envie de bouger mais aussi
          d’apprendre, de créer, de s’éveiller et de grandir grâce au sport.<br><br>
          Conscients que le sport ne peut pas tout résoudre, qu'il n'est ni magique pour la société,
          ni éducatif par nature, nous faisons le pari qu'avec de l'énergie à revendre, un réseau de professionnels
          et d'experts, des outils innovants et des expérimentations sur le terrain, nous participerons à révéler
          son potentiel éducatif comme moyen au service de l'éducation de demain.
        </div>
      </div>
    </section>
    <section class="app__section app__section__odd row">
      <div>
        L'histoire
      </div>
    </section>
    <section class="app__section app__section__even row">
      <div>
        L'équipe
      </div>
    </section>
    <section class="app__section app__section__odd row text-center" ref="section3">
      <div class="col-12">
        <div class="app__section__title text-uppercase text-primary">
          Demander une intervention
        </div>
        <div class="app__section__subtitle font-weight-bold">
          <div>
            Une idée vous trotte dans la tête...
          </div>
          <div>
            L'envie de vous lancer dans un projet d'éducation par le sport,
          </div>
          <div>
            mais vous ne savez pas par où commencer ?
          </div>
        </div>
        <div class="app__section__cards__contribution mt-3">
          <b-card-group deck>
            <b-card
                title="Je suis une école"
                img-src="./assets/school.png"
                img-alt="Ecole"
                img-top
                body-class="py-5 d-flex bg-dark text-white"
            ></b-card>
            <b-card
                title="Je suis une collectivité locale"
                img-src="./assets/city.png"
                img-alt="City"
                img-top
                body-class="py-5 d-flex bg-primary text-white"
            ></b-card>
            <b-card
                title="Je suis un club sportif"
                img-src="./assets/sport.png"
                img-alt="Sport"
                img-top
                body-class="py-5 d-flex bg-danger text-white"
            ></b-card>
            <b-card
                title="Je suis une association"
                img-src="./assets/association.png"
                img-alt="Ecole"
                img-top
                body-class="py-5 d-flex bg-dark text-white"
            ></b-card>
            <b-card
                title="Je suis une bibliothèque"
                img-src="./assets/library.png"
                img-alt="Ecole"
                img-top
                body-class="py-5 d-flex bg-primary text-white"
            ></b-card>
            <b-card
                title="Je suis un centre de loisir"
                img-src="./assets/entertainment.png"
                img-alt="Ecole"
                img-top
                body-class="py-5 d-flex bg-danger text-white"
            ></b-card>
          </b-card-group>
        </div>
      </div>
    </section>
    <section class="app__section app__section__even row justify-content-md-center bg-warning" ref="section4">
      <div class="col-6 text-center">
        <div class="app__section__image mb-5">
          <font-awesome-icon icon="quote-right" size="10x"></font-awesome-icon>
        </div>
        <div class="app__section__content font-weight-bold mt-3">
          « L'éducation est une arme puissante pour faire évoluer les mentalités et transcender les différences,
          et le sport est une source d'inspiration, de dépassement, de tolérance et d'apprentissage
          du respect de la jeunesse.<br><br>
          Ces deux éléments participent à créer
          une société plus juste et fraternelle.»
        </div>
        <div class="app__section__author font-italic mt-3 font-weight-lighter">
          Nelson Mandela
        </div>
      </div>
    </section>
    <section class="app__section app__section__odd row" ref="section5">
      <div class="col-12">
        <div class="app__section__title text-uppercase text-center text-primary">
          Nous soutenir
        </div>
        <div class="app__section__cards__support mt-3">
          <b-card-group deck>
            <b-card
                title="Je parraine des ateliers"
                img-src="./assets/hand.png"
                img-alt="Parrainage"
                img-top
                body-class="py-5 bg-dark text-light text-center">
              <b-card-text>
                Et j'agis positivement sur la vie locale!
                <a href="" class="stretched-link"></a>
              </b-card-text>
            </b-card>
            <b-card
                title="J'adhère"
                img-src="./assets/five.png"
                img-alt="Adhésion"
                img-top
                body-class="py-5 bg-primary text-light text-center">
              <b-card-text>
                Et je participe à la vie de l'association!
                <a href="https://www.helloasso.com/associations/les-carnets-de-jo" target="_blank" class="stretched-link"></a>
              </b-card-text>
            </b-card>
            <b-card
                title="Je contribue"
                img-src="./assets/family.png"
                img-alt="Temps"
                img-top
                body-class="py-5 bg-danger text-light text-center">
              <b-card-text>
                Et j'anime des ateliers ou j'apporte mon expertise pédagogique.
                <a href="" class="stretched-link"></a>
              </b-card-text>
            </b-card>
            <b-card
                title="Je fais un don"
                img-src="./assets/family.png"
                img-alt="Don"
                img-top
                body-class="py-5 bg-dark text-light text-center">
              <b-card-text>
                Et je permets le développement de l'association
                <a href="https://www.helloasso.com/associations/les-carnets-de-jo" target="_blank" class="stretched-link"></a>
              </b-card-text>
            </b-card>
          </b-card-group>
        </div>
      </div>
    </section>
    <section class="app__section app__section__even row">
      <div class="col-6">
        <img src="./assets/basket.png" alt="Baskets" class="w-100">
      </div>
      <div class="col-6">
        <div class="app__section__title text-uppercase text-primary">
          Nous contacter
        </div>
        <b-form>
          <b-form-group id="input-group-2" label-for="input-2">
            <b-form-input
                id="input-2"
                v-model="form.name"
                required
                placeholder="Nom *"
            ></b-form-input>
          </b-form-group>
          <b-form-group id="input-group-1" label-for="input-1">
            <b-form-input
                id="input-1"
                v-model="form.email"
                type="email"
                required
                placeholder="Adresse email *"
            ></b-form-input>
          </b-form-group>
          <b-form-group id="input-group-3" label-for="input-3">
            <b-form-input
                id="input-3"
                v-model="form.object"
                required
                placeholder="Objet *"
            ></b-form-input>
          </b-form-group>
          <b-form-group>
            <b-form-textarea
                id="textarea"
                v-model="form.text"
                placeholder="Message"
                rows="3"
                max-rows="6"
            ></b-form-textarea>
          </b-form-group>
          <b-button type="submit" variant="primary">
            Envoyer
          </b-button>
        </b-form>
      </div>
    </section>
    <footer class="app__footer row bg-warning text-center mt-5 p-3">
      <div class="col-4">
        <img src="./assets/logo-footer.png" alt="Jo" width="50" class="app__footer__logo">
        LES CARNETS DE JO<br><br>
        6 rue Jean-Baptiste Dumay<br>
        75020 PARIS<br>
        FRANCE<br><br>
        lescarnetsdejo@gmail.com
      </div>
      <div class="col-4">
        ©2020 par <span class="font-italic">Les Carnets de Jo</span>
      </div>
      <div class="col-4">
        <a href="https://www.facebook.com/CollectionJo/" target="_blank">
          <font-awesome-icon :icon="['fab', 'facebook-square']" size="2x"></font-awesome-icon>
        </a>
        <a href="https://www.instagram.com/lesincroyablesrencontresdejo/" target="_blank" class="ml-2">
          <font-awesome-icon :icon="['fab', 'instagram-square']" size="2x"></font-awesome-icon>
        </a>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      isShrinked: false,
      form: {
        email: '',
        name: '',
        object: '',
        text: '',
        food: null,
        checked: []
      }
    }
  },
  methods: {
    handleScroll () {
      this.$set(this, 'isShrinked', window.scrollY > 40)
    },
    goTo(refName) {
      const element = this.$refs[refName]
      element.scrollIntoView({ behavior: 'smooth' })
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="scss" scoped>
.app {

  &__nav {
    height: 150px;

    .nav-link {
      color: white;
    }

    &.shrinked {
      height: 75px;

      .nav-link {
        font-size: smaller;
      }
    }
  }

  &__section {
    padding: 6rem;

    &__title {
      font-family: 'Mouse Memoirs', sans-serif;
      font-size: 5rem;
    }

    &__cards__contribution .card-deck .card {
      border: none;
      border-radius: unset;
      margin: 0;
      padding: 15px;

      img {
        border-radius: unset;
      }

      .card-title {
        margin: auto;
      }
    }

    &__cards__support .card-deck .card {
      border: none;
      border-radius: unset;

      img {
        border-radius: unset;
      }

      .card-title {
        margin: auto;
      }
    }
  }

  &__footer {
    &__logo {
      left: 30px;
      position: absolute;
      top: 59px
    }

    a {
      color: #212529;
    }
  }
}
</style>
