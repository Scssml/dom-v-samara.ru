<template>
  <div class="block" :style="bgImage">
    <template v-if="title">
      <div class="block__title" v-html="title"></div>
    </template>

    <template v-if="text">
      <div class="block__text" v-html="text"></div>
    </template>

    <template v-if="list">
      <List :list="list" class="block__list" />
    </template>

    <div class="row justify-content-center justify-content-md-between align-items-end">
      <div class="col-auto col-xl-5 order-md-last" v-if="timer">
        <CountDown :date="timer" />
      </div>

      <div class="col-auto col-md-7 col-lg-7">
        <Form
          :items="formProps.items"
          :btnName="formProps.btnName"
          :id="formProps.id"
        />
      </div>
    </div>
  </div>
</template>

<script>
import List from '@/components/Base/List.vue';
import Form from '@/components/Base/Form.vue';
import CountDown from '@/components/Base/CountDown.vue';

export default {
  name: 'FormBlock1',
  components: {
    List,
    Form,
    CountDown,
  },
  props: {
    imgSrc: {
      type: String,
      requered: false,
    },
    title: {
      type: String,
      requered: false,
    },
    text: {
      type: String,
      requered: false,
    },
    list: {
      type: Array,
      requered: false,
      default: () => [],
    },
    timer: {
      type: String,
      requered: false,
    },
    formProps: {
      type: Object,
      requered: true,
      default: () => {},
    },
  },
  computed: {
    bgImage() {
      return (this.imgSrc) ? `background-image: url(${this.imgSrc})` : '';
    },
  },
};
</script>

<style lang="scss" scoped>
  .block {
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(63, 63, 63, 0.05);
    border-radius: 15px;
    padding: 40px 45px;
    line-height: 28px;
    height: 100%;
    background-position: bottom right;
    background-repeat: no-repeat;

    &__title {
      font-family: 'Montserrat', sans-serif;
      font-weight: 800;
      font-size: 19px;
      line-height: 30px;
      text-align: center;
      text-transform: uppercase;
      margin-bottom: 18px;

      @media (max-width: 575px) {
        font-size: 14px;
        line-height: 22px;
      }
    }

    &__text {
      margin-bottom: 13px;
    }

    &__list {
      margin-bottom: 39px;

      @media (max-width: 575px) {
        margin-bottom: 20px;
      }
    }

    @media (max-width: 767px) {
      background-image: none !important;
    }

    @media (max-width: 575px) {
      padding: 30px 20px;
      font-size: 14px;
      line-height: 22px;
    }
  }
</style>
