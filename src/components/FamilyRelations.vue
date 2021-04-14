<template>
  <v-container fluid id="FamilyRelations">
    <v-parallax
      class="frontpage_parallax_website"
      src="https://firebasestorage.googleapis.com/v0/b/oqaatsit-database.appspot.com/o/gr%C3%B8nland_familyrelations.png?alt=media&token=68ded4cb-c6cf-4057-855d-a7cbaae3eee0"
    >
    </v-parallax>
    <img
      v-img
      class="top_image_mobile"
      src="https://firebasestorage.googleapis.com/v0/b/oqaatsit-database.appspot.com/o/gr%C3%B8nland_familyrelations.png?alt=media&token=68ded4cb-c6cf-4057-855d-a7cbaae3eee0"
      alt=""
    />
    <v-row no-gutters>
      <v-spacer />
      <v-col cols="12" sm="4" style="margin-top: -6%">
        <v-card class="pa-2 intro" outlined tile>
          <h2>Members of the family in Greenlandic</h2>
          <p>
            In Greenlandic we have many different words for different family
            members. Navigate through the words to find out how say the
            different words.
          </p>
        </v-card>
      </v-col>
      <v-spacer />
    </v-row>
    <br />
    <br />
    <br />

    <!-- Category dropdown -->
    <CategoryNav />

    <!-- Card  -->
    <div>
      <v-row id="row_card">
        <v-col md="6" v-for="word in FamilyRelationsData" :key="word.id">
          <v-card class="mx-auto slide card_box">
            <img v-img :src="word.image" />
            <v-card-text> {{ word.Greenlandic }}</v-card-text>
            <audio controls="controls" preload="none">
              <source :src="word.pronounciation" type="audio/mpeg" />
              <source :src="word.pronounciation" type="audio/mp4" />
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
  name: "FamilyRelations",
  components: { Footer, CategoryNav },
  data() {
    return {
      english: "",
      FamilyRelationsData: [],
      greenlandic: "",
      image: "",
      pronounciation: "",
    };
  },
  methods: {
    readFamilyRelations() {
      this.FamilyRelationsData = [];
      db.collection("Categories")
        .doc("bS9Twfzws54J2ls9CIMb")
        .collection("FamilyRelations")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.FamilyRelationsData.push({
              id: doc.id,
              Greenlandic: doc.data().Greenlandic,
              English: doc.data().English,
              image: doc.data().image,
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
    this.readFamilyRelations();
  },
};
</script>

<style lang="scss" scoped>
#FamilyRelations {
  font-family: "Noto Sans", sans-serif;
}

#row_card {
  width: 60%;
  margin: 0 auto;
}
.card_box {
  height: 470px;
  margin: 0 auto;
}
img {
  width: 100%;
}
.v-sheet.v-card.intro {
  background-color: rgba(2, 120, 31, 0.7);
  color: white;
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
  .v-sheet.v-card.outro {
    background-color: rgba(197, 44, 54, 0);
    color: black;
    bottom: 0% !important;
    border: none;
  }
  #row_card {
    width: 100%;
  }
  .card_box {
    height: auto;
    margin: 0 auto;
  }
}
</style>