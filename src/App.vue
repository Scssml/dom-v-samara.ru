<template>
  <div id="app">
    <Section1 />
    <Section2 />
    <Section3 />
    <Section4 />
    <Section5 />
    <Section6 />
    <Section7 />
    <Section8 />
    <Section9 />
    <Section10 />
    <Section11 />
    <Footer />
  </div>
</template>

<script>
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

export default {
  name: 'App',
  components: {
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
  }

  h2, .h2 {
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    font-size: 34px;
    line-height: 45px;
  }

  h3, .h3 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 800;
    font-size: 19px;
    line-height: 30px;
  }

  .container {

    @media (min-width: 1322px) {
      max-width: 1322px;
    }
  }

  .footer a {
    color: #000;
  }
</style>
