<template>
  <section class="section">
    <div class="container">
      <h2 class="section__title text-center" v-html="title"></h2>

      <div class="row">
        <template v-for="(item, index) in projectList">
          <div class="col-lg-6 col-xl-3 mb-4 mb-xl-0 d-none d-xl-block" :key="index">
            <ProjectItem
              :imgSrc="item.imgSrc"
              :name="item.title"
              :props="item.props"
              :planSrc="item.planSrc"
              @showPopup="showProjectPopup = index"
            />
          </div>
        </template>

        <template v-for="(item, index) in projectList">
          <Popup
            :value="showProjectPopup === index"
            :small="false"
            @close="showProjectPopup = null"
            :key="`popup-project-${index}`"
          >
            <h2 class="text-center mb-3" v-html="popupTitle"></h2>
            <p class="text-center mb-4">дом "{{ item.title }}"</p>

            <template v-if="item.planSrc">
              <div class="text-center">
                <img :src="item.planSrc" :alt="item.title" loading="lazy" />
              </div>
            </template>
          </Popup>
        </template>

        <div class="section__slider col-md-7 col-lg-8 d-xl-none">
          <Slider
            :breakpoints="sliderBreakpoints"
            :id="1"
          >
            <template v-for="(item, index) in projectList">
              <SwiperSlide :key="index">
                <ProjectItem
                  :imgSrc="item.imgSrc"
                  :name="item.title"
                  :props="item.props"
                  :planSrc="item.planSrc"
                  @showPopup="showProjectPopup = index"
                />
              </SwiperSlide>
            </template>
          </Slider>
        </div>

        <div class="col-md-5 col-lg-4 col-xl-3">
          <CatalogBlock
            :imgSrc="catalogBlock.imgSrc"
            :title="catalogBlock.title"
            :text="catalogBlock.text"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Slider from '@/components/Base/Slider.vue';
import { SwiperSlide } from 'vue-awesome-swiper';
import ProjectItem from '@/components/Base/ProjectItem.vue';
import CatalogBlock from '@/components/Base/CatalogBlock.vue';
import Popup from '@/components/Base/Popup.vue';

export default {
  name: 'Section3',
  components: {
    Slider,
    SwiperSlide,
    ProjectItem,
    CatalogBlock,
    Popup,
  },
  data() {
    return {
      title: 'Популярные проекты 2020 года',
      sliderBreakpoints: {
        992: {
          slidesPerView: 2,
          spaceBetween: 0,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        576: {
          slidesPerView: 2,
          spaceBetween: 0,
        },
      },
      projectList: [
        {
          imgSrc: require('@/assets/img/projects/img-1.jpg'),
          title: 'Лада дом',
          props: [
            {
              icon: require('@/assets/img/projects/icon-1.svg'),
              value: '100 м²',
            },
            {
              icon: require('@/assets/img/projects/icon-2.svg'),
              value: '4 спальни',
            },
            {
              icon: require('@/assets/img/projects/icon-4.svg'),
              value: 'терраса',
            },
          ],
          planSrc: require('@/assets/img/projects/plan-1.jpg'),
        },
        {
          imgSrc: require('@/assets/img/projects/img-2.jpg'),
          title: 'Волжский утёс',
          props: [
            {
              icon: require('@/assets/img/projects/icon-1.svg'),
              value: '286 м²',
            },
            {
              icon: require('@/assets/img/projects/icon-2.svg'),
              value: '5 комнат',
            },
            {
              icon: require('@/assets/img/projects/icon-3.svg'),
              value: 'гараж',
            },
          ],
          planSrc: require('@/assets/img/projects/plan-2.jpg'),
        },
        {
          imgSrc: require('@/assets/img/projects/img-3.jpg'),
          title: 'Прилесье',
          props: [
            {
              icon: require('@/assets/img/projects/icon-1.svg'),
              value: '136 м²',
            },
            {
              icon: require('@/assets/img/projects/icon-2.svg'),
              value: '3 спальни',
            },
            {
              icon: require('@/assets/img/projects/icon-5.svg'),
              value: '3 ванные комнаты',
            },
          ],
          planSrc: require('@/assets/img/projects/plan-3.jpg'),
        },
      ],
      catalogBlock: {
        imgSrc: require('@/assets/img/projects/catalog.webp'),
        title: 'Дом Вашей мечты',
        text: 'Не можете найти дом, удовлетворяющий всем требованиям? Мы поможем создать планировку Вашей мечты.',
      },
      showProjectPopup: null,
      popupTitle: 'Возможные планировки дома',
    };
  },
  computed: {
    disablePopupSpecial() {
      return this.$store.getters.getDisablePopupSpecial;
    },
  },
  methods: {
    scrollPage() {
      const section = document.getElementById('projects');
      const sectionBox = section.getBoundingClientRect();
      const disablePopupSpecialStorage = sessionStorage.getItem('disablePopupSpecial');

      if (sectionBox.top <= 100 && !this.disablePopupSpecial && !disablePopupSpecialStorage) {
        this.$store.dispatch('setShowPopupSpecial', true);
        window.removeEventListener('scroll', this.scrollPage, { passive: true });
      }
    },
  },
  created() {
    // this.$store.dispatch('setShowPopupSpecial', true);
    window.addEventListener('scroll', this.scrollPage, { passive: true });
  },
};
</script>

<style lang="scss" scoped>
  .section {
    background-color: #FBFBFB;
    background-image: url(~@/assets/img/block3/bg-left.webp),
      url(~@/assets/img/block3/bg-right.webp);
    background-repeat: no-repeat;
    background-position: 37px 50%, calc(100% - 145px) 95px;
    padding: 92px 0;

    &__title {
      margin-bottom: 28px;
    }

    &__slider {

      @media (max-width: 767px) {
        margin-bottom: 82px;
      }
    }

    @media (max-width: 991px) {
      background-image: url(~@/assets/img/block3/bg-left.webp),
        none;
    }

    @media (max-width: 575px) {
      padding: 40px 0;
    }
  }
</style>
