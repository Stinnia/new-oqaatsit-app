<template>
  <v-container fluid>
    <v-parallax
      class="frontpage_parallax_website"
      src="https://firebasestorage.googleapis.com/v0/b/oqaatsit-database.appspot.com/o/IMG_20150531_151146.jpg?alt=media&token=1d7ea23b-fd36-4cbb-807f-e6f7c8d66c41"
    >
    </v-parallax>
    <img
      class="top_image_mobile"
      src="https://firebasestorage.googleapis.com/v0/b/oqaatsit-database.appspot.com/o/IMG_20150531_151146.jpg?alt=media&token=1d7ea23b-fd36-4cbb-807f-e6f7c8d66c41"
      alt=""
    />
    <v-row no-gutters>
      <v-spacer />
      <v-col cols="12" sm="4" style="margin-top: -6%">
        <v-card class="pa-2 intro" outlined tile>
          <h2>Discover the Greenlandic language</h2>
          <p>
            Whether you’re a beginner or experienced, <br />this website has
            your back!<br />
            Learn the basics or focus on topics like Greenlandic cities,
            commonwords, animals or family relations.
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
    <h2>Cities in Greenland</h2>
    <router-link to="/SignIn" align-left>Sign in to edit</router-link>
    <el-table
      class="table_cities"
      :data="citiesData"
      style="width: 60%; margin: 0 auto"
    >
      <el-table-column min-width="100" prop="image" label="">
        <template slot-scope="scope">
          <img v-img :src="scope.row.image" />
        </template>
      </el-table-column>
      <el-table-column label="Name" prop="name"> </el-table-column>
      <el-table-column label="Population" prop="population"> </el-table-column>
      <el-table-column min-width="150" label="Pronunciation"
        ><template slot-scope="scope">
          <audio controls>
            <source :src="scope.row.pronounciation" type="audio/mpeg" />
          </audio>
        </template>
      </el-table-column>
    </el-table>
    <br /><br /><br /><br /><br />
    <v-row no-gutters>
      <v-spacer />
      <v-col cols="12" sm="4" style="margin-bottom: -9%; z-index: 999">
        <v-card class="pa-2 outro" outlined tile>
          <h3>Any questions?</h3>
          <p class="footer_paragraf">
            If you have any questions to about anything on the website, <br />
            please don't hesitate to contact us in the formular below.
          </p>
        </v-card>
      </v-col>
      <v-spacer />
    </v-row>
    <!-- Parallax footer -->
    <v-parallax
      class="footer_parallax"
      src="https://firebasestorage.googleapis.com/v0/b/oqaatsit-database.appspot.com/o/northern_lights.png?alt=media&token=6b0d703e-7156-452e-bedd-78d37b8609e0"
    >
      <div class="footer_container">
        <div class="contact-form">
          <form class="form" @submit.prevent="sendEmail">
            <label>Name</label>
            <input type="text" name="user" />
            <label>Email</label>
            <input type="email" name="email" />
            <label>Message</label>
            <textarea name="message"></textarea>
            <button class="button">Send</button>
          </form>
        </div>
      </div>
    </v-parallax>
    <div class="footer_container_responsive">
      <div class="contact-form">
        <form class="form" @submit.prevent="sendEmail">
          <label>Name</label>
          <input type="text" name="user" />
          <label>Email</label>
          <input type="email" name="email" />
          <label>Message</label>
          <textarea name="message"></textarea>
          <button class="button">Send</button>
        </form>
      </div>
    </div>
    <div class="copyright">&copy; Stinnia</div>
    <img
      class="top_image_mobile"
      src="https://firebasestorage.googleapis.com/v0/b/oqaatsit-database.appspot.com/o/northern_lights.png?alt=media&token=6b0d703e-7156-452e-bedd-78d37b8609e0"
      alt=""
    />
  </v-container>
</template>

<script>
import firebase from "../firebaseInit";
const db = firebase.firestore();
import emailjs from "emailjs-com";

