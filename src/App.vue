<template>
  <div id="app" class="app container-fluid">
    <div class="app__nav row sticky-top bg-primary" :class="{ 'shrinked': isShrinked }">
      <div class="col-4 col-sm-6 h-100">
        <img src="./assets/logo.png" alt="Les Carnets de Jo" class="pl-5 h-75">
        <div class="text-white app__nav__title">
          Association d'intérêt général dédiée à l'éducation par le sport !
        </div>
      </div>
      <div class="col-sm-6 d-block d-md-none text-white text-right">
        <font-awesome-icon icon="bars"></font-awesome-icon>
      </div>
      <div class="col-8 d-none d-md-block">
        <b-nav align="center" class="text-center text-uppercase text-white m-auto">
          <b-nav-item>
            <a @click="goTo('section_welcome')">
              Accueil
            </a>
          </b-nav-item>
          <b-nav-item>
            <a @click="goTo('section_why')">
              Pourquoi ?
            </a>
          </b-nav-item>
          <b-nav-item>
            <a @click="goTo('section_history')">
              L'histoire
            </a>
          </b-nav-item>
          <b-nav-item>
            <a @click="goTo('section_team')">
              L'équipe
            </a>
          </b-nav-item>
          <b-nav-item>
            <a @click="goTo('section_actions')">
              Nos actions
            </a>
          </b-nav-item>
          <b-nav-item>
            <a @click="goTo('section_intervention')">
              Demander une intervention
            </a>
          </b-nav-item>
          <b-nav-item>
            <a @click="goTo('section_join')">
              Nous soutenir
            </a>
          </b-nav-item>
          <b-nav-item>
            <a @click="goTo('section_contact')">
              Nous contacter
            </a>
          </b-nav-item>
        </b-nav>
      </div>
    </div>
    <section class="app__section app__section__odd row p-0" ref="section_welcome">
      <div class="text-primary text-center w-100 my-5 font-weight-bolder">
        <div class="h2">
          Association d'intérêt général dédiée à l'éducation par le sport !
        </div>
        <div class="text-uppercase">
          <span>
            #Apprendre
          </span>
          <span>
            #Jouer
          </span>
          <span>
            #Grandir
          </span>
        </div>
      </div>
      <div class="w-100">
        <img src="./assets/pencil_case.png" alt="Trousses et feutres" class="w-100">
      </div>
    </section>
    <section class="app__section app__section__even row bg-warning justify-content-center text-center" ref="section_why">
      <div class="col-8 col-sm-12">
        <div class="app__section__title text-uppercase text-white">
          Pourquoi ?
        </div>
        <div class="app__section__content mt-3 text-center">
          Convaincus que le sport est source d'inspiration et d’épanouissement de la jeunesse,
          Les Carnets de Jo est une association qui met en place des actions et développe des outils pédagogiques
          et ludiques autour du sport pour favoriser la réussite éducative et l’insertion sociale des jeunes,
          particulièrement dans les quartiers prioritaires de la politique de la ville.
          <br><br>
          Grâce à des bénévoles d’horizons différents et à un réseau d’athlètes français qui ont en commun
          la passion du sport et la conviction que le sport et ses valeurs sont de formidables leviers pour
          renforcer l’égalité des chances et la cohésion sociale, l'association a pour vocation de développer
          l'impact éducatif du sport et s’adresse à la jeunesse pour lui donner envie de bouger mais aussi
          d’apprendre, de créer, de s’éveiller et de grandir grâce au sport.
          <br><br>
          Conscients que le sport ne peut pas tout résoudre, qu'il n'est ni magique pour la société, ni éducatif par
          nature, nous faisons le pari qu'avec de l'énergie positive, un réseau expérimenté, des outils innovants et des
          expérimentations sur le terrain, nous participerons à révéler son potentiel éducatif comme moyen au service de
          l'éducation de demain.
          <h3 class="font-italic text-white">
            <font-awesome-icon icon="quote-left"></font-awesome-icon>
            L'éducation est une arme puissante pour faire évoluer les mentalités et transcender les différences,
            et le sport est une source d'inspiration, de dépassement, de tolérance et d'apprentissage
            du respect de la jeunesse.<br><br>
            Ces deux éléments participent à créer une société plus juste et fraternelle.
            <font-awesome-icon icon="quote-right"></font-awesome-icon>
          </h3>
          <hr style="width:50px" class="text-black">
          <div class="mt-3">
            Nelson Mandela
          </div>
        </div>
      </div>
    </section>
    <section class="app__section app__section__odd row justify-content-center text-center" ref="section_history">
      <div class="col-8 col-sm-12">
        <div class="app__section__title text-uppercase text-primary text-center">
          L'histoire
        </div>
        <div class="mt-3">
          Astrid GUYART, escrimeuse olympique, vice-championne du monde de fleuret, souhaitait offrir un livre racontant
          une belle histoire de sport à sa nièce. Ne le trouvant pas en librairie, elle décide de l’écrire elle-même...
        </div>
        <div class="mb-3">
          C’est ainsi que la collection de livres jeunesse « Les incroyables rencontres de Jo » est née.
          <h3 class="d-inline text-danger font-weight-bold">
            Chaque tome allie le plaisir des premières lectures avec la découverte d’un grand champion français et
            d’une valeur du sport.
          </h3>
          <br><br>
          L’enthousiasme rencontré auprès des lecteurs et les sollicitations de plusieurs enseignants lui donnent
          l’envie de mettre plus largement l’univers du sport, de l’olympisme et de ses valeurs au service de
          l’épanouissement et de la réussite des enfants. Elle fonde « Les Carnets de Jo », association d’intérêt
          général dédiée à l’éducation par le sport.
          <br><br>
          Si l'objectif initial de la collection "Les Incroyables Rencontres de Jo" était de donner envie aux enfants
          de s'épanouir et de grandir grâce à la pratique d'une discipline sportive, l'objectif de l'association "Les
          Carnets de Jo" est de mettre le pouvoir du sport au service de la réussite éducative de la prochaine
          génération.
        </div>
        <div>
          <img src="./assets/books.png" class="w-100 px-5">
        </div>
      </div>
    </section>
    <section class="app__section app__section__even bg-warning row justify-content-center" ref="section_team">
      <div class="col-8 col-sm-12">
        <div class="app__section__title text-uppercase text-light text-center">
          L'équipe
        </div>
        <div class="row text-center justify-content-center mt-3">
          <div class="col-6">
            <img src="./assets/astrid_guyart.png" alt="Astrid Guyard" class="rounded-circle" width="250">
            <div class="mt-3">
              <h3 class="m-0 font-weight-bold text-white">
                Astrid GUYART
              </h3>
              <div class="font-weight-bold text-uppercase text-white">
                Présidente et co-fondatrice de l'association
              </div>
              <div class="mt-2">
                Escrimeuse olympique multi-médaillée en championnats du Monde et championnats d'Europe, Astrid est
                ingénieure dans l'industrie aérospatiale, auteure de la collection jeunesse "Les Incroyables Rencontres
                de Jo" et ambassadrice Education du Comité National Olympique et Sportif Français (CNOSF). Engagée pour
                la place et les droits des athlètes, elle est également membre des commissions des athlètes de Paris
                2024 et du CNOSF, co-présidente du Comité des Sportifs de de l’Agence Française de Lutte contre le
                Dopage (AFLD) et vice-présidente de l'Association des Olympiens Français (AOF).
              </div>
            </div>
          </div>
          <div class="col-6">
            <img src="./assets/julie_lavet.png" alt="Julie Lavet" class="rounded-circle" width="250">
            <div class="mt-3">
              <h3 class="m-0 font-weight-bold text-white">
                Julie LAVET
              </h3>
              <div class="font-weight-bold text-uppercase text-white">
                Trésorière et co-fondatrice de l'association
              </div>
              <div class="mt-2">
                Responsable des affaires publiques dans le digital et ancienne directrice des Relations Institutionnelles
                du Comité National Olympique et Sportif Français (CNOSF), Julie est engagée pour le place de la jeunesse
                et l'égalité des chances. Son parcours professionnel en collectivités, à l'Assemblée Nationale et dans
                les ministères des Sports et de la Ville, lui a apporté une connaissance fine des enjeux et des solutions
                terrains.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="app__section app__section__odd row  justify-content-center text-center" ref="section_actions">
      <div class="col-8 col-sm-12">
        <div class="app__section__title text-uppercase text-primary">
          Nos actions
        </div>
        <div class="app__section__subtitle font-weight-bold mt-3">
          Nous intervenons auprès d’élèves de 6 à 11 ans en proposant, en collaboration avec les enseignants, des
          actions sur-mesure et des supports pédagogiques ludiques d’éducation par le sport.<br><br>
          Nous sommes convaincus qu'il existe plusieurs manières de réussir, des parcours différents, des scolarités
          variées qui permettent à tout un chacun de se réaliser. Il s'agit ici lutter contre le déterminisme scolaire
          et de sensibiliser la jeunesse sur le fait que l’on peut avoir des qualités insoupçonnées, qui ne demandent
          qu’à être transposées dans son parcours scolaire et mises à profit de tout au long de sa vie.
        </div>
        <div class="row mt-3">
          <div class="col-4">
            <div>
              <img src="./assets/programme_le_masque_et_la_plume.png" alt="Le masque et la plume" width="250" class="rounded-circle">
              <div class="text-uppercase mt-3 font-weight-bold">
                Programme "Le masque et la plume"
              </div>
              <div>
                Des ateliers éducatifs et culturels autour d’ouvrages jeunesse sur les thèmes du sport et de ses
                valeurs, nous proposons des exploitations pédagogiques développées avec les enseignants et des
                concours d’albums jeunesse par équipes (écriture et illustrations).
              </div>
              <div class="text-uppercase font-weight-bold text-danger mt-3">
                <div>
                  #apprendre
                </div>
                <div>
                  #imaginer
                </div>
                <div>
                  #créer
                </div>
              </div>
            </div>
          </div>
          <div class="col-4">
            <div>
              <img src="./assets/programme_le_corps_et_la_tete.png" alt="Le corps et la tête" width="250" class="rounded-circle">
              <div class="text-uppercase mt-3 font-weight-bold">
                Programme "Le corps et la tête"
              </div>
              <div>
                Plusieurs ateliers dynamiques alliant des temps de pratiques d'initiations sportive et des activités
                éducatives : dictées sportives, mental-run...
              </div>
              <div class="text-uppercase font-weight-bold text-success mt-3">
                <div>
                  #bouger
                </div>
                <div>
                  #s'amuser
                </div>
                <div>
                  #s'éveiller
                </div>
              </div>
            </div>
          </div>
          <div class="col-4">
            <div>
              <img src="./assets/programme_un_champion_a_l_ecole.png" alt="Un champion à l'école" width="250" class="rounded-circle">
              <div class="text-uppercase mt-3 font-weight-bold">
                Programme "Un champion à l'école"
              </div>
              <div>
                Des athlètes de haut niveau interviennent pour transmettre aux enfants les clés de leur parcours. Ces
                échanges sont aussi l'occasion d'aborder des sujets de société et de citoyenneté en rapport avec le
                sport : la santé, l'inclusion, la mixité hommes/femmes, la lutte contre les discriminations...
              </div>
              <div class="text-uppercase font-weight-bold text-primary mt-3">
                <div>
                  #inspirer
                </div>
                <div>
                  #transmettre
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="app__section app__section__even bg-warning row justify-content-center text-center" ref="section_pipelines">
      <div class="col-8 col-sm-12">
        <div class="app__section__title text-uppercase text-white">
          Dans nos tuyaux
        </div>
        <div class="row mt-3">
          Nous souhaitons développer et offrir d’autres activités pour apprendre en s’amusant autour du sport et de ses valeurs :
          <ul class="text-left app__section__list mt-3 mb-0">
            <li>
              Réaliser et mettre à disposition des carnets pédagogiques interdisciplinaires « clé en main » adaptés par
              tranche d’âge et développés avec des enseignants et ainsi proposer aux éducateurs et parents des outils
              d’éducation par le sport articulés avec les programmes scolaires. Il s’agit d’offrir du matériel
              complémentaire, original et ludique aux enseignements fondamentaux : apprentissage de la lecture, de
              l’écriture, des mathématiques, découverte du monde, anglais, éducation morale et civique... grâce au sport !
            </li>
            <li>
              Créer et animer un réseau dans les quartiers prioritaires de la politique de la ville.
            </li>
            <li>
              Créer une boîte à outils pédagogiques et ludiques et diffuser les bonnes pratiques en matière d’éducation par
              le sport.
            </li>
            <li>
              Établir un maximum de ponts avec les personnes et les associations qui oeuvrent déjà dans le domaine
              de l’éducation par le sport.
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section class="app__section app__section__odd row text-center justify-content-center" ref="section_intervention">
      <div class="col-8 col-sm-12">
        <div class="app__section__title text-uppercase text-primary">
          Demander une intervention
        </div>
        <div class="app__section__subtitle font-weight-bold mt-3">
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
        <div class="app__section__cards__contribution row mt-5 justify-content-center">
          <div class="col-4">
            <a @click="goTo('section_contact')" class="btn">
              <img src="./assets/school.png" alt="Ecole" class="rounded-circle" width="250">
              <div class="mt-3 text-danger">
                Je suis une école
              </div>
            </a>
          </div>
          <div class="col-4">
            <a @click="goTo('section_contact')" class="btn">
              <img src="./assets/city.png" alt="Collectivité" class="rounded-circle" width="250">
              <div class="mt-3 text-success">
                Je suis une collectivité locale
              </div>
            </a>
          </div>
          <div class="col-4">
            <a @click="goTo('section_contact')" class="btn">
              <img src="./assets/sport.png" alt="Club sportif" class="rounded-circle" width="250">
              <div class="mt-3 text-primary">
                Je suis un club sportif
              </div>
            </a>
          </div>
        </div>
        <div class="app__section__cards__contribution row mt-3 justify-content-center">
          <div class="col-4">
            <a @click="goTo('section_contact')" class="btn">
              <img src="./assets/association.png" alt="Association" class="rounded-circle" width="250">
              <div class="mt-3 text-danger">
                Je suis une association
              </div>
            </a>
          </div>
          <div class="col-4">
            <a @click="goTo('section_contact')" class="btn">
              <img src="./assets/library.png" alt="Bibliothèque" class="rounded-circle" width="250">
              <div class="mt-3 text-success">
                Je suis une bibliothèque
              </div>
            </a>
          </div>
          <div class="col-4">
            <a @click="goTo('section_contact')" class="btn">
              <img src="./assets/entertainment.png" alt="Centre de loisir" class="rounded-circle" width="250">
              <div class="mt-3 text-primary">
                Je suis un centre de loisir
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
    <section class="app__section app__section__even row bg-warning justify-content-center" ref="section_join">
      <div class="col-8 col-sm-12">
        <div class="app__section__title text-uppercase text-center text-white">
          Nous soutenir
        </div>
        <div class="app__section__cards__support mt-3">
          <div class="row">
            <div class="col-4 text-center">
              <a href="https://www.helloasso.com/associations/les-carnets-de-jo" target="_blank" class="text-link">
                <img src="./assets/five.png" alt="Adhésion" width="250">
                <div>
                  J'adhère
                </div>
                <div>
                  Et je participe à la vie de l'association!
                </div>
              </a>
            </div>
            <div class="col-4 text-center">
              <a href="https://www.helloasso.com/associations/les-carnets-de-jo" target="_blank" class="text-link">
                <img src="./assets/hand.png" alt="Don" width="250">
                <div>
                  Je fais un don
                </div>
                <div>
                  Et je permets le développement des programmes de l'association
                </div>
              </a>
            </div>
            <div class="col-4 text-center">
              <a @click="goTo('section_contact')" class="btn btn-link p-0 text-link">
                <img src="./assets/family.png" alt="Temps" width="250">
                <div>
                  Je contribue
                </div>
                <div>
                  Et j'anime des ateliers ou j'apporte mon expertise pédagogique.
                </div>
              </a>
            </div>
          </div>
        </div>
        <div class="col-8 offset-2 text-center mt-3">
          Une démarche collective et collaborative
          Les "carnets de Jo" sont le fruit d'un travail collaboratif avec des enseignants et des conseillers
          pédagogiques ou sportifs. Si vous aussi, vous souhaitez apporter votre contribution à nos prochains projets
          pédagogiques, contactez-nous !
        </div>
      </div>
    </section>
    <section class="app__section app__section__odd row" ref="section_contact">
      <div class="col-6 col-sm-12">
        <img src="./assets/basket.png" alt="Baskets" class="w-100">
      </div>
      <div class="col-6 col-sm-12">
        <div class="app__section__title text-uppercase text-primary">
          Nous contacter
        </div>
        <b-form @submit.prevent="sendEmail">
          <b-form-group id="input-group-2" label-for="input-2">
            <b-form-input
              id="input-2"
              v-model="form.name"
              name="name"
              required
              placeholder="Nom *"
            ></b-form-input>
          </b-form-group>
          <b-form-group id="input-group-1" label-for="input-1">
            <b-form-input
              id="input-1"
              v-model="form.email"
              name="email"
              type="email"
              required
              placeholder="Adresse email *"
            ></b-form-input>
          </b-form-group>
          <b-form-group id="input-group-3" label-for="input-3">
            <b-form-input
              id="input-3"
              v-model="form.object"
              name="object"
              required
              placeholder="Objet *"
            ></b-form-input>
          </b-form-group>
          <b-form-group>
            <b-form-textarea
              id="textarea"
              v-model="form.message"
              name="message"
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
    <footer class="app__footer row bg-success text-center p-3">
      <div class="col-12">
        <img src="./assets/logo-footer.png" alt="Jo" width="50" class="app__footer__logo">
        LES CARNETS DE JO<br><br>
        6 rue Jean-Baptiste Dumay<br>
        75020 PARIS<br>
        FRANCE<br><br>
        lescarnetsdejo@gmail.com<br><br>
        ©2021 par <span class="font-italic">Les Carnets de Jo</span>
      </div>
    </footer>
  </div>
