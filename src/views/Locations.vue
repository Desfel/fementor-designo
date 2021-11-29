<template>
  <div class="page-wrapper">
    <section class="map-wrapper">
      <div class="map-content">
        <p class="country-title">Canada</p>

        <div class="contact-wrapper">
          <div class="contact-columns">
            <p>
              <strong>Designo Central Office</strong> <br />
              3886 Wellington Street <br />
              Toronto, Ontario M9C 3J5
            </p>
          </div>
          <div class="contact-columns">
            <p>
              <strong>Contact</strong> <br />
              P : +1 253-863-8967 <br />
              M : contact@designo.co
            </p>
          </div>
        </div>
      </div>

      <div class="map-img canada"></div>
    </section>

    <section class="map-wrapper reverse-row">
      <div class="map-content">
        <p class="country-title">Australia</p>

        <div class="contact-wrapper">
          <div class="contact-columns">
            <p>
              <strong>Designo AU Office</strong> <br />
              19 Balonne Street <br />
              New South Wales 2443
            </p>
          </div>
          <div class="contact-columns">
            <p>
              <strong>Contact</strong> <br />
              P : (02) 6720 9092 <br />
              M : contact@designo.au
            </p>
          </div>
        </div>
      </div>

      <div class="map-img australia"></div>
    </section>

    <section class="map-wrapper">
      <div class="map-content">
        <p class="country-title">United Kingdom</p>

        <div class="contact-wrapper">
          <div class="contact-columns">
            <p>
              <strong>Designo UK Office</strong> <br />
              13  Colorado Way <br />
              Rhyd-y-fro SA8 9GA
            </p>
          </div>
          <div class="contact-columns">
            <p>
              <strong>Contact</strong> <br />
              P : 078 3115 1400 <br />
              M : contact@designo.uk
            </p>
          </div>
        </div>
      </div>

      <div class="map-img uk"></div>
    </section>

    <c-t-a></c-t-a>
  </div>
</template>

<script>
import CTA from '@/components/CTA'

export default {
  name: "Locations",
  components: {CTA}
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';

.map-wrapper {
  display: flex;
  align-items: stretch;

  &:not(:last-child) {
    margin-bottom: 32px;

    @media (max-width: 1024px) {
      margin-bottom: 120px;
    }

    @media (max-width: 767px) {
      margin-bottom: 40px;
    }
  }

  @media (max-width: 1024px) {
    flex-direction: column-reverse;
  }

  &.reverse-row {
    flex-direction: row-reverse;

    @media (max-width: 1024px) {
      flex-direction: column-reverse;
    }

    .map-img {
      margin-left: 0;
      margin-right: 30px;

      @media (max-width: 1024px) {
        margin-right: 0;
      }
    }
  }

  .map-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 88px 5%;
    background: url('../assets/img/shared/desktop/bg-pattern-two-circles.svg') left bottom no-repeat, $secondaryColor4;
    flex-grow: 1;
    border-radius: 15px;

    @media (max-width: 767px) {
      border-radius: 0;
    }

    .country-title {
      font-weight: 500;
      font-size: 40px;
      line-height: 48px;
      color: $primaryColor1;
    }

    .contact-wrapper {
      display: flex;
      align-items: center;
      margin-top: 24px;

      .contact-columns {
        font-size: 16px;
        line-height: 26px;

        &:first-child {
          margin-right: 100px;
        }
      }
    }
  }

  .map-img {
    width: 350px;
    height: 326px;
    margin-left: 30px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 15px;

    @media (max-width: 1024px) {
      margin-left: 0;
      margin-bottom: 30px;
      width: 100%;
    }

    @media (max-width: 767px) {
      border-radius: 0;
      margin-bottom: 0;
    }

    &.canada {
      background-image: url('../assets/img/locations/desktop/image-map-canada.png');

      @media (max-width: 1024px) {
        background-image: url('../assets/img/locations/tablet/image-map-canada.png');
      }
    }

    &.australia {
      background-image: url('../assets/img/locations/desktop/image-map-australia.png');

      @media (max-width: 1024px) {
        background-image: url('../assets/img/locations/tablet/image-map-australia.png');
      }
    }

    &.uk {
      background-image: url('../assets/img/locations/desktop/image-map-united-kingdom.png');

      @media (max-width: 1024px) {
        background-image: url('../assets/img/locations/tablet/image-map-uk.png');
      }
    }
  }
}
</style>
