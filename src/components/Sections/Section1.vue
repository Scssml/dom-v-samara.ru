<template>
  <div class="section">
    <Header class="section__header" />

    <div class="container">
      <div class="row">
        <div class="col-xl-9 col-xxl-7">
          <h1 class="section__title" v-html="title"></h1>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-7 col-xl-6 col-xxl-5">
          <BannerBlock
            :text="banner.text"
            :list="banner.list"
            :btnName="banner.btnName"
            :btnText="banner.btnText"
            :smallText="banner.smallText"
            class="section__banner-block"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Sections/Header.vue';
import BannerBlock from '@/components/Base/BannerBlock.vue';

export default {
  name: 'Section1',
  components: {
    Header,
    BannerBlock,
  },
  data() {
    return {
      title: `
        <b>Построим каменный дом в срок от 3 месяцев</b>
        <br>с экономией до 350 000 руб.
      `,
      banner: {
        text: `
          <b>Ответьте на 5 вопросов</b> и узнайте 
          сроки и стоимость строительства
        `,
        list: [
          '<b>Подарок!</b> Бесплатный профессиональный расчет и проект фундамента',
          '<b>Скидка!</b> 4% от стоимости работ',
          '<b>Подарок!</b> Инструкция: "Как сэкономить на строительстве без потери качества дома"',
        ],
        btnName: 'Узнать сроки и стоимость',
        btnText: 'и получить подарки',
        smallText: 'Расчет бесплатный и ни к чему не обязывает',
      },
    };
  },
};
</script>

<style lang="scss" scoped>
  .section {
    background-image: url(~@/assets/img/block1/bg.jpg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    padding-bottom: 47px;

    &__header {
      margin-bottom: 45px;

      @media (max-width: 575px) {
        margin-bottom: 23px;
      }
    }

    &__title {
      margin-bottom: 39px;

      @media (max-width: 575px) {
        margin-bottom: 336px;
      }
    }

    &__banner-block {
      margin: 0 -15px;
    }

    @media (max-width: 575px) {
      background-image: url(~@/assets/img/block1/bg-small.jpg);
      background-position: top;
      background-size: auto 616px;
      padding-bottom: 0;
    }
  }
</style>
