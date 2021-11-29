<template>
  <div class="page-wrapper">
    <section class="intro-section">
      <div class="intro-content">
        <h1>Award-winning custom designs and digital branding solutions</h1>
        <p>
          With over 10 years in the industry, we are experienced in creating fully responsive websites, app design,
          and engaging brand experiences. Find out more about our services.
        </p>

        <router-link to="/contact" class="site-btn">Learn more</router-link>
      </div>
    </section>

    <section class="portfolio-nav-section">
      <router-link to="/web-design" class="portfolio-nav-block web-design">
        <div class="portfolio-block-content">
          <p class="portfolio-nav-title">Web Design</p>
          <p class="portfolio-sub-title">
            View projects
            <svg width="5" height="10" viewBox="0 0 5 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L5 5L1 9" stroke="#E7816B" stroke-width="2"/>
            </svg>
          </p>
        </div>
      </router-link>

      <div class="portfolio-nav-columns">
        <router-link to="/app-design" class="portfolio-nav-block app-design">
          <div class="portfolio-block-content">
            <p class="portfolio-nav-title">App design</p>
            <p class="portfolio-sub-title">
              View projects
              <svg width="5" height="10" viewBox="0 0 5 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L5 5L1 9" stroke="#E7816B" stroke-width="2"/>
              </svg>
            </p>
          </div>
        </router-link>

        <router-link to="/graphic-design" class="portfolio-nav-block graphic-design">
          <div class="portfolio-block-content">
            <p class="portfolio-nav-title">Graphic Design</p>
            <p class="portfolio-sub-title">
              View projects
              <svg width="5" height="10" viewBox="0 0 5 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L5 5L1 9" stroke="#E7816B" stroke-width="2"/>
              </svg>
            </p>
          </div>
        </router-link>
      </div>
    </section>

    <section class="arguments-section">
      <div class="argument">
        <div class="argument-img-wrapper">
          <img src="@/assets/img/home/desktop/illustration-passionate.svg" alt="Passionate" />
        </div>
        <div class="argument-content">
          <p class="argument-title">PASSIONATE</p>
          <p class="argument-text">
            Each project starts with an in-depth brand research to ensure we only create products that serve a purpose.
            We merge art, design, and technology into exciting new solutions.
          </p>
        </div>
      </div>
      <div class="argument">
        <div class="argument-img-wrapper resourceful-img">
          <img src="@/assets/img/home/desktop/illustration-resourceful.svg" alt="Resourceful" />
        </div>

        <div class="argument-content">
          <p class="argument-title">RESOURCEFUL</p>
          <p class="argument-text">
            Each project starts with an in-depth brand research to ensure we only create products that serve a purpose.
            We merge art, design, and technology into exciting new solutions.
          </p>
        </div>
      </div>
      <div class="argument">
        <div class="argument-img-wrapper friendly-img">
          <img src="@/assets/img/home/desktop/illustration-friendly.svg" alt="Friendly" />
        </div>
        <div class="argument-content">
          <p class="argument-title">FRIENDLY</p>
          <p class="argument-text">
            We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers,
            and we strive to give them the best experience a company can provide.
          </p>
        </div>
      </div>
    </section>

    <c-t-a></c-t-a>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import CTA from '@/components/CTA'

