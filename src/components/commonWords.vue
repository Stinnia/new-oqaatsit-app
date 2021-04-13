<template>
  <v-container fluid id="CommonWords">
    <v-parallax
      class="frontpage_parallax_website"
      src="https://firebasestorage.googleapis.com/v0/b/oqaatsit-database.appspot.com/o/gr%C3%B8nland_words.png?alt=media&token=5096fccb-32ae-4b18-b50e-d1b2a44ccbbd"
    >
    </v-parallax>
    <img
      v-img
      class="top_image_mobile"
      src="https://firebasestorage.googleapis.com/v0/b/oqaatsit-database.appspot.com/o/gr%C3%B8nland_words.png?alt=media&token=5096fccb-32ae-4b18-b50e-d1b2a44ccbbd"
      alt=""
    />
    <v-row no-gutters>
      <v-spacer />
      <v-col cols="12" sm="4" style="margin-top: -6%">
        <v-card class="pa-2 intro" outlined tile>
          <h2>The most common words in Greenlandic</h2>
          <p>
            Are you looking to have a small talk in Greenlandic?<br />
            Or are you just trying to learn a few words to impress your
            Greenlandic speaking friends? <br />
            Just go through the categories and see if you find eveything you
            need!
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
    <h2>Common words in Greenlandic</h2>
    <br /><br />

    <CategoryNav />
    <div>
      <v-row id="row_card">
        <v-col md="6" v-for="word in commonwordsData" :key="word.id">
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
    <br /><br /><br /><br /><br />
    <Footer />
  </v-container>
</template>

<script>
import firebase from "../firebaseInit";
const db = firebase.firestore();
import CategoryNav from "../Navigation/CategoryNav";
import Footer from "./Footer";

export default {
  name: "commonWords",
  components: { Footer, CategoryNav },
  data() {
    return {
      english: "",
      commonwordsData: [],
      greenlandic: "",
      pronounciation: "",
    };
  },
  methods: {
    readCommonWords() {
      this.commonwordsData = [];
      db.collection("Categories")
        .doc("bS9Twfzws54J2ls9CIMb")
        .collection("CommonWords")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.commonwordsData.push({
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
    this.readCommonWords();
  },
};
</script>

<style lang="scss" scoped>
#CommonWords {
  font-family: "Noto Sans", sans-serif;
}
.v-sheet.v-card.intro {
  background-color: rgba(197, 44, 54, 0.7);
  color: white;
}

#row_card {
  width: 60%;
  margin: 0 auto;
}
.card_box {
  height: 270px;
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
  #row_card {
    width: 100%;
  }
}
</style>