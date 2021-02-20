<template>
  <div class="material">
    <div class="material__img">
      <img :src="imgSrc" :alt="name" />
    </div>

    <div class="material__name" v-html="name"></div>

    <template v-if="text">
      <div class="material__text" v-html="text"></div>
    </template>

    <div class="material__price" v-html="price"></div>

    <Btn
      :text="btnName"
      class="w-100"
    />
  </div>
</template>

<script>
import Btn from '@/components/Base/Btn.vue';

export default {
  name: 'MaterialsItem',
  components: {
    Btn,
  },
  props: {
    imgSrc: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: false,
    },
    price: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      btnName: 'Узнать точную стоимость',
    };
  },
};
</script>

<style lang="scss" scoped>
  .material {
    font-size: 15px;
    line-height: 21px;
    text-align: center;
    background: #FFFFFF;
    box-shadow: 0px 4px 40px rgba(201, 212, 222, 0.7);
    border-radius: 15px;
    overflow: hidden;
    height: 100%;
    padding: 22px 40px 29px;

    &__img {
      height: 172px;
      margin-bottom: 5px;

      img {
        object-fit: scale-down;
        object-position: center;
        width: 100%;
        height: 100%;
      }
    }

    &__name {
      font-weight: 800;
      font-size: 14px;
      line-height: 30px;
      text-transform: uppercase;
      margin-bottom: 8px;
    }

    &__text {
      margin-bottom: 12px;
    }

    &__price {
      font-family: 'Montserrat', sans-serif;
      font-weight: 500;
      font-size: 21px;
      line-height: 30px;
      letter-spacing: 0.05em;
      margin-bottom: 22px;
    }
  }
</style>
