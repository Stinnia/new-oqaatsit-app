<template>
  <v-container fluid id="GreenlandicAnimals">
    <v-parallax
      class="frontpage_parallax_website"
      src="https://firebasestorage.googleapis.com/v0/b/oqaatsit-database.appspot.com/o/gr%C3%B8nland_animals.png?alt=media&token=d9b22a06-1ebe-4822-81b1-aca4886e50de"
    >
    </v-parallax>
    <img
      v-img
      class="top_image_mobile"
      src="https://firebasestorage.googleapis.com/v0/b/oqaatsit-database.appspot.com/o/gr%C3%B8nland_animals.png?alt=media&token=d9b22a06-1ebe-4822-81b1-aca4886e50de"
      alt=""
    />
    <v-row no-gutters>
      <v-spacer />
      <v-col cols="12" sm="4" style="margin-top: -5%">
        <v-card class="pa-2 intro" outlined tile>
          <h2>Animals in Greenlandic</h2>
          <p>
            Animals in Greenland are magnificent, and we treasure them deeply.
            <br />
            Whether we just watch them, hunt them for survival, or have them as
            live stock, we will always make sure that their well-being comes
            first.
            <br /><br />
            There's not much nature left in the world, especially in the
            concrete jungles. That's why we always will make sure that we are
            not taking over the nature, but instead we embrace it.
            <br /><br />
            Just like how my mom says: "You don't rule over the nature, the
            nature rules over you."
          </p>
        </v-card>
      </v-col>
      <v-spacer />
    </v-row>
    <!-- Spacer -->
    <br />
    <br />
    <br />
    <!-- End spacer -->
    <CategoryNav />
    <div>
      <v-row id="row_card">
        <v-col md="6" v-for="word in GreenlandicAnimalsData" :key="word.id">
          <v-card class="mx-auto slide card_box">
            <v-card-title class="justify-center primary--text"
              >{{ word.English }}
            </v-card-title>
            <v-card-text>Greenlandic: {{ word.Greenlandic }}</v-card-text>

            <audio controls>
              <source :src="word.pronounciation" type="audio/mpeg" />
            </audio>
          </v-card>
        </v-col>
      </v-row>
    </div>
    <br /><br />
    <Footer />
  </v-container>
</template>

<script>
import firebase from "../firebaseInit";
const db = firebase.firestore();
import CategoryNav from "../Navigation/CategoryNav";
import Footer from "./Footer";

export default {
  name: "GreenlandicAnimals",
  components: { Footer, CategoryNav },
  data() {
    return {
      english: "",
      GreenlandicAnimalsData: [],
      greenlandic: "",
      pronounciation: "",
      isOpen: false, // Variable if the menu is open or closed
    };
  },
  methods: {
    readGreenlandicAnimals() {
      this.GreenlandicAnimalsData = [];
      db.collection("Categories")
        .doc("bS9Twfzws54J2ls9CIMb")
        .collection("GreenlandicAnimals")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.GreenlandicAnimalsData.push({
              id: doc.id,
              Greenlandic: doc.data().Greenlandic,
              English: doc.data().English,
              pronounciation: doc.data().pronounciation,
            });
            console.log(doc.id, " => ", doc.data());
          });
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });
    },
  },
  mounted() {
    this.readGreenlandicAnimals();
  },
};
</script>

<style lang="scss" scoped>
#GreenlandicAnimals {
  font-family: "Noto Sans", sans-serif;
}
.v-sheet.v-card.intro {
  background-color: rgba(46, 117, 173, 0.7);
  color: white;
}

#row_card {
  width: 60%;
  margin: 0 auto;
}
.card_box {
  height: 300px;
  margin: 0 auto;
}

/* Parallax + media query image*/
.top_image_mobile {
  display: none;
}
@media only screen and (max-width: 600px) {
  .v-parallax {
    display: none;
  }
  .top_image_mobile {
    display: block;
    width: 100%;
  }

  .v-sheet.v-card.intro {
    background-color: rgba(46, 117, 173, 0);
    color: black;
    margin-top: 10%;
    border: none;
  }
  #row_card {
    width: 100%;
  }
}
</style>