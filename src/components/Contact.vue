<template>
  <div class="page-wrapper">

    <section class="contact-section">
      <div class="contact-content">
        <h1>Contact Us</h1>
        <p>
          Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your
          business grow. If you are looking for unique digital experiences that’s relatable to your users, drop us a line.
        </p>
      </div>

      <div class="contact-form">
        <form action="#" @submit.prevent="validateForm">
          <div class="input-wrapper">
            <div class="input-field">
              <input
                v-model="name"
                :class="{ 'is-error': invalidForm.name }"
                type="text"
                value=""
                name="name"
                placeholder="Name"
              />
            </div>

            <p v-if="invalidForm.name" class="error-message">
              Can't be empty
              <img src="@/assets/img/contact/desktop/icon-error.svg" />
            </p>
          </div>

          <div class="input-wrapper">
            <div class="input-field">
              <input
                v-model="email"
                :class="{ 'is-error': invalidForm.email }"
                type="email"
                value=""
                name="email"
                placeholder="Email Address"
              />
            </div>
            <p v-if="invalidForm.email === 2" class="error-message">
              Can't be empty
              <img src="@/assets/img/contact/desktop/icon-error.svg" />
            </p>
            <p v-else-if="invalidForm.email" class="error-message">
              Please use a valid email address
              <img src="@/assets/img/contact/desktop/icon-error.svg" />
            </p>
          </div>

          <div class="input-wrapper">
            <div class="input-field">
              <input
                type="text"
                value=""
                name="phone"
                placeholder="Phone"
              />
            </div>
          </div>

          <div class="input-wrapper">
            <div class="input-field">
              <textarea
                name="message"
                v-model="message"
                :class="{ 'is-error': invalidForm.message }"
                placeholder="Message"
              ></textarea>
            </div>

            <p v-if="invalidForm.message" class="error-message">
              Can't be empty
              <img src="@/assets/img/contact/desktop/icon-error.svg" />
            </p>
          </div>

          <div class="input-wrapper submit-wrapper">
            <button class="site-btn is-light" type="submit" @click="validateForm">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>

    <section class="locations-section">
      <div class="location-block">
        <div class="location-img">
          <img src="@/assets/img/shared/desktop/illustration-canada.svg" alt="Canada"/>
        </div>

        <div class="location-content">
          <p class="location-title">Canada</p>
          <router-link to="/locations" class="site-btn light-btn">See Location</router-link>
        </div>
      </div>
      <div class="location-block">
        <div class="location-img australia">
          <img src="@/assets/img/shared/desktop/illustration-australia.svg" alt="Australia"/>
        </div>

        <div class="location-content">
          <p class="location-title">Australia</p>
          <router-link to="/locations" class="site-btn light-btn">See Location</router-link>
        </div>
      </div>
      <div class="location-block">
        <div class="location-img uk">
          <img src="@/assets/img/shared/desktop/illustration-united-kingdom.svg" alt="UK"/>
        </div>

        <div class="location-content">
          <p class="location-title">United Kingdom</p>
          <router-link to="/locations" class="site-btn light-btn">See Location</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      name: '',
      email: '',
      message: '',
      invalidForm: {
        name: false,
        email: false,
        message: false
      }
    }
  },
  created() {
    document.querySelector('#app').classList.add('no-cta')
  },
  methods: {
    validateForm(e) {
      e.preventDefault()

      const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      const emailState = emailRegex.test(String(this.email).toLowerCase())

      this.invalidForm.email = this.email.trim() === '' ? 2 : !emailState
      this.invalidForm.name = this.name.trim() === ''
      this.invalidForm.message = this.message.trim() === ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';

.page-wrapper {
  &:after {
    content: '';
    position: absolute;
    display: block;
    width: 1006px;
    height: 594px;
    background: $secondaryColor3;
    opacity: 0.5;
    border-radius: 297px 297px 297px 0;
    z-index: 1;
    transform: rotate(-180deg);
    right: 0;
    bottom: -160px;

    @media (max-width: 1024px) {
      display: none;
    }
  }
  section {
    position: relative;
    z-index: 2;
  }
}

.contact-section {
  display: flex;
  align-items: center;
  padding: 55px 95px;
  background: url('../assets/img/contact/desktop/bg-pattern-hero-desktop.svg') bottom left no-repeat, $primaryColor1;
  border-radius: 15px;

  @media (max-width: 1024px) {
    background-position: top -83px left -121px;
    padding: 70px 58px;
    flex-direction: column;
    align-items: flex-start;
  }

  @media (max-width: 767px) {
    background: url('../assets/img/contact/mobile/bg-pattern-hero-contact-mobile.svg') left -50px top no-repeat, $primaryColor1;
    padding: 72px 24px;
    border-radius: 0;
    text-align: center;
  }

  .contact-content {
    display: flex;
    flex-direction: column;

    @media (max-width: 1024px) {
      margin-bottom: 40px;
    }

    h1 {
      margin-bottom: 32px;
      font-weight: 500;
      font-size: 48px;
      line-height: 48px;
      color: $white;

      @media (max-width: 767px) {
        font-size: 32px;
        line-height: 36px;
      }
    }

    p {
      max-width: 445px;
      font-weight: normal;
      font-size: 16px;
      line-height: 26px;
      color: $white;

      @media (max-width: 1024px) {
        max-width: 100%;
      }

      @media (max-width: 767px) {
        font-size: 15px;
        line-height: 25px;
      }
    }
  }

  .contact-form {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    margin-left: 95px;
    min-width: 0;

    @media (max-width: 1024px) {
      margin-left: 0;
      width: 100%;
    }

    .input-wrapper {
      width: 100%;
      position: relative;

      &:not(:last-child) {
        margin-bottom: 25px;
      }

      &.submit-wrapper {
        display: flex;
      }

      input,
      textarea {
        width: 100%;
        padding: 0 16px 12px;
        font-family: $textFont;
        font-weight: 500;
        font-size: 15px;
        line-height: 26px;
        background: transparent;
        border: none;
        border-bottom: 1px solid $white;
        outline: none;
        color: $white;
        transition: all .3s ease-in-out;

        &::placeholder {
          color: $white;
          opacity: .5;
        }

        &:focus,
        &:not(:placeholder-shown) {
          font-weight: 500;
          border-bottom-width: 3px;
        }
      }

      textarea {
        min-width: 100%;
        max-width: 470px;
        min-height: 102px;
        max-height: 200px;
      }
    }

    .error-message {
      position: absolute;
      top: 0;
      right: 16px;
      display: flex;
      align-items: center;
      color: $white;
      font-style: italic;
      font-weight: normal;
      font-size: 12px;
      line-height: 26px;

      img {
        margin-left: 16px;
      }
    }

    .site-btn {
      margin-left: auto;
      outline: none;
      border: none;
      cursor: pointer;

    }
  }
}

.locations-section {
  display: flex;
  align-items: stretch;
  margin-top: 160px;
  padding-bottom: 160px;

  @media (max-width: 1024px) {
    margin-top: 120px;
    flex-direction: column;
  }

  @media (max-width: 767px) {
    padding: 0 24px 80px;
  }

  .location-block {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: calc((100% - 60px) / 3);

    &:not(:last-child) {
      margin-right: 30px;

      @media (max-width: 1024px) {
        margin-right: 0;
        margin-bottom: 58px;
      }

      @media (max-width: 767px) {
        margin-bottom: 80px;
      }
    }

    @media (max-width: 1024px) {
      width: 100%;
    }

    .location-img {
      position: relative;
      margin-bottom: 48px;

      &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        width: 202px;
        height: 202px;
        background: linear-gradient(90deg, rgba(93, 2, 2, 0.0001) 0%, rgba(93, 2, 2, 0.497569) 100%);
        mix-blend-mode: normal;
        opacity: 0.2;
        transform: matrix(-1, 0, 0, 1, 0, 0);
        border-radius: 50%;
      }

      &.australia:before {
        transform: matrix(0, 1, 1, 0, 0, 0);
      }

      &.uk:before {
        transform: matrix(0, -1, -1, 0, 0, 0);
      }

      img {
        position: relative;
        z-index: 2;
      }
    }

    .location-content {
      margin-top: auto;
    }

    .location-title {
      margin: 0 0 32px;
      font-weight: 500;
      font-size: 20px;
      line-height: 26px;
      letter-spacing: 5px;
      color: $secondaryColor2;
      text-transform: uppercase;
    }
  }
}
</style>
