<template>
  <div id="app">
    <HeaderFixed />
    <Section1 />

    <div id="advantages"></div>
    <Section2 />

    <div id="projects"></div>
    <Section3 />

    <div id="prices"></div>
    <Section4 />

    <Section5 />

    <Section6 />

    <div id="about"></div>
    <Section7 />

    <Section8 />

    <Section9 />

    <Section10 />

    <div id="contacts"></div>
    <Section11 />

    <Footer />

    <PopupQuiz />

    <PopupFeedback />

    <PopupSpecial/>

    <Sidebar />
  </div>
</template>

<script>
import HeaderFixed from '@/components/Sections/HeaderFixed.vue';
import Section1 from '@/components/Sections/Section1.vue';
import Section2 from '@/components/Sections/Section2.vue';
import Section3 from '@/components/Sections/Section3.vue';
import Section4 from '@/components/Sections/Section4.vue';
import Section5 from '@/components/Sections/Section5.vue';
import Section6 from '@/components/Sections/Section6.vue';
import Section7 from '@/components/Sections/Section7.vue';
import Section8 from '@/components/Sections/Section8.vue';
import Section9 from '@/components/Sections/Section9.vue';
import Section10 from '@/components/Sections/Section10.vue';
import Section11 from '@/components/Sections/Section11.vue';
import Footer from '@/components/Sections/Footer.vue';
import PopupQuiz from '@/components/Sections/PopupQuiz.vue';
import PopupFeedback from '@/components/Sections/PopupFeedback.vue';
import PopupSpecial from '@/components/Sections/PopupSpecial.vue';
import Sidebar from '@/components/Sections/Sidebar.vue';

export default {
  name: 'App',
  components: {
    HeaderFixed,
    Section1,
    Section2,
    Section3,
    Section4,
    Section5,
    Section6,
    Section7,
    Section8,
    Section9,
    Section10,
    Section11,
    Footer,
    PopupQuiz,
    PopupFeedback,
    PopupSpecial,
    Sidebar,
  },
  methods: {
    scrollPage(event) {
      const scrollTop = this.getBodyScrollTop(event);
      this.$store.dispatch('setScrollTop', scrollTop);
    },
    getBodyScrollTop(event) {
      return event.pageYOffset
        || (event.target.documentElement && event.target.documentElement.scrollTop)
        || (event.target.body && event.target.body.scrollTop);
    },
  },
  created() {
    window.addEventListener('scroll', this.scrollPage, { passive: true });
  },
};
</script>

<style lang="scss">
  @import "../node_modules/bootstrap/scss/functions";
  @import "../node_modules/bootstrap/scss/variables";
  @import "../node_modules/bootstrap/scss/mixins";
  @import "../node_modules/bootstrap/scss/reboot";
  @import "../node_modules/bootstrap/scss/grid";
  @import "../node_modules/bootstrap/scss/utilities";

  @import '../node_modules/swiper/swiper';

  @import "~@/scss/variables";

  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&family=Raleway:wght@400;600;700;800&display=swap');

  body {
    font-family: 'Raleway', sans-serif;
    font-size: 17px;
    line-height: 25px;
    color: #000;

    @media (max-width: 575px) {
      font-size: 14px;
      line-height: 21px;
    }
  }

  a {
    color: #275DE0;
    text-decoration: underline;

    &:hover,
    &:focus {
      text-decoration: none;
      color: #275DE0;
    }
  }

  .text-blue {
    color: #275DE0;
  }

  h1, .h1 {
    font-family: 'Montserrat', sans-serif;
    font-size: 48px;
    line-height: 70px;
    font-weight: 400;

    @media (max-width: 575px) {
      font-size: 21px;
      line-height: 35px;
    }
  }

  h2, .h2 {
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    font-size: 34px;
    line-height: 45px;

    @media (max-width: 575px) {
      font-size: 20px;
      line-height: 30px;
    }
  }

  h3, .h3 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 800;
    font-size: 19px;
    line-height: 30px;

    @media (max-width: 575px) {
      font-size: 14px;
      line-height: 22px;
    }
  }

  .container {

    @media (min-width: 1322px) {
      max-width: 1322px;
    }
  }

  .col-xxl-8 {
    @media (min-width: 1322px) {
      flex: 0 0 66.66667%;
      max-width: 66.66667%;
    }
  }

  .col-xxl-7 {
    @media (min-width: 1322px) {
      flex: 0 0 58.33333%;
      max-width: 58.33333%;
    }
  }

  .col-xxl-5 {
    @media (min-width: 1322px) {
      flex: 0 0 41.66667%;
      max-width: 41.66667%;
    }
  }

  .col-xxl-4 {
    @media (min-width: 1322px) {
      flex: 0 0 33.33333%;
      max-width: 33.33333%;
    }
  }

  .footer a {
    color: #000;
  }

  .d-xxl-block {
    @media (min-width: 1322px) {
      display: block !important;
    }
  }
</style>