export default {
  name: "Home",
  data() {
    return {
      name: "",
      citiesData: [],
      population: "",
      search: "",
      image: "",
      pronounciation: "",

      seen: true,
    };
  },
  methods: {
    readCity() {
      this.citiesData = [];
      db.collection("Cities")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.citiesData.push({
              id: doc.id,
              name: doc.data().name,
              population: doc.data().population,
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

    sendEmail: (e) => {
      emailjs
        .sendForm(
          "service_f3f1mhx",
          "template_3fcfv5d",
          e.target,
          "user_WN93l0R5HJQ2sfFoV94f7"
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result.status, result.text);
          },
          (error) => {
            console.log("FAILED...", error);
          }
        );
    },
  },
  mounted() {
    this.readCity();
  },
};
</script>

<style scoped>
.container--fluid {
  font-family: "Noto Sans", sans-serif;
  padding: 0;
}
.el-table .cell {
  font-family: "Noto Sans", sans-serif;
}
.v-application a {
  margin-left: 800px;
  color: #2e75ad;
}
img {
  width: 90%;
}
.v-sheet.v-card.intro {
  background-color: rgba(46, 117, 173, 0.7);
  color: white;
}
.v-sheet.v-card.outro {
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  bottom: 42%;
}

.el-table--border::after,
.el-table--group::after,
.el-table::before {
  z-index: -1;
}

/* Contact form */
.footer_container {
  width: 60%;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 20px 50px;
  margin: 20px auto;
}
.footer_container_responsive {
  display: none;
}
.contact-form {
  font-family: 16px;
  margin: 0 auto;
  max-width: 600px;
  width: 100%;
}

.contact-form .form {
  display: flex;
  flex-direction: column;
  font-size: 16px;
}

.contact-form input[type="email"],
.contact-form input[type="text"],
.contact-form textarea {
  background: rgba(255, 255, 255, 0.5);
  font-family: "Roboto", sans-serif;
  padding: 10px 7px;
  margin-bottom: 15px;
  outline: none;
}

.contact-form textarea {
  resize: none;
}

.contact-form .button {
  background: rgba(212, 212, 212, 0.5);
  color: white;
  cursor: pointer;
  padding: 10px 50px;
  margin-top: 20px;
  text-align: center;
  text-transform: uppercase;
}

.contact-form .button:hover {
  background: rgba(255, 255, 255, 0.5);
}

.contact-form input[type="email"],
.contact-form input[type="text"],
.contact-form textarea,
.contact-form .button {
  font-size: 15px;
  border-radius: 3px;
}

.copyright {
  position: absolute;
  bottom: 0;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  color: white;
}
/* Parallax + media query image*/
.top_image_mobile {
  display: none;
}
/* Media queries */
@media only screen and (max-width: 600px) {
  .v-parallax {
    display: none;
  }
  .frontpage_parallax_website {
    display: none;
  }
  .top_image_mobile {
    display: block;
    width: 100%;
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

  .v-sheet.v-card.intro {
    background-color: rgba(46, 117, 173, 0);
    color: black;
    margin-top: 20px;
    border: none;
  }
  .v-sheet.v-card.outro {
    background-color: rgba(197, 44, 54, 0);
    color: black;
    bottom: 0% !important;
    border: none;
  }

  .container--fluid {
    overflow: auto;
  }

  .v-application a {
    margin-left: 270px;
  }
  .table_cities {
    width: 100% !important;
  }
  .v-sheet.v-card.outro[data-v-8dc7cce2] {
    bottom: -60%;
  }

  .footer_container {
    width: 100%;
    padding: 20px;
    margin-top: 150px;
    margin-bottom: 50px;
  }
  .footer_paragraf {
    font-size: smaller;
  }

  .contact-form input[type="email"],
  .contact-form input[type="text"],
  .contact-form textarea {
    background: rgba(0, 0, 0, 0.5);
    font-family: "Roboto", sans-serif;
    margin: 10px 7px 0 7px;
    margin-bottom: 15px;
    outline: none;
  }
  .contact-form .button {
    background: rgba(0, 0, 0, 0.3);
    color: white;
    cursor: pointer;
    padding: 10px 50px;
    margin-top: 20px;
    text-align: center;
    text-transform: uppercase;
  }
  .copyright {
    color: white;
  }
}
</style>