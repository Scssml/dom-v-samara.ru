<template>
  <div class="section">
    <Header class="section__header" />

    <div class="container position-relative">
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
import BannerBlock from '@/components/Base/BannerBlock.vue';
import BannerBtn from '@/components/Base/BannerBtn.vue';
import FixedBtn from '@/components/Base/FixedBtn.vue';

export default {
  name: 'Section1',
  components: {
    Header,
    BannerBlock,
    BannerBtn,
    FixedBtn,
  },
  data() {
    return {
      title: `
        <b>Каменный дом за 3 месяца с экономией на строительстве</b>
        <br>до 350 000 руб.
      `,
      banner: {
        text: `
          <b>Ответьте на 4 вопроса</b> и получите в подарок
        `,
        list: [
          '<b>Подарок!</b> Авторский проект дома с большой террасой + цена',
          '<b>Подарок!</b> Авторский проект дома для узкого / небольшого участка + цена',
          '<b>Подарок!</b> Бесплатная консультация "Сократить стоимость строительства дома без потери качества"',
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

    @media (max-width: 575px) {
      background-image: url(~@/assets/img/block1/bg-small.jpg);
      background-position: top;
      background-size: auto 616px;
      padding-bottom: 0;
    }
  }
</style>
