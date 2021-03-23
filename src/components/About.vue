<template>
  <v-container fluid id="About">
    <v-parallax
      class="footer_parallax"
      src="https://firebasestorage.googleapis.com/v0/b/oqaatsit-database.appspot.com/o/kalaallisuut_cropped.png?alt=media&token=10b558a4-0db7-4850-88ae-85eadee50c56"
    >
    </v-parallax>
    <img
      class="top_image_mobile"
      src="https://firebasestorage.googleapis.com/v0/b/oqaatsit-database.appspot.com/o/kalaallisuut_cropped.png?alt=media&token=10b558a4-0db7-4850-88ae-85eadee50c56"
      alt=""
    />
    <v-row no-gutters>
      <v-spacer />
      <v-col cols="12" sm="5" style="margin-top: 5%">
        <v-card class="pa-2 intro">
          <h1 class="text-center">Welcome</h1>
          <p class="text-left">
            Over the years many people have asked me whether there was an online
            dictionary for the Greenlandic language. I have been able to tell
            them, that yes, there is one in Greenlandic - Danish, and vice
            versa.<br /><br />
            But not one for Greenlandic - English, and English - Greenlandic.
            <br /><br />
            For my main assignment in my studies in Multimedia design I created
            a prototype for an English - Greenlandic dictionary. An online
            dictionary.
            <br />
            And when I started on my studies for Webdevelopment, it was a
            natural transition that I should do something similar for my
            bachelor thesis.
            <br /><br />
            This idea to have a website with the most common words in
            Greenlandic, as well as a page to have some of the Greenlandic
            cities and villages, as well as how you pronounce them, came to
            life. <br /><br />
            Greenlandic is a very difficult language to learn, unless you've
            spoken it since you were a kid, like me. Or if you are dedicated to
            learn the language.
            <br /><br />
            One of the main problems trying to learn the language is the lack of
            resources online.
            <br />Pronounciation of the Greenlandic word is definitely something
            non-Greenlandic speaking people always struggle with. <br />
            So that was one of the features I wanted to add in my project.
            <br /><br />
            Another aspect I wanted to include was a few categories for the most
            common words, animals as well as family relations.
            <br /><br />
            So there you go, a Greenlandic - English website dedicated to make
            it easier for you to learn and pronounce the Greenlandic words!
          </p>
          <br /><br />
          <h2 class="text-center">Who am I?</h2>
          <p class="text-left">
            I am a Greenlandic woman studying in Cphbusiness. I have learned to
            create, design and develop websites.
            <br />
            <br />One of my big dreams is to make the online landscape in
            Greenland a much better experience. Not that there is no great
            Greenlandic websites already, because there are definitely some!
            <br /><br />
            It is just that since I started to study Multimedia design, I have
            noticed how some websites are way too outdated for nowadays modern
            technology.
            <br /><br />
            Thus this dream was born. I want to make the Greenlandic online
            presence way more desireable and user friendly! (Big dream for a
            small Greenlandic girl, I know)
          </p>
        </v-card>
      </v-col>
      <v-spacer />
    </v-row>

    <br /><br /><br />
    <h3>Any questions?</h3>
    <p class="footer_paragraf">
      If you have any questions to about anything on the website, <br />
      please don't hesitate to contact us in the formular below.
    </p>
    <v-parallax
      class="footer_parallax"
      src="https://firebasestorage.googleapis.com/v0/b/oqaatsit-database.appspot.com/o/ningiu.jpg?alt=media&token=de6b2e65-34c8-4e67-9e07-848c38103ec4"
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
      src="https://firebasestorage.googleapis.com/v0/b/oqaatsit-database.appspot.com/o/ningiu.jpg?alt=media&token=de6b2e65-34c8-4e67-9e07-848c38103ec4"
      alt=""
    />
  </v-container>
</template>
<script>
import emailjs from "emailjs-com";
export default {
  name: "About",
  data() {
    return {};
  },
  methods: {
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
};
</script>

<style lang="scss" scoped>
#About {
  font-family: "Noto Sans", sans-serif;
}
.v-sheet.v-card:not(.v-sheet--outlined) {
  box-shadow: none;
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
} /* Parallax + media query image*/
.top_image_mobile {
  display: none;
}
.copyright {
  position: absolute;
  bottom: 0;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  color: white;
}
/* Media queries */
@media only screen and (max-width: 600px) {
  p {
    font-size: 12px;
  }
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