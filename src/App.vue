<template>
  <div id="app" class="app">
    <div class="app__nav row">
      <div class="col-4">
        <img src="./assets/logo.jpg" title="Les carnets de Jo" width="500" class="pl-5">
      </div>
      <b-nav align="center" class="text-center text-uppercase col-8 bg-primary text-white m-auto">
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
    <section class="app__section app__section1 row no-gutters" ref="section1">
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
      <div>
        <img src="./assets/pencil_case.png" title="Trousses et feutres" width="843">
      </div>
    </section>
    <section class="app__section app__section2 bg-warning" ref="section2">
      <div>
        <div class="app__section2__title font-weight-bold">
          Qui sommes-nous ?
        </div>
        <div class="app__section2__content mt-3">
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
    <section>
      <div>
        L'histoire
      </div>
      ...
    </section>
    <section>
      <div>
        L'équipe
      </div>
      ...
    </section>
    <section class="app__section app__section3 text-center" ref="section3">
      <div class="app__section3__title title text-uppercase text-primary">
        Demander une intervention
      </div>
      <div class="app__section3__subtitle font-weight-bold">
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
      <div class="app__section3__cards mt-3">
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
    </section>
    <section class="app__section app__section4 bg-warning text-center" ref="section4">
      <div class="app__section4__image">
        QUOTE
      </div>
      <div class="app__section4__content font-weight-bold mt-3">
        « L'éducation est une arme puissante pour faire évoluer les mentalités et transcender les différences,
        et le sport est une source d'inspiration, de dépassement, de tolérance et d'apprentissage
        du respect de la jeunesse.<br><br>
        Ces deux éléments participent à créer
        une société plus juste et fraternelle.»
      </div>
      <div class="app__section4__author font-italic mt-3 font-weight-lighter">
        Nelson Mandela
      </div>
    </section>
    <section class="app__section app__section5" ref="section5">
      <div class="app__section5__title title text-uppercase text-center text-primary">
        Nous soutenir
      </div>
      <div class="app__section5__cards mt-3">
        <b-card-group deck>
          <b-card
              title="Je parraine des ateliers"
              img-src="./assets/hand.png"
              img-alt="Parrainage"
              img-top
              body-class="py-5 bg-dark text-light text-center">
            <b-card-text>
              Et j'agis positivement sur la vie locale!
            </b-card-text>
            <b-button href="#" variant="light" pill>
              Nous contacter
            </b-button>
          </b-card>
          <b-card
              title="J'adhère"
              img-src="./assets/five.png"
              img-alt="Adhésion"
              img-top
              body-class="py-5 bg-primary text-light text-center">
            <b-card-text>
              Et je participe à la vie de l'association!
            </b-card-text>
            <b-button href="https://www.helloasso.com/associations/les-carnets-de-jo" variant="light" pill target="_blank">
              Adhérer
            </b-button>
          </b-card>
          <b-card
              title="Je contribue"
              img-src="./assets/family.png"
              img-alt="Temps"
              img-top
              body-class="py-5 bg-danger text-light text-center">
            <b-card-text>
              Et j'anime des ateliers ou j'apporte mon expertise pédagogique.
            </b-card-text>
            <b-button href="#" variant="light" pill>
              Nous contacter
            </b-button>
          </b-card>
          <b-card
              title="Je fais un don"
              img-src="./assets/family.png"
              img-alt="Don"
              img-top
              body-class="py-5 bg-dark text-light text-center">
            <b-card-text>
              Et je permets le développement de l'association
            </b-card-text>
            <b-button href="https://www.helloasso.com/associations/les-carnets-de-jo" variant="light" pill target="_blank">
              Donner
            </b-button>
          </b-card>
        </b-card-group>
      </div>
    </section>
    <section class="row">
      NOUS contacter
      <div class="col-6">
        <img src="./assets/basket.png" title="Baskets" width="843">
      </div>
      <div class="col-6">
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
                v-model="text"
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
    <footer class="bg-warning text-center mt-5 p-3 row">
      <div class="col-4">
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
          Facebook
        </a>
        <a href="https://www.instagram.com/les_rencontres_de_jo/" target="_blank">
          Instagram
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
      form: {
        email: '',
        name: '',
        object: '',
        food: null,
        checked: []
      }
    }
  },
  methods: {
    goTo(refName) {
      const element = this.$refs[refName]
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
}
</script>

<style lang="scss" scoped>
.app {
  .title {
    font-size: 5rem;
  }

  &__nav {
    .nav-link {
      color: white;
    }
  }

  &__section {
    padding: 5rem;

    &2 {
      padding-left: 30rem;
      padding-right: 30rem;

      &__title {
        font-size: 40px;
      }
    }

    &3 {
      &__cards .card-deck .card {
        border: none;
        border-radius: unset;
        margin: 0;
        // max-width: 25%;
        // min-width: 25%;
        padding: 15px;

        img {
          border-radius: unset;
        }

        .card-title {
          margin: auto;
        }
      }
    }

    &4 {
      padding-left: 40rem;
      padding-right: 40rem;
    }

    &5 {
      &__cards .card-deck .card {
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

    &6 {
      &__address {
        padding-left: 150px;
      }
    }
  }
}
</style>
