<template>
  <div class="slider">
    <Swiper
      class="swiper"
      :options="swiperOption"
    >
      <slot />
    </Swiper>

    <div class="slider__pagination" :id="`slider-pagination-${this.id}`"></div>
  </div>
</template>

<script>
import { Swiper } from 'vue-awesome-swiper';

export default {
  name: 'Slider',
  components: {
    Swiper,
  },
  props: {
    id: {
      type: [String, Number],
      required: true,
    },
    breakpoints: {
      type: Object,
      required: true,
      default: () => {},
    },
  },
  computed: {
    swiperOption() {
      return {
        pagination: {
          el: `#slider-pagination-${this.id}`,
          type: 'bullets',
          clickable: true,
        },
        breakpoints: this.breakpoints,
      };
    },
  },
};
</script>

<style lang="scss">
  .slider {
    margin: -15px -15px;
    position: relative;

    &__pagination {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      bottom: -20px;
      left: 0;
      width: 100%;
    }

    .swiper {

      &-slide {
        padding: 15px;
        height: initial;
      }

      &-pagination-bullet {
        width: 15px;
        height: 15px;
        border: 2px solid #275DE0;
        background: #fff;
        transition: background-color .25s ease-in-out;
        margin: 0 6px;
        border-radius: 50%;

        &-active {
          background: #275DE0;
        }
      }
    }
  }
</style>
