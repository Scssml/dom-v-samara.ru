<template>
  <div class="section">
    <Header class="section__header" />

    <div class="container position-relative">
      <div class="row">
        <div class="col-xl-9 col-xxl-7">
          <h1 class="section__title" v-html="showTitle"></h1>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-7 col-xl-6 col-xxl-5">
          <!-- <BannerBlock
            :text="banner.text"
            :list="banner.list"
            :btnName="banner.btnName"
            :btnText="banner.btnText"
            :smallText="banner.smallText"
            class="section__banner-block"
          /> -->

          <Btn
            :text="btnName"
            :big="true"
            class="px-4 section__btn-icon"
            @click.native.prevent="$store.dispatch('setShowPopupQuiz', true)"
          />
        </div>
      </div>

      <BannerBtn
        :imgSrc="bannerBtn.imgSrc"
        :text="bannerBtn.text"
        :link="bannerBtn.link"
        class="section__banner-btn"
        @click.native.prevent="$store.dispatch('setShowPopupFeedback', true)"
      />
    </div>

    <FixedBtn
      :text="fixedBtn.text"
      :iconSrc="fixedBtn.iconSrc"
      @click.native.prevent="$store.dispatch('setShowPopupSpecial', true)"
    />
  </div>
</template>

<script>
import Header from '@/components/Sections/Header.vue';
// import BannerBlock from '@/components/Base/BannerBlock.vue';
import BannerBtn from '@/components/Base/BannerBtn.vue';
import FixedBtn from '@/components/Base/FixedBtn.vue';
import Btn from '@/components/Base/Btn.vue';

export default {
  name: 'Section1',
  components: {
    Header,
    // BannerBlock,
    BannerBtn,
    FixedBtn,
    Btn,
  },
  data() {
    return {
      title: `
        <b>Каменный дом за 3 месяца с экономией на строительстве до 350 000 руб.</b>
      `,
      titleList: [
        {
          utm_campaign: 'GAZOBETON',
          title: '<b>Дом из газобетона за 3 месяца с экономией на строительстве до 350 000 руб.</b>',
        },
        {
          utm_campaign: 'KERAMZITOBLOCK',
          title: '<b>Дом из керамзитоблоков за 3 месяца с экономией на строительстве до 350 000 руб.</b>',
        },
        {
          utm_campaign: 'KERAMOBLOCK',
          title: '<b>Дом из керамических блоков за 3 месяца с экономией на строительстве до 350 000 руб.</b>',
        },
      ],
      strGet: '',
      banner: {
        text: `
          <b>Узнайте стоимость дома</b> и получите в подарок
        `,
        list: [
          '<b>Подарок!</b> Авторский проект дома с большой террасой <del>25 000 руб.</del> бесплатно',
          '<b>Подарок!</b> Авторский проект дома для узкого / небольшого участка <del>25 000 руб.</del> бесплатно',
          '<b>Подарок!</b> Бесплатная консультация "Сократить стоимость строительства дома на сумму до 350 000 руб. без потери качества"',
        ],
        btnName: 'Узнать сроки и стоимость',
        btnText: 'и получить подарки',
        smallText: 'Расчет бесплатный и ни к чему не обязывает',
      },
      bannerBtn: {
        imgSrc: require('@/assets/img/banner/icon.svg'),
        text: 'Популярный<br>проект 2020 года',
        link: 'Узнать цену',
      },
      fixedBtn: {
        text: 'Спецпредложение 2021 г.',
        iconSrc: require('@/assets/img/fixedBtn/icon.svg'),
      },
      btnName: 'Получите особое предложение',
    };
  },
  computed: {
    showTitle() {
      const result = this.titleList.find((item) => this.strGet.indexOf(item.utm_campaign) !== -1);
      return (result) ? result.title : this.title;
    },
  },
  created() {
    this.strGet = window.location.search;
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
    // min-height: calc(100vh - 30px);
    min-height: 850px;

    &__header {
      margin-bottom: 45px;

      @media (max-width: 575px) {
        margin-bottom: 23px;
      }
    }

    &__title {
      margin-bottom: 39px;

      // @media (max-width: 575px) {
      //   margin-bottom: 336px;
      // }
    }

    &__banner-block {

      @media (max-width: 575px) {
        margin: 0 -15px;
      }
    }

    &__banner-btn {
      position: absolute;
      top: 250px;
      right: 100px;

      @media (max-width: 1321px) {
        right: 50px;
      }

      @media (max-width: 1199px) {
        display: none;
      }
    }

    &__btn-icon:before {
      content: '';
      display: block;
      width: 36px;
      height: 36px;
      background-image: url(~@/assets/img/banner/gift-icon.svg);
      background-repeat: no-repeat;
      background-position: center;
      flex-shrink: 0;
      margin-right: 15px;
    }

    @media (max-width: 575px) {
      background-image: url(~@/assets/img/block1/bg-small.jpg);
      background-position: top;
      background-size: auto 616px;
      padding-bottom: 0;
      min-height: 600px;
    }
  }
</style>
