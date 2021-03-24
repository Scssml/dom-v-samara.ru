<template>
  <div class="block">
    <template v-if="imgSrc">
      <div class="block__img">
        <img :src="imgSrc" :alt="(title) ? title : imgSrc" loading="lazy" />
      </div>
    </template>

    <template v-if="title">
      <div class="block__title" v-html="title"></div>
    </template>

    <template v-if="text">
      {{ text }}
    </template>
  </div>
</template>

<script>
export default {
  name: 'AdvantagesItem',
  props: {
    imgSrc: {
      type: String,
      required: false,
    },
    title: {
      type: String,
      required: false,
    },
    text: {
      type: String,
      required: false,
    },
  },
};
</script>

<style lang="scss" scoped>
  .block {
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(63, 63, 63, 0.05);
    border-radius: 15px;
    padding: 45px;
    text-align: center;
    font-size: 17px;
    line-height: 28px;
    height: 100%;

    &__img {
      height: 244px;
      margin-bottom: 34px;

      img {
        object-fit: scale-down;
        object-position: center;
        width: 100%;
        height: 100%;
      }

      @media (max-width: 575px) {
        margin-bottom: 24px;
        height: 186px;
      }
    }

    &__title {
      font-family: 'Montserrat', sans-serif;
      font-weight: 800;
      font-size: 19px;
      line-height: 30px;
      text-transform: uppercase;
      margin-bottom: 8px;

      @media (max-width: 575px) {
        font-size: 14px;
        line-height: 22px;
      }
    }

    @media (max-width: 575px) {
      padding: 30px 20px;
      font-size: 14px;
      line-height: 22px;
    }
  }
</style>
