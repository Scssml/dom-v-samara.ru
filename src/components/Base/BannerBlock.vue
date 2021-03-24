<template>
  <div class="block">
    <template v-if="text">
      <div class="block__text" v-html="text"></div>
    </template>

    <template v-if="list">
      <CheckList
        :list="list"
        class="block__list"
      />
    </template>

    <template v-if="btnName">
      <div class="row align-items-center">
        <div class="col-md-7 col-lg-7 pr-lg-2 mb-3 mb-md-0">
          <Btn
            :text="btnName"
            :big="true"
            class="w-100"
            @click.native.prevent="$store.dispatch('setShowPopupQuiz', true)"
          />
        </div>

        <template v-if="btnText">
          <div class="col-md-5 col-lg-5 pl-lg-1">
            <div class="block__btn-text" v-html="btnText"></div>
          </div>
        </template>
      </div>
    </template>

    <template v-if="smallText">
      <div class="block__small-text" v-html="smallText"></div>
    </template>
  </div>
</template>

<script>
import CheckList from '@/components/Base/CheckList.vue';
import Btn from '@/components/Base/Btn.vue';

export default {
  name: 'BannerBlock',
  components: {
    CheckList,
    Btn,
  },
  props: {
    text: {
      type: String,
      required: false,
    },
    list: {
      type: Array,
      required: false,
      default: () => [],
    },
    btnName: {
      type: String,
      required: false,
    },
    btnText: {
      type: String,
      required: false,
    },
    smallText: {
      type: String,
      required: false,
    },
  },
};
</script>

<style lang="scss" scoped>
  .block {
    background: #fff;
    border-radius: 15px;
    padding: 35px;
    font-family: 'Montserrat', sans-serif;
    font-size: 21px;
    line-height: 30px;

    &__text {
      margin-bottom: 23px;
    }

    &__list {
      margin-bottom: 37px;
    }

    &__btn-text {
      font-weight: 600;
      font-size: 14px;
      line-height: 25px;
      text-transform: uppercase;
      text-align: center;
    }

    &__small-text {
      font-weight: 500;
      font-size: 13px;
      line-height: 20px;
      color: #737373;
      margin-top: 20px;

      @media (max-width: 767px) {
        text-align: center;
      }
    }

    @media (max-width: 575px) {
      padding: 35px 20px;
      border-radius: 0;
    }
  }
</style>
