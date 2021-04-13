<template>
  <v-container>
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
          <div class="menuArrow" />
          <section class="option">
            <router-link to="/commonwords">Common words</router-link>
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
  </v-container>
</template>

<script>
export default {
  name: "CategoryNav",
  data() {
    return {
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
  },
};
</script>

<style lang="scss" scoped>
.dropDownMenuWrapper {
  z-index: 2;
  position: relative;
  margin: 0 auto;
  margin-bottom: 20px;
  width: 250px;
  height: 40px;
  border-radius: 8px;
  background: rgba(46, 117, 173, 0.7);

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
</style>