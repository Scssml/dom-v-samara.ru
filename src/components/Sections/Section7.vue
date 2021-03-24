<template>
  <section class="section">
    <div class="container">
      <h2 class="section__title text-center" v-html="title"></h2>

      <div class="row section__advantages">
        <template v-for="(item, index) in advantageList">
          <div class="col-xl-4 mb-4 mb-xl-0" :key="index">
            <AdvantageItem
              :imgSrc="item.imgSrc"
              :text="item.text"
            />
          </div>
        </template>
      </div>

      <div class="row d-none d-xl-flex">
        <template v-for="(item, index) in stepsList">
          <div class="col-lg-3" :key="index">
            <StepItem
              :imgSrc="item.imgSrc"
              :list="item.list"
            />
          </div>
        </template>
      </div>

      <div class="d-xl-none">
        <Slider
          :breakpoints="sliderBreakpoints"
          :id="2"
        >
          <template v-for="(item, index) in stepsList">
            <SwiperSlide :key="index">
              <StepItem
                :imgSrc="item.imgSrc"
                :list="item.list"
              />
            </SwiperSlide>
          </template>
        </Slider>
      </div>
    </div>
  </section>
</template>

<script>
import Slider from '@/components/Base/Slider.vue';
import { SwiperSlide } from 'vue-awesome-swiper';
import AdvantageItem from '@/components/Base/AdvantageItem.vue';
import StepItem from '@/components/Base/StepItem.vue';

export default {
  name: 'Section7',
  components: {
    Slider,
    SwiperSlide,
    AdvantageItem,
    StepItem,
  },
  data() {
    return {
      title: 'Мы выполняем весь комплекс работ',
      sliderBreakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 0,
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
      },
      advantageList: [
        {
          imgSrc: require('@/assets/img/advantages/img-1.webp'),
          text: 'Обеспечим закупку и хранение материала на складе',
        },
        {
          imgSrc: require('@/assets/img/advantages/img-2.webp'),
          text: 'Предоставим еженедельный фото / видео отчет в любой мессенджер',
        },
        {
          imgSrc: require('@/assets/img/advantages/img-3.webp'),
          text: 'Не оставим следов: уберем строительный мусор, сохраним ландшафт',
        },
      ],
      stepsList: [
        {
          imgSrc: require('@/assets/img/steps/img-1.svg'),
          list: [
            'Бесплатная консультация',
            'Разработка индивидуального проекта',
            'Составление техзадания',
            'Договор на проектирование (если нужен проект)',
            'Бесплатный выезд специалиста на участок',
          ],
        },
        {
          imgSrc: require('@/assets/img/steps/img-2.svg'),
          list: [
            'Согласование проекта с Заказчиком',
            'Сметный расчет',
            'Согласование сроков и суммы проекта',
            'Заключение договора',
          ],
        },
        {
          imgSrc: require('@/assets/img/steps/img-3.svg'),
          list: [
            'Проведение геологических изысканий',
            'Еженедельная отправка фото/видео отчетов',
            'Консультации на всех этапах строительства',
            'Выполнение строительства в сроки по договору',
          ],
        },
        {
          imgSrc: require('@/assets/img/steps/img-4.svg'),
          list: [
            'Уборка территории после строительства',
            'Сдача работы',
            'Подписание актов выполненных работ',
            'Начало действия 5-ти летней гарантии',
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
  .section {
    background-color: #F5F5F5;
    background-image: url(~@/assets/img/block7/bg-left.webp),
      url(~@/assets/img/block7/bg-right.webp);
    background-repeat: no-repeat;
    background-position: 40px 100%, 100% calc(100% - 20px);
    padding: 92px 0;

    &__title {
      margin-bottom: 52px;
    }

    &__advantages {
      margin-bottom: 53px;
    }

    @media (max-width: 1321px) {
      background-image: none;
    }

    @media (max-width: 575px) {
      padding: 40px 0 60px;
    }
  }
</style>
