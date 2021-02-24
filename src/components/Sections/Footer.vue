<template>
  <footer class="footer">
    <div class="container">
      <div class="row align-items-center justify-content-between">
        <div class="col-lg-auto" v-html="leftText"></div>

        <div class="col-lg-auto">
          <Logo
            :src="logo.src"
            :text="logo.text"
          />
        </div>

        <div class="col-lg-auto" v-html="rightText"></div>
      </div>
    </div>

    <div class="footer__bottom">
      <div class="container" v-html="bottomText"></div>
    </div>
  </footer>
</template>

<script>
import Logo from '@/components/Base/Logo.vue';

export default {
  name: 'Footer',
  components: {
    Logo,
  },
  data() {
    return {
      logo: {
        src: require('@/assets/img/logo.png'),
        text: 'Фундаменты Волга',
      },
      leftText: '© Фундаменты Волга, Все права защищены.',
      rightText: '<a href="">Политика конфиденциальности</a>',
      bottomText: `
        *Вся представленная на сайте информация носит информационный характер и не является
        публичной офертой
      `,
    };
  },
};
</script>

<style lang="scss" scoped>
  .footer {
    font-size: 16px;
    line-height: 27px;
    padding: 20px 0 15px;

    &__bottom {
      padding-top: 15px;
      margin-top: 20px;
      border-top: 1px solid #F1F1F1;
      text-align: center;
      font-size: 14px;
    }
  }
</style>
