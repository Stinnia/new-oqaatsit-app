<template>
  <div id="footer">
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
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
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
@media only screen and (max-width: 600px) {
  .v-parallax {
    display: none;
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