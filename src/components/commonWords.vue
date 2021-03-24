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
    <div id="DropdownMenu">
      <section class="dropDownMenuWrapper">
        <button class="dropDownMenuButton" ref="menu" @click="openClose">
          Categories
        </button>

        <div class="">
          <div class="bar1" :class="{ 'bar1--open': isOpen }" />
          <div class="bar2" :class="{ 'bar2--open': isOpen }" />
          <div class="bar3" :class="{ 'bar3--open': isOpen }" />
        </div>
        <section class="dropdownMenu" v-if="isOpen">
          <section class="option">
            <router-link class="option_text" to="/commonwords"
              >Common words</router-link
            >
          </section>

          <section class="option">
            <router-link to="/familyrelations"
              >Members of the family</router-link
            >
          </section>

          <section class="option">
            <router-link to="/greenlandicanimals"
              >Greenlandic animals</router-link
            >
          </section>
          <slot />
        </section>
      </section>
    </div>
    <div>
      <!-- Show content from database -->
      <el-table class="categoryContent" :data="commonwordsData">
        <el-table-column label="English" prop="English"> </el-table-column>
        <el-table-column label="Greenlandic" min-width="100" prop="Greenlandic">
        </el-table-column>
        <el-table-column
          min-width="100"
          prop="pronounciation"
          label="Pronunciation"
          ><template slot-scope="scope">
            <audio controls>
              <source :src="scope.row.pronounciation" type="audio/mpeg" />
            </audio>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- Parallax footer -->
    <br /><br /><br /><br /><br />
    <v-parallax
      class="footer_parallax"
      src="https://firebasestorage.googleapis.com/v0/b/oqaatsit-database.appspot.com/o/footer_northernlight1.png?alt=media&token=bb9c9ca5-1a03-403d-a7c8-43ce09ce76dd"
    >
      <div class="footer_container">
        <v-row no-gutters>
          <v-col cols="12" sm="9">
            <v-card class="pa-2">
              <h2 class="text-left">Oqaatsit</h2>
              <p class="text-left oqaatsit_text">
                Hjemmesiden Oqaatsit er lavet af: <br /><br />
                <strong>Stinnia Hansen Kleist</strong><br />
                stinniahk@gmail.com <br />
              </p>
              <div class="social_media">
                <a href="https://www.linkedin.com/in/stinnia/" target="_blank">
                  <img
                    class="social_media_icons"
                    src="https://cdn2.iconfinder.com/data/icons/social-media-applications/64/social_media_applications_14-linkedin-256.png"
                    alt=""
                  />
                </a>
                <a href="https://www.facebook.com/Stinnia/" target="_blank">
                  <img
                    class="social_media_icons"
                    src="https://cdn2.iconfinder.com/data/icons/social-media-applications/64/social_media_applications_1-facebook-256.png"
                    alt=""
                  />
                </a>
                <a href="https://www.instagram.com/stinnia/" target="_blank">
                  <img
                    class="social_media_icons"
                    src="https://cdn2.iconfinder.com/data/icons/social-media-applications/64/social_media_applications_3-instagram-256.png"
                    alt=""
                  />
                </a>
              </div>
            </v-card>
          </v-col>

          <v-col cols="12" sm="3">
            <v-card class="pa-2"
              ><h3 class="text-center">Tourist websites</h3>
              <li>
                <a href="https://visitgreenland.com/" target="_black">
                  <p class="text-right subtitle-1 white--text">
                    Visit Greenland
                  </p>
                </a>
              </li>
              <li>
                <a href="https://www.greenland-travel.dk/" target="_black">
                  <p class="text-right subtitle-1 white--text">
                    Greenland Travel
                  </p>
                </a>
              </li>
              <li>
                <a href="https://www.airgreenland.dk/" target="_black">
                  <p class="text-right subtitle-1 white--text">Air Greenland</p>
                </a>
              </li>
              <li>
                <a href="https://www.worldofgreenland.com/en/" target="_black">
                  <p class="text-right subtitle-1 white--text">
                    World of Greenland
                  </p>
                </a>
              </li>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </v-parallax>
    <div class="footer_container_responsive">
      <v-row no-gutters>
        <v-col cols="12" sm="9">
          <v-card class="pa-2">
            <h2 class="text-left">Oqaatsit</h2>
            <p class="text-left oqaatsit_text">
              Hjemmesiden Oqaatsit er lavet af: <br /><br />
              <strong>Stinnia Hansen Kleist</strong><br />
              stinniahk@gmail.com <br />
            </p>
            <div class="social_media">
              <a href="https://www.linkedin.com/in/stinnia/" target="_blank">
                <img
                  class="social_media_icons"
                  src="https://cdn2.iconfinder.com/data/icons/social-media-applications/64/social_media_applications_14-linkedin-256.png"
                  alt=""
                />
              </a>
              <a href="https://www.facebook.com/Stinnia/" target="_blank">
                <img
                  class="social_media_icons"
                  src="https://cdn2.iconfinder.com/data/icons/social-media-applications/64/social_media_applications_1-facebook-256.png"
                  alt=""
                />
              </a>
              <a href="https://www.instagram.com/stinnia/" target="_blank">
                <img
                  class="social_media_icons"
                  src="https://cdn2.iconfinder.com/data/icons/social-media-applications/64/social_media_applications_3-instagram-256.png"
                  alt=""
                />
              </a>
            </div>
          </v-card>
        </v-col>

        <v-col cols="12" sm="3">
          <v-card class="pa-2"
            ><h3 class="text-center">Tourist websites</h3>
            <li>
              <a href="https://visitgreenland.com/" target="_black">
                <p class="text-right subtitle-1 white--text">Visit Greenland</p>
              </a>
            </li>
            <li>
              <a href="https://www.greenland-travel.dk/" target="_black">
                <p class="text-right subtitle-1 white--text">
                  Greenland Travel
                </p>
              </a>
            </li>
            <li>
              <a href="https://www.airgreenland.dk/" target="_black">
                <p class="text-right subtitle-1 white--text">Air Greenland</p>
              </a>
            </li>
            <li>
              <a href="https://www.worldofgreenland.com/en/" target="_black">
                <p class="text-right subtitle-1 white--text">
                  World of Greenland
                </p>
              </a>
            </li>
          </v-card>
        </v-col>
      </v-row>
    </div>
    <div class="copyright">&copy; Stinnia</div>
    <img
      v-img
      class="top_image_mobile"
      src="https://firebasestorage.googleapis.com/v0/b/oqaatsit-database.appspot.com/o/footer_northernlight1.png?alt=media&token=bb9c9ca5-1a03-403d-a7c8-43ce09ce76dd"
      alt=""
    />
  </v-container>
