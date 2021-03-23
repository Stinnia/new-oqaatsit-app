<template>
  <div class="container">
    <div class="contact-form">
      <h3>Login</h3>
      <div v-if="error" class="alert alert-danger">{{ error }}</div>
      <form class="form" action="#" @submit.prevent="submit">
        <label for="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          value
          required
          autofocus
          v-model="form.email"
        />
        <label for="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          required
          v-model="form.password"
        />
        <button type="submit" class="button">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      error: null,
    };
  },
  methods: {
    submit() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.form.email, this.form.password)
        .then(() => {
          this.$router.replace({ name: "SignedIn" });
        })
        .catch((err) => {
          this.error = err.message;
        });
    },
  },
};
</script>
<style scoped>
.v-sheet.v-card:not(.v-sheet--outlined) {
  box-shadow: none;
}
.contact-form {
  font-family: 16px;
  margin: 100px auto;
  max-width: 600px;
  width: 100%;
}

.contact-form .separator {
  border-bottom: solid 1px #ccc;
  margin-bottom: 15px;
}

.contact-form .form {
  display: flex;
  flex-direction: column;
  font-size: 16px;
}

.contact-form input[type="email"],
.contact-form input[type="password"],
.contact-form textarea {
  border: solid 1px #e8e8e8;
  font-family: "Roboto", sans-serif;
  padding: 10px 7px;
  margin-bottom: 15px;
  outline: none;
}

.contact-form textarea {
  resize: none;
}

.contact-form .button {
  background: #6cb3c6;
  border: solid 1px #6cb3c6;
  color: white;
  cursor: pointer;
  padding: 10px 50px;
  text-align: center;
  text-transform: uppercase;
}

.contact-form .button:hover {
  background: #2e75ad;
  border: solid 1px #2e75ad;
}

.contact-form input[type="email"],
.contact-form input[type="password"],
.contact-form textarea,
.contact-form .button {
  font-size: 15px;
  border-radius: 3px;
}
</style>