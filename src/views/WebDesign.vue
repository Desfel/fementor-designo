<template>
  <div class="page-wrapper">
    <section class="intro-section">
      <h1>Web Design</h1>
      <p>We build websites that serve as powerful marketing tools
        and bring memorable brand experiences.</p>
    </section>

    <section class="articles-section">
      <div class="article-card">
        <router-link to="#">
          <div class="article-img">
            <img src="@/assets/img/web-design/desktop/image-express.jpg" alt="Express" />
          </div>

          <div class="article-content">
            <p class="article-title">EXPRESS</p>
            <p class="article-brief">A multi-carrier shipping website for ecommerce businesses</p>
          </div>
        </router-link>
      </div>
      <div class="article-card">
        <router-link to="#">
          <div class="article-img">
            <img src="@/assets/img/web-design/desktop/image-transfer.jpg" alt="Transfer" />
          </div>

          <div class="article-content">
            <p class="article-title">TRANSFER</p>
            <p class="article-brief">Site for low-cost money transfers and sending money within seconds</p>
          </div>
        </router-link>
      </div>
      <div class="article-card">
        <router-link to="#">
          <div class="article-img">
            <img src="@/assets/img/web-design/desktop/image-photon.jpg" alt="PHOTON" />
          </div>

          <div class="article-content">
            <p class="article-title">PHOTON</p>
            <p class="article-brief">A state-of-the-art music player with high-resolution audio and DSP effects</p>
          </div>
        </router-link>
      </div>
      <div class="article-card">
        <router-link to="#">
          <div class="article-img">
            <img src="@/assets/img/web-design/desktop/image-builder.jpg" alt="BUILDER" />
          </div>

          <div class="article-content">
            <p class="article-title">BUILDER</p>
            <p class="article-brief">Connects users with local contractors based on their location</p>
          </div>
        </router-link>
      </div>
      <div class="article-card">
        <router-link to="#">
          <div class="article-img">
            <img src="@/assets/img/web-design/desktop/image-blogr.jpg" alt="BLOGR" />
          </div>

          <div class="article-content">
            <p class="article-title">BLOGR</p>
            <p class="article-brief">Blogr is a platform for creating an online blog or publication</p>
          </div>
        </router-link>
      </div>
      <div class="article-card">
        <router-link to="#">
          <div class="article-img">
            <img src="@/assets/img/web-design/desktop/image-camp.jpg" alt="CAMP" />
          </div>

          <div class="article-content">
            <p class="article-title">CAMP</p>
            <p class="article-brief">Get expert training in coding, data, design, and digital marketing</p>
          </div>
        </router-link>
      </div>
    </section>

    <section class="navigation-section">
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
    </section>

    <c-t-a></c-t-a>
  </div>
</template>

<script>
import CTA from '@/components/CTA'

export default {
  name: "WebDesign",
  components: {CTA}
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';

.page-wrapper {
  &:before {
    content: '';
    position: absolute;
    top: 5%;
    left: 0;
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

  section {
    position: relative;
    z-index: 2;
  }
}

.intro-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 64px 90px;
  background: url('../assets/img/web-design/desktop/bg-pattern-intro-web.svg') center right no-repeat $primaryColor1;
  border-radius: 15px;

  @media (max-width: 767px) {
    padding: 105px 24px;
    border-radius: 0;
  }

  h1 {
    font-weight: 500;
    font-size: 48px;
    line-height: 48px;
    margin-bottom: 24px;
    color: $white;

    @media (max-width: 767px) {
      font-size: 32px;
      line-height: 36px;
    }
  }

  p {
    max-width: 400px;
    font-weight: normal;
    font-size: 16px;
    line-height: 26px;
    text-align: center;
    color: $white;

    @media (max-width: 767px) {
      font-size: 15px;
      line-height: 25px;
    }
  }
}

.articles-section {
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  margin-top: 160px;
  margin-bottom: -30px;
  width: 100%;

  @media (max-width: 1024px) {
    margin-top: 120px;
    margin-bottom: 0;
    flex-direction: column;
  }

  @media (max-width: 767px) {
    margin-top: 96px;
    padding: 0 24px;
  }

  .article-card {
    display: flex;
    flex-direction: column;
    width: calc((100% - 60px) / 3);
    margin-bottom: 30px;
    border-radius: 15px;
    background: $secondaryColor4;
    transition: background-color .3s ease-in-out;

    @media (max-width: 1024px) {
      width: 100%;
    }

    &:hover {
      background: $primaryColor1;

      .article-content {
        .article-title,
        .article-brief {
          color: $white;
        }
      }
    }

    &:not(:nth-child(3n + 3)) {
      margin-right: 30px;
    }

    a {
      @media (min-width: 768px) and (max-width: 1024px) {
        display: flex;
        align-items: center;
      }
    }

    .article-img {
      width: 100%;

      @media (min-width: 768px) and (max-width: 1024px) {
        width: 50%;
      }

      img {
        border-radius: 15px 15px 0 0;
        object-fit: cover;
        width: 100%;
        height: 100%;

        @media (min-width: 768px) and (max-width: 1024px) {
          border-radius: 15px 0 0 15px;
        }
      }
    }

    .article-content {
      padding: 32px;
      text-align: center;

      @media (min-width: 768px) and (max-width: 1024px) {
        width: 50%;
      }

      p {
        transition: color .3s ease-in-out;
      }

      .article-title {
        font-weight: 500;
        font-size: 20px;
        line-height: 26px;
        letter-spacing: 5px;
        color: $primaryColor1;
        margin-bottom: 16px;
      }

      .article-brief {
        font-weight: normal;
        font-size: 16px;
        line-height: 26px;
        color: $secondaryColor2;
      }
    }
  }
}

.navigation-section {
  display: flex;
  align-items: stretch;
  margin-top: 160px;

  @media (max-width: 1024px) {
    margin-top: 120px;
    margin-bottom: 40px;
    flex-direction: column;
  }

  @media (max-width: 767px) {
    margin-top: 96px;
    margin-bottom: 30px;
    padding: 0 24px;
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
    width: calc((100% - 30px) / 2);

    &:first-child {
      margin-right: 30px;

      @media (max-width: 1024px) {
        margin-right: 0;
        margin-bottom: 30px;
      }
    }

    @media (max-width: 1024px) {
      width: 100%;
    }

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
      background: url('../assets/img/home/desktop/image-app-design.jpg') center/cover no-repeat;

      @media (max-width: 1024px) {
        background: url('../assets/img/home/tablet/image-app-design.jpg') center/cover no-repeat;
      }

      @media (max-width: 767px) {
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
</style>