export default {
  components: {CTA},
  head() {
    return {
      title: {
        inner: 'Home'
      },
      meta: [
        {
          name: 'description',
          content: `${this.appTitle} home page`,
          id: 'desc'
        }
      ]
    }
  },
  computed: mapState('app', ['appTitle'])
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';

.page-wrapper {
  &:before,
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

    @media (max-width: 1024px) {
      display: none;
    }
  }

  &:before {
    top: 15%;
    left: 0;
  }

  &:after {
    transform: rotate(-180deg);
    right: 0;
    bottom: 74px;
  }

  section {
    position: relative;
    z-index: 2;
  }

  .intro-section {
    padding: 145px 0 145px 95px;
    background:
      url('../assets/img/home/desktop/bg-pattern-hero-home.svg') top right no-repeat,
      url('../assets/img/home/desktop/image-hero-phone.png') top right -70px no-repeat,
      $primaryColor1;
    border-radius: 15px;

    @media (max-width: 1250px) {
      background:
        url('../assets/img/home/desktop/bg-pattern-hero-home.svg') top right -90px no-repeat,
        url('../assets/img/home/desktop/image-hero-phone.png') top right -160px no-repeat,
        $primaryColor1;
    }

    @media (max-width: 1024px) {
      background:
        url('../assets/img/home/desktop/image-hero-phone.png') top 285px center no-repeat,
        url('../assets/img/home/desktop/bg-pattern-hero-home.svg') top 101px right -113px no-repeat,
        $primaryColor1;

      padding: 60px 58px 458px;
      text-align: center;
    }

    @media (max-width: 767px) {
      padding: 80px 24px 450px;
      border-radius: 0;
    }

    .intro-content {
      max-width: 540px;

      @media (max-width: 1250px) {
        max-width: 430px;
      }

      @media (max-width: 1024px) {
        margin: auto;
        max-width: 575px;
      }

      h1 {
        font-weight: 500;
        font-size: 48px;
        line-height: 48px;
        margin-bottom: 11px;
        color: $white;

        @media (max-width: 767px) {
          font-size: 32px;
          line-height: 36px;
        }
      }

      p {
        margin-top: 25px;
        font-weight: normal;
        font-size: 16px;
        line-height: 26px;
        color: $white;

        @media (max-width: 767px) {
          margin-top: 14px;
          font-size: 15px;
          line-height: 25px;
        }
      }

      .site-btn {
        margin-top: 40px;

        @media (max-width: 1024px) {
          margin-top: 24px;
        }
      }
    }
  }

  .portfolio-nav-section {
    display: flex;
    align-items: stretch;
    width: 100%;
    margin-top: 160px;

    @media (max-width: 1024px) {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-top: 120px;
    }

    @media (max-width: 767px) {
      padding: 0 24px;
    }

    .portfolio-nav-columns {
      width: calc((100% - 30px) / 2);

      @media (max-width: 1024px) {
        width: 100%;
      }
    }

    .portfolio-nav-block {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 107px 88px;
      border-radius: 15px;
      cursor: pointer;

      @media (max-width: 1024px) {
        padding: 53px 88px;
      }

      @media (max-width: 767px) {
        padding: 90px 56px;
      }

      &:hover {
        &:before {
          opacity: .8;
          background-color: $primaryColor1;
        }
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
        opacity: .5;
        pointer-events: none;
        border-radius: 15px;
        z-index: 1;
        transition: all .3s ease-in-out;
      }

      &.web-design {
        width: calc((100% - 30px) /2);
        margin-right: 30px;
        background: url('../assets/img/home/desktop/image-web-design-large.jpg') center/cover no-repeat;

        @media (max-width: 1024px) {
          width: 100%;
          margin: 0 0 24px;
          background: url('../assets/img/home/tablet/image-web-design.jpg') center/cover no-repeat;
        }

        @media (max-width: 767px) {
          background: url('../assets/img/home/mobile/image-web-design.jpg') center/cover no-repeat;
        }
      }

      &.app-design {
        margin-bottom: 30px;
        background: url('../assets/img/home/desktop/image-app-design.jpg') center/cover no-repeat;

        @media (max-width: 1024px) {
          margin-bottom: 24px;
          background: url('../assets/img/home/tablet/image-app-design.jpg') center/cover no-repeat;
        }

        @media (max-width: 767px) {
          margin-bottom: 24px;
          background: url('../assets/img/home/mobile/image-app-design.jpg') center/cover no-repeat;
        }
      }

      &.graphic-design {
        background: url('../assets/img/home/desktop/image-graphic-design.jpg') center/cover no-repeat;

        @media (max-width: 1024px) {
          background: url('../assets/img/home/tablet/image-graphic-design.jpg') center/cover no-repeat;
        }

        @media (max-width: 767px) {
          background: url('../assets/img/home/mobile/image-graphic-design.jpg') center/cover no-repeat;
        }
      }

      .portfolio-block-content {
        position: relative;
        z-index: 2;
      }

      .portfolio-nav-title {
        margin-bottom: 24px;
        font-weight: 500;
        font-size: 40px;
        line-height: 48px;
        color: $white;
        letter-spacing: 2px;
        text-transform: uppercase;
        text-align: center;
      }

      .portfolio-sub-title {
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 500;
        font-size: 15px;
        line-height: 22px;
        letter-spacing: 5px;
        text-transform: uppercase;
        color: $white;

        svg {
          margin-left: 25px;
        }
      }
    }
  }

  .arguments-section {
    display: flex;
    align-items: stretch;
    margin-top: 60px;

    @media (max-width: 1024px) {
      margin-top: 120px;
      flex-direction: column;
    }

    @media (max-width: 767px) {
      padding: 0 40px;
    }

    .argument {
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
          margin-bottom: 32px;
        }

        @media (max-width: 767px) {
          margin-bottom: 80px;
        }
      }

      @media (max-width: 1024px) {
        width: 100%;
      }

      @media (min-width: 768px) and (max-width: 1024px) {
        text-align: left;
        justify-content: left;
        flex-direction: row;
      }

      .argument-img-wrapper {
        position: relative;
        margin-bottom: 48px;

        @media (min-width: 768px) and (max-width: 1024px) {
          margin-bottom: 0;
        }

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

        &.resourceful-img:before {
          transform: matrix(0, 1, 1, 0, 0, 0);
        }

        &.friendly-img:before {
          transform: matrix(0, -1, -1, 0, 0, 0);
        }

        img {
          position: relative;
          z-index: 2;
        }
      }

      .argument-content {
        margin-top: auto;

        @media (min-width: 768px) and (max-width: 1024px) {
          margin: 0 0 0 48px;
        }
      }

      .argument-title {
        margin: 0 0 32px;
        font-weight: 500;
        font-size: 20px;
        line-height: 26px;
        letter-spacing: 5px;
        color: $secondaryColor2;
        text-transform: uppercase;
      }

      .argument-text {
        margin-top: auto;
        font-weight: normal;
        font-size: 16px;
        line-height: 26px;
        color: $secondaryColor2;
      }
    }
  }
}
</style>
