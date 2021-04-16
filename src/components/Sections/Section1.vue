<template>
  <div class="section">
    <Header class="section__header" />

    <div class="container position-relative">
      <div class="row">
        <div class="col-xl-9 col-xxl-7 text-center">
          <h1 class="section__title" v-html="showTitle"></h1>

          <template v-if="textBanner.big">
            <div class="section__text-big" v-html="textBanner.big"></div>
          </template>

          <template v-if="textBanner.medium">
            <div class="section__text-medium" v-html="textBanner.medium"></div>
          </template>

          <Btn
            :text="btnName"
            :big="true"
            class="px-4 section__btn-icon"
            @click.native.prevent="$store.dispatch('setShowPopupQuiz', true)"
          />

          <template v-if="textBanner.small">
            <div class="section__text-small" v-html="textBanner.small"></div>
          </template>
        </div>
      </div>

      <!-- <div class="row">
        <div class="col-lg-7 col-xl-6 col-xxl-5">
          <BannerBlock
            :text="banner.text"
            :list="banner.list"
            :btnName="banner.btnName"
            :btnText="banner.btnText"
            :smallText="banner.smallText"
            class="section__banner-block"
          />

          <Btn
            :text="btnName"
            :big="true"
            class="px-4 section__btn-icon"
            @click.native.prevent="$store.dispatch('setShowPopupQuiz', true)"
          />
        </div>
      </div> -->

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
        <b>Дом из камня за 3 месяца</b>
      `,
      titleList: [
        {
          utm_campaign: 'GAZOBETON',
          title: '<b>Дом из газобетона за 3 месяца</b>',
        },
        {
          utm_campaign: 'KERAMZITOBLOCK',
          title: '<b>Дом из керамзитоблоков за 3 месяца</b>',
        },
        {
          utm_campaign: 'KERAMOBLOCK',
          title: '<b>Дом из керамических блоков за 3 месяца</b>',
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
      btnName: 'Узнать стоимость',
      textBanner: {
        big: `
          по цене квартиры — от <b>2 000 000</b> руб.
        `,
        medium: `
          Узнай ориентировочную стоимость
          <br>за 1 минуту и получи подарок
        `,
        small: `
          Помогли 130 семьям
          <br>построить теплый дом их мечты
        `,
      },
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
    position: relative;

    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #fff;
      opacity: 0.7;
      display: none;

      @media (max-width: 575px) {
        display: block;
      }
    }

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

      @media (max-width: 575px) {
        margin-bottom: 15px;
      }
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

    &__text-big {
      font-family: 'Montserrat', sans-serif;
      font-size: 34px;
      line-height: 45px;
      margin-bottom: 30px;

      @media (max-width: 575px) {
        font-size: 18px;
        line-height: 28px;
        margin-bottom: 15px;
      }
    }

    &__text-medium {
      font-size: 17px;
      line-height: 28px;
      margin-bottom: 30px;

      @media (max-width: 575px) {
        font-size: 15px;
        line-height: 22px;
        margin-bottom: 15px;
      }
    }

    &__text-small {
      font-size: 15px;
      line-height: 21px;
      margin-top: 20px;

      @media (max-width: 575px) {
        font-size: 13px;
        line-height: 18px;
        margin-top: 15px;
      }
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