</template>

<script>
import firebase from "../firebaseInit";
const db = firebase.firestore();

export default {
  name: "commonWords",
  data() {
    return {
      english: "",
      commonwordsData: [],
      greenlandic: "",
      search: "",
      isOpen: false, // Variable if the menu is open or closed
    };
  },
  methods: {
    openClose() {
      var _this = this;

      const closeListerner = (e) => {
        if (_this.catchOutsideClick(e, _this.$refs.menu))
          window.removeEventListener("click", closeListerner),
            (_this.isOpen = false);
      };

      window.addEventListener("click", closeListerner);

      this.isOpen = !this.isOpen;
    },
    catchOutsideClick(event, dropdown) {
      // When user clicks menu — do nothing
      if (dropdown == event.target) return false;

      // When user clicks outside of the menu — close the menu
      if (this.isOpen && dropdown != event.target) return true;
    },
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

.dropDownMenuWrapper {
  z-index: 2;
  position: relative;
  margin: 0 auto;
  margin-bottom: 20px;
  width: 250px;
  height: 40px;
  border-radius: 8px;
  background: rgba(197, 44, 54, 0.7);

  * {
    box-sizing: border-box;
    text-align: left;
  }

  .dropDownMenuButton {
    border: none;
    font-size: inherit;
    background: none;
    outline: none;
    border-radius: 4px;
    position: absolute;
    top: 0;
    display: flex;
    align-items: center;
    padding: 0 70px;
    margin: 0 auto;
    line-height: 1;
    width: 100%;
    height: 100%;
    z-index: 2;
    cursor: pointer;
    font-size: 20px;
    font-weight: 600;
    text-align: center;
    color: white;
  }
}

.footer_container {
  width: 60%;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 20px 50px;
  margin: 20px auto;
}
.footer_container_responsive {
  display: none;
}
.theme--light.v-card {
  background: none;
  color: white;
}
.oqaatsit_text {
  font-size: 12px;
}
.v-sheet.v-card:not(.v-sheet--outlined) {
  box-shadow: none;
}
.social_media {
  float: left;
}
.social_media_icons {
  width: 25px;
  margin: 5px;
}
.copyright {
  position: absolute;
  bottom: 0;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  color: white;
}

/* Parallax media queries */

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
  .footer_container {
    display: none;
  }
  .footer_container_responsive {
    display: block;
    width: 100%;
    background-color: rgba(0, 0, 0, 0);
    padding: 0;
    margin: 20px auto;
  }
  .oqaatsit_text {
    color: black;
    text-align: center !important;
  }
  .white--text {
    color: black !important;
  }
  .text-right {
    text-align: center !important;
  }
  .v-application .subtitle-1 {
    font-size: 12px !important;
  }
  .v-application .text-center {
    color: black;
    text-align: center !important;
  }
  .social_media {
    float: none;
  }
  .copyright {
    color: white;
  }
}
</style>