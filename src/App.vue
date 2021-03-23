<template>
  <div id="app">
    <Nav />
  </div>
</template>

<script>
import Nav from "./Navigation/Nav";
export default {
  name: "app",
  components: { Nav },
};
</script>

<style lang="scss" >
html,
body {
  position: relative;
  padding-top: 0;
}
#app {
  font-family: "Times New Roman", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font: 16px Sans-Serif;
}
#app {
  font-family: "Noto Sans", sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
  display: flex;
  flex-direction: column;
}

* {
  box-sizing: border-box;
}
/* Navigation menu */
.v-btn__content {
  color: red;
}

/* Categories scss */
.dropDownMenuWrapper {
  z-index: 2;
  position: relative;
  margin: 0 auto;
  width: 250px;
  height: 40px;
  border-radius: 8px;

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
  }

  .dropdownMenu {
    position: absolute;
    top: 75%;
    width: 100%;
    min-width: 250px;
    min-height: 10px;
    border-radius: 8px;
    border: 1px solid #eee;
    box-shadow: 10px 10px 0 0 rgba(black, 0.03);
    background: white;
    padding: 10px 30px;
    animation: menu 0.3s ease forwards;

    .option {
      width: 100%;
      border-bottom: 1px solid #eee;
      padding: 20px 0;
      cursor: pointer;
      position: relative;
      z-index: 2;
      text-align: center;

      &:last-child {
        border-bottom: 0;
      }

      * {
        color: inherit;
        text-decoration: none;
        background: none;
        border: 0;
        padding: 0;
        outline: none;
        cursor: pointer;
      }
    }
  }
  @keyframes menu {
    from {
      transform: translate3d(0, 30px, 0);
    }
    to {
      transform: translate3d(0, 20px, 0);
    }
  }
}

.dropDownMenuWrapper--noTitle {
  padding: 0;
  width: 60px;
  height: 60px;
}

.categoryContent {
  width: 60% !important;
  margin: 0 auto;
}
@media only screen and (max-width: 600px) {
  .categoryContent {
    width: 100% !important;
  }
}
</style>
