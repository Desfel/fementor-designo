<template>
  <div class="cta-wrapper">
    <div class="cta-content">
      <h2>Let’s talk about your project</h2>
      <p>
        Ready to take it to the next level? Contact us today and find out
        how our expertise can help your business grow.
      </p>
    </div>

    <a href="/contact" class="site-btn">Get in touch</a>
  </div>
</template>

<script>
export default {
  name: "CTA"
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';

.cta-wrapper {
  display: flex;
  align-items: center;
  margin-top: 160px;
  margin-bottom: -72px;
  padding: 72px 95px;
  background: url('../assets/img/shared/desktop/bg-pattern-call-to-action.svg') center right no-repeat, $primaryColor1;
  border-radius: 15px;

  @media (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
    padding: 58px;
    margin-top: 84px;
    margin-bottom: -84px;
    text-align: center;
  }

  @media (max-width: 767px) {
    margin-top: 0;
    margin-right: 24px;
    margin-left: 24px;
    padding: 64px 24px;
    transform: translateY(25%);
  }

  .cta-content {

    h2 {
      max-width: 270px;
      margin-bottom: 10px;
      font-weight: 500;
      font-size: 40px;
      line-height: 40px;
      color: $white;

      @media (max-width: 1024px) {
        margin: 0 auto 14px;
        max-width: 335px;
      }

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

      @media (max-width: 1024px) {
        max-width: 575px;
      }

      @media (max-width: 767px) {
        font-size: 15px;
        line-height: 25px;
      }
    }
  }

  .site-btn {
    margin-left: auto;

    @media (max-width: 1024px) {
      margin: 32px auto 0;
    }
  }
}
</style>
