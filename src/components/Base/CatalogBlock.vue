<template>
  <div class="block">
    <div class="block__img">
      <img :src="imgSrc" :alt="title" loading="lazy" />
    </div>

    <div class="block__title" v-html="title"></div>

    <template v-if="text">
      <div class="block__text" v-html="text"></div>
    </template>

    <Btn
      :text="btnName"
      class="w-100"
      @click.native.prevent="$store.dispatch('setShowPopupFeedback', true)"
    />
  </div>
</template>

<script>
import Btn from '@/components/Base/Btn.vue';

export default {
  name: 'CatalogBlock',
  components: {
    Btn,
  },
  props: {
    imgSrc: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      btnName: 'Запросить каталог',
    };
  },
};
</script>

<style lang="scss" scoped>
  .block {
    font-size: 14px;
    line-height: 21px;
    text-align: center;
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(63, 63, 63, 0.1);
    border-radius: 15px;
    overflow: hidden;
    height: 100%;
    padding: 11px 18px 29px;

    &__img {
      height: 175px;
      margin-bottom: 17px;

      img {
        object-fit: scale-down;
        object-position: center;
        width: 100%;
        height: 100%;
      }
    }

    &__title {
      font-weight: 800;
      line-height: 30px;
      text-align: center;
      text-transform: uppercase;
      margin-bottom: 13px;

      @media (max-width: 575px) {
        font-size: 17px;
      }
    }

    &__text {
      margin-bottom: 20px;
    }
  }
</style>