</template>

<script>
import emailjs from 'emailjs-com'
import { config } from './config.js'

export default {
  name: 'app',
  data () {
    return {
      form: {
        email: '',
        message: '',
        name: '',
        object: ''
      },
      isShrinked: false
    }
  },
  methods: {
    handleScroll () {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        this.isShrinked = true
      } else {
        this.isShrinked = false
      }
    },
    goTo(refName) {
      const element = this.$refs[refName]
      element.scrollIntoView({ behavior: 'smooth' })
    },
    sendEmail(e) {
      emailjs.sendForm(config.EMAILJS_SERVICE_ID, config.EMAILJS_TEMPLATE_ID, e.target, config.EMAILJS_USER_ID)
          .then(() => {
            this.form.email = ''
            this.form.message = ''
            this.form.name = ''
            this.form.object = ''
          }, error => {
            // eslint-disable-next-line
            console.log('FAILED...', error)
          })
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
.text-link {
  color: #212529;
}

.app {

  &__nav {
    height: 150px;
    transition: 0.4s;

    &__title {
      font-size: 1rem;
    }

    .nav-link {
      color: white;
    }

    &.shrinked {
      height: 75px;

      .app__nav__title {
        font-size: 0.6rem;
      }

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

    &__list {
      li {
        margin-bottom: 10px;
      }
    }

    &__macarons {
      height: 250px
    }

    &__macaron {
      background-color: transparent;
      border-radius: 50%;
      color: transparent;
      height: 250px;
      position: relative;
      top: -250px;
      width: 250px;

      &__content {
        bottom: 0;
        left: 0;
        margin-top: -50%;
        position: absolute;
        right: 0;
        top: 50%;
      }

      &:hover {
        background-color: black;
        color: white;
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
      left: 530px;
      position: absolute;
      top: 59px;
    }
  }
}
</style>
