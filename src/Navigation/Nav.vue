<template>
  <v-app id="nav">
    <v-toolbar
      color="transparent"
      flat
      style="position: fixed; top: 0; width: 100%"
    >
      <v-spacer />
      <v-toolbar-title>
        <a href="../components/Home">
          <v-img class="flag_icon" src="../assets/flag_icon.png"></v-img> </a
      ></v-toolbar-title>
      <v-toolbar-items tag="ul">
        <router-link to="/" tag="li">
          <span tag="a" class="home_nav">Home</span>
        </router-link>
        <router-link to="/commonWords" tag="li">
          <span tag="a" class="words_nav">Words</span>
        </router-link>
        <router-link to="/About" tag="li">
          <span tag="a" class="about_nav">About</span>
        </router-link>
      </v-toolbar-items>
      <v-spacer />
    </v-toolbar>
    <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  name: "Nav",
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap");
.v-toolbar {
  z-index: 999;
}
.flag_icon {
  height: 25px;
  width: 25px;
  padding: 10px;
}
li {
  list-style-type: none;
  margin: 0 20px;
  cursor: pointer;
  font-size: 24px;
  margin-top: 12px;
  font-family: "Noto Sans", sans-serif;
}
li a {
  text-decoration: none;
}
.home_nav {
  border-bottom: 3px solid #edb90e;
}
.words_nav {
  border-bottom: 3px solid #e24426;
}
.about_nav {
  border-bottom: 3px solid #c52c36;
}
</style>