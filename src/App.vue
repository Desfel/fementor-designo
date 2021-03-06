<template>
  <div id="app" :class="[{'is-open': burgerIsOpen}, routeName]">
    <nav-bar @triggerBurger="triggerBurger"></nav-bar>
    <div class="main-wrapper">
      <router-view />
    </div>
    <footer-component></footer-component>

    <new-content-available-toastr
      v-if="newContentAvailable"
      class="new-content-available-toastr"
      :refreshing-app="refreshingApp"
      @refresh="serviceWorkerSkipWaiting"
    ></new-content-available-toastr>
    <apple-add-to-home-screen-modal
      v-if="showAddToHomeScreenModalForApple"
      class="apple-add-to-home-screen-modal"
      @close="closeAddToHomeScreenModalForApple(false)"
    >
    </apple-add-to-home-screen-modal>
  </div>
</template>
<script>
import NavBar from '@/components/NavBar'
import FooterComponent from '@/components/FooterComponent'
import NewContentAvailableToastr from '@/components/NewContentAvailableToastr'
import AppleAddToHomeScreenModal from '@/components/AppleAddToHomeScreenModal'
import { mapState, mapGetters } from 'vuex'

export default {
  data() {
    return {
      burgerIsOpen: false,
      routeName: null
    }
  },
  components: { NavBar, FooterComponent, NewContentAvailableToastr, AppleAddToHomeScreenModal },
  computed: {
    currentRouteName() {
      return this.$route.name
    },
    ...mapGetters('app', ['newContentAvailable']),
    ...mapState('app', ['showAddToHomeScreenModalForApple', 'refreshingApp'])
  },
  watch: {
    '$route': 'currentRoute'
  },
  methods: {
    triggerBurger(value) {
      this.burgerIsOpen = value
    },
    currentRoute() {
      this.$nextTick(() => {
        this.routeName = this.$route.name
        console.log(this.routeName)
      })
    }
  }
}
</script>

<style lang="scss">
@import '@/theme/variables.scss';
html {
  scroll-behavior: smooth;
}

body {
  margin: 0;

  * {
    box-sizing: border-box;
  }

  img {
    vertical-align: middle;
  }

  p,
  h1,
  h2,
  a {
    margin: 0;
    font-family: $textFont;
  }

  a {
    display: inline-block;
    text-decoration: none;
  }

  .site-btn {
    padding: 17px 24px;
    font-weight: 500;
    font-size: 15px;
    line-height: 22px;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: $secondaryColor2;
    background: $white;
    border-radius: 8px;
    transition: all .3s ease-in-out;

    &:hover {
      background: $secondaryColor1;
      color: $white;
    }

    &.light-btn {
      background: $primaryColor1;
      color: $white;

      &:hover {
        background: $secondaryColor1;
      }
    }
  }

  #app {
    position: relative;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 16px;
    color: #2c3e50;

    &.contact {
      footer {
        padding-top: 72px;

        @media (max-width: 767px) {
          padding-top: 64px;
        }
      }
    }

    .new-content-available-toastr {
      position: absolute;
      bottom: 10px;
      right: 10px;
    }

    .apple-add-to-home-screen-modal {
      position: absolute;
      bottom: 0;
      right: 0;
      top: 0;
      left: 0;
      height: fit-content;
      width: fit-content;
      margin: auto;
      z-index: 1000;
    }

    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      width: 100%;
      height: 100%;
      background: $black;
      z-index: 8;
      opacity: 0;
      pointer-events: none;
      transition: opacity .3s ease-in-out;

      @media (min-width: 768px) {
        display: none;
      }
    }

    &.is-open {
      &:before {
        opacity: .5;
        pointer-events: auto;
      }

      .mobile-menu {
        left: 0;
      }
    }

    .main-wrapper {
      .page-wrapper {
        position: relative;
        display: flex;
        flex-direction: column;
        margin: auto;
        padding: 0 10%;

        @media (max-width: 1200px) {
          padding: 0 5%;
        }

        @media (max-width: 1024px) {
          padding: 0 40px;
        }

        @media (max-width: 767px) {
          padding: 93px 0 0;
        }
      }
    }
  }
}
</style>
