<template>
  <div class="page-wrapper">
    <section class="intro-section">
      <div class="intro-content">
        <h1>About Us</h1>
        <p>
          Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered
          with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always
          looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences.
        </p>
      </div>
      <div class="intro-img"></div>
    </section>

    <section class="about-section about-1">
      <div class="about-img"></div>

      <div class="about-content">
        <h2>World-class talent</h2>
        <p>
          We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from
          concept to launch, ensuring success in its given market.
          We are constantly updating our skills in a myriad of platforms.
        </p>
        <p>
          Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as
          important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been
          impressed with our high-quality outcomes that encapsulates their brand’s story and mission.
        </p>
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

    <section class="about-section about-2">
      <div class="about-content">
        <h2>The real deal</h2>
        <p>
          As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own.
          Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective
          to every opportunity. We make design and technology more accessible and give you tools to measure success.
        </p>
        <p>
          We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies,
          we inspire audiences to take action and drive real results.
        </p>
      </div>

      <div class="about-img"></div>
    </section>

    <c-t-a></c-t-a>
  </div>
</template>

<script>
import CTA from '@/components/CTA'

export default {
  name: "About",
  components: {CTA}
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
}

.intro-section {
  display: flex;
  align-items: stretch;
  background: url('../assets/img/about/desktop/bg-pattern-hero-about-desktop.svg') bottom left no-repeat, $primaryColor1;
  border-radius: 15px;

  @media (max-width: 1024px) {
    background-position: top -110px left -121px;
    flex-direction: column-reverse;
  }

  @media (max-width: 767px) {
    background: url('../assets/img/about/desktop/bg-pattern-hero-about-desktop.svg') top 50% right/292px 292px no-repeat, $primaryColor1;
  }

  @media (max-width: 767px) {
    border-radius: 0;
  }

  .intro-content {
    display: flex;
    align-items: stretch;
    justify-content: center;
    text-align: left;
    flex-direction: column;
    padding: 135px 95px;

    @media (max-width: 1024px) {
      text-align: center;
      align-items: center;
      padding: 64px 60px;
    }

    @media (max-width: 767px) {
      padding: 80px 24px;
    }

    h1 {
      margin-bottom: 32px;
      font-weight: 500;
      font-size: 48px;
      line-height: 48px;
      color: $white;
      text-align: left;

      @media (max-width: 767px) {
        font-size: 32px;
        line-height: 36px;
      }
    }

    p {
      max-width: 460px;
      font-weight: normal;
      font-size: 16px;
      line-height: 26px;
      color: $white;

      @media (max-width: 767px) {
        font-size: 15px;
        line-height: 25px;
      }
    }
  }

  .intro-img {
    margin-left: auto;
    width: 476px;
    background: url('../assets/img/about/desktop/image-about-hero.jpg') center/cover no-repeat;
    border-radius: 0 15px 15px 0;
    overflow: hidden;

    @media (max-width: 1024px) {
      width: 100%;
      height: 320px;
      background: url('../assets/img/about/tablet/image-about-hero.jpg') center/cover no-repeat;
      border-radius: 15px 15px 0 0;
    }

    @media (max-width: 767px) {
      background: url('../assets/img/about/mobile/image-about-hero.jpg') center/cover no-repeat;
    }
  }
}

.about-section {
  display: flex;
  align-items: stretch;
  border-radius: 15px;
  margin-top: 160px;
  background: url('../assets/img/shared/desktop/bg-pattern-three-circles.svg') bottom center no-repeat, $secondaryColor4;

  @media (max-width: 1024px) {
    margin-top: 120px;
    flex-direction: column;
    background: url('../assets/img/shared/desktop/bg-pattern-three-circles.svg') center no-repeat, $secondaryColor4;
  }

  @media (max-width: 767px) {
    margin-top: 0;
    border-radius: 0;
    background-position: bottom left;
  }

  &.about-2 {
    background-position: bottom left;

    @media (max-width: 1024px) {
      flex-direction: column-reverse;
      background-position: center;
    }

    @media (max-width: 767px) {
      margin-top: 120px;
      background-position: bottom left;
    }

    .about-img {
      border-radius: 0 15px 15px 0;
      background: url('../assets/img/about/desktop/image-real-deal.jpg') center/cover no-repeat;

      @media (max-width: 1024px) {
        border-radius: 15px 15px 0 0;
        background: url('../assets/img/about/tablet/image-real-deal.jpg') center/cover no-repeat;
      }

      @media (max-width: 767px) {
        border-radius: 0;
      }
    }
  }

  .about-content {
    display: flex;
    align-items: stretch;
    justify-content: center;
    text-align: left;
    flex-direction: column;
    padding: 130px 95px;
    margin: auto;

    @media (max-width: 1024px) {
      text-align: center;
      align-items: center;
      padding: 64px 60px;
    }

    @media (max-width: 767px) {
      padding: 80px 24px;
    }

    h2 {
      margin-bottom: 32px;
      font-weight: 500;
      font-size: 48px;
      line-height: 48px;
      color: $primaryColor1;
      text-align: left;

      @media (max-width: 767px) {
        font-size: 32px;
        line-height: 36px;
      }
    }

    p {
      max-width: 460px;
      font-weight: normal;
      font-size: 16px;
      line-height: 26px;
      color: $secondaryColor2;
      margin-bottom: -32px;

      &:not(:only-child) {
        margin-bottom: 32px;
      }

      @media (max-width: 767px) {
        font-size: 15px;
        line-height: 25px;
      }
    }
  }

  .about-img {
    width: 476px;
    background: url('../assets/img/about/desktop/image-world-class-talent.jpg') center/cover no-repeat;
    border-radius: 15px 0 0 15px;
    overflow: hidden;

    @media (max-width: 1024px) {
      width: 100%;
      height: 320px;
      background: url('../assets/img/about/tablet/image-world-class-talent.jpg') center/cover no-repeat;
      border-radius: 15px 15px 0 0;
    }

    @media (max-width: 767px) {
      border-radius: 0;
      background: url('../assets/img/about/mobile/image-world-class-talent.jpg') center/cover no-repeat;
    }
  }
}

.locations-section {
  display: flex;
  align-items: stretch;
  margin-top: 160px;

  @media (max-width: 1024px) {
    margin-top: 120px;
    flex-direction: column;
  }

  @media (max-width: 767px) {
    padding: 0 24px;
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
