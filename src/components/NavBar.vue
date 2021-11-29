<template>
  <header class="navbar">
    <router-link to="/home">
      <img alt="Designo" class="logo" src="@/assets/img/logo.png" />
    </router-link>

    <nav class="nav-links">
      <div class="nav-item">
        <router-link to="/about">Our Company</router-link>
        <router-link to="/locations">Locations</router-link>
        <router-link to="/contact">Contact</router-link>
      </div>
    </nav>

    <a href="#" class="trigger-burger" @click.prevent="openBurger">
      <img v-if="!burgerIsOpen" src="@/assets/img/shared/mobile/icon-hamburger.svg" alt="Burger Menu Open" />
      <img v-else src="@/assets/img/shared/mobile/icon-close.svg" alt="Burger Menu Close" />
    </a>

    <nav class="mobile-menu">
      <div class="mobile-items">
        <router-link to="/about" @click.native="openBurger">Our Company</router-link>
        <router-link to="/locations" @click.native="openBurger">Locations</router-link>
        <router-link to="/contact" @click.native="openBurger">Contact</router-link>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      burgerIsOpen: false
    }
  },
  computed: {
    ...mapState('app', ['appTitle', 'appShortTitle'])
  },
  methods: {
    openBurger() {
      this.burgerIsOpen = !this.burgerIsOpen
      this.$emit('triggerBurger', this.burgerIsOpen)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';

.navbar {
  display: flex;
  align-items: center;
  padding: 64px 10% 0;
  margin-bottom: 64px;

  @media (max-width: 1200px) {
    padding: 64px 5% 0;
  }

  @media (max-width: 1024px) {
    padding: 64px 40px 0;
  }

  @media (max-width: 767px) {
    position: fixed;
    padding: 34px 24px;
    margin: 0;
    width: 100%;
    background: $white;
    z-index: 10;
  }

  .logo {
    width: 202px;
  }

  .nav-links {
    margin-left: auto;

    @media (max-width: 767px) {
      display: none;
    }

    .nav-item {
      display: flex;
      align-items: center;

      a {
        font-weight: normal;
        font-size: 14px;
        line-height: 14px;
        /* identical to box height, or 100% */

        letter-spacing: 2px;
        color: $secondaryColor2;
        text-transform: uppercase;

        &:not(:last-child) {
          margin-right: 42px;
        }

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  .trigger-burger {
    margin-left: auto;

    @media (min-width: 768px) {
      display: none;
    }
  }

  .mobile-menu {
    width: 100%;
    position: fixed;
    top: 93px;
    left: -800px;
    padding: 48px 24px;
    background: $black;
    z-index: 9;
    transition: left .5s ease-in-out;

    @media (min-width: 768px) {
      display: none;
    }

    .mobile-items {
      display: flex;
      flex-direction: column;

      a {
        font-weight: normal;
        font-size: 24px;
        line-height: 25px;
        letter-spacing: 2px;
        text-transform: uppercase;
        color: $white;

        &:not(:last-child) {
          margin-bottom: 32px;
        }
      }
    }
  }
}
</style>
