<template>
  <Popup
    :value="showPopupSpecial"
    :small="popupSmall"
    @close="close()"
  >
    <div class="special-block">
      <h2 class="text-center" v-html="title"></h2>

      <div class="text-center">
        <div class="special-block__name">{{ name }}</div>
      </div>

      <div class="row">
        <div class="col-md-5 col-lg-6">
          <div class="special-block__slider">
            <Slider
              :breakpoints="sliderBreakpoints"
              :id="7"
            >
              <template v-for="(item, index) in sliderImg">
                <SwiperSlide :key="index">
                  <div class="special-block__img">
                    <img :src="item" alt="special" loading="lazy" />
                  </div>
                </SwiperSlide>
              </template>
            </Slider>
          </div>
        </div>

        <div class="col-md-7 col-lg-6">
          <div class="special-block__text" v-html="text"></div>

          <List :list="list" class="special-block__list" />

          <div class="row align-items-center mb-4">
            <div class="col-auto">
              <div class="special-block__price">{{ price }}</div>
            </div>

            <div class="col-auto">
              <div class="special-block__price-old">{{ oldPrice }}</div>
            </div>
          </div>

          <template v-if="link">
            <a :href="link.href" class="special-block__link">{{ link.name }}</a>
          </template>
        </div>
      </div>

      <FormBlock4 :formProps="formProps" />
    </div>
  </Popup>
</template>

<script>
import Popup from '@/components/Base/Popup.vue';
import Slider from '@/components/Base/Slider.vue';
import { SwiperSlide } from 'vue-awesome-swiper';
import List from '@/components/Base/List.vue';
import FormBlock4 from '@/components/Base/FormBlock4.vue';

export default {
  name: 'PopupSpecial',
  components: {
    Popup,
    Slider,
    SwiperSlide,
    List,
    FormBlock4,
  },
  data() {
    return {
      popupSmall: false,
      title: 'Дом со свободной планировкой',
      name: 'Спецпредложение 2021 года',
      sliderImg: [
        require('@/assets/img/special/img-1.jpg'),
        require('@/assets/img/special/img-2.jpg'),
        require('@/assets/img/special/img-3.jpg'),
        require('@/assets/img/special/img-4.jpg'),
      ],
      text: '<b>Преимущества</b>',
      list: [
        'получите большой дом по цене квартиры',
        'есть вариант с большой террасой и для узкого / маленького участка',
        'проект позволяет воплотить любую планировку, которая Вам необходима',
        'выгода на строительство дома составляет до 350 000 руб',
      ],
      price: 'от 2.000.000 ₽',
      oldPrice: 'от 2.350.000 ₽',
      link: null,
      // link: {
      //   name: 'Скачать проект дома',
      //   href: '',
      // },
      formProps: {
        items: [
          {
            name: 'phone',
            placeholder: 'Ваш телефон',
            required: true,
            type: 'tel',
            value: '',
            mask: '+7 (999) 999-99-99',
            pattern: '^\\+7\\s\\([0-9]{3}\\)\\s[0-9]{3}-[0-9]{2}-[0-9]{2}$',
            title: '+7 (___) ___-__-__',
          },
        ],
        btnName: 'Запросить смету',
        id: 'special',
      },
      sliderBreakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
      },
    };
  },
  computed: {
    showPopupSpecial() {
      return this.$store.getters.getShowPopupSpecial;
    },
  },
  methods: {
    close() {
      this.$store.dispatch('setShowPopupSpecial', false);
      this.$store.dispatch('setDisablePopupSpecial', true);
      sessionStorage.setItem('disablePopupSpecial', true);
    },
  },
};
</script>

<style lang="scss" scoped>
  .special-block {

    h2 {
      margin-bottom: 14px;
    }

    &__name {
      display: inline-block;
      font-family: Montserrat;
      font-weight: bold;
      font-size: 19px;
      line-height: 30px;
      text-align: center;
      text-transform: uppercase;
      color: #FFFFFF;
      background: #F3AF01;
      position: relative;
      padding: 10px 5px;
      margin: 0 15px 26px;
      text-decoration: none;

      &:before,
      &:after {
        content: '';
        position: absolute;
        top: 0;

        @media (max-width: 575px) {
          display: none;
        }
      }

      &:before {
        border-bottom: 50px solid #F3AF01;
        border-left: 15px solid transparent;
        left: -15px;
        top: 0;
      }

      &:after {
        border-top: 50px solid #F3AF01;
        border-right: 15px solid transparent;
        right: -15px;
        top: 0;
      }

      @media (max-width: 575px) {
        width: 100%;
        margin: 0 0 26px;
      }
    }

    &__slider {
      padding-bottom: 60px;
    }

    &__img {
      height: 284px;

      img {
        object-fit: scale-down;
        object-position: center;
        width: 100%;
        height: 100%;
      }

      @media (max-width: 575px) {
        height: 200px;
      }
    }

    &__text {
      margin-bottom: 10px;
    }

    &__list {
      margin-bottom: 17px;
    }

    &__price {
      font-family: 'Montserrat', sans-serif;
      font-weight: 500;
      font-size: 21px;
      line-height: 30px;
      letter-spacing: 0.05em;
    }

    &__price-old {
      font-family: 'Montserrat', sans-serif;
      font-weight: 500;
      font-size: 15px;
      line-height: 30px;
      letter-spacing: 0.05em;
      color: #737373;
      position: relative;

      &:after {
        content: '';
        position: absolute;
        width: 100%;
        height: 1px;
        background: #737373;
        top: 50%;
        left: 0;
      }
    }

    &__link {
      font-weight: 600;
      font-size: 14px;
      line-height: 50px;
      letter-spacing: 0.05em;
      text-decoration-line: underline;
      text-transform: uppercase;
    }
  }
</style>
