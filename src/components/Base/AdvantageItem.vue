<template>
  <div class="block">
    <div class="block__img">
      <img :src="imgSrc" :alt="text" loading="lazy" />
    </div>

    <div v-html="text"></div>
  </div>
</template>

<script>
export default {
  name: 'AdvantageItem',
  props: {
    imgSrc: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
  .block {
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(63, 63, 63, 0.1);
    border-radius: 15px;
    padding: 17px 24px 17px 178px;
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: 0.05em;

    &__img {
      position: absolute;
      bottom: 17px;
      left: 16px;
      width: 152px;
      height: 152px;

      img {
        object-fit: scale-down;
        object-position: bottom;
        width: 100%;
        height: 100%;
      }

      @media (max-width: 1199px) {
        position: static;
        margin-right: 24px;
        flex-shrink: 0;
      }

      @media (max-width: 575px) {
        width: 90px;
        height: 80px;
      }
    }

    @media (max-width: 1199px) {
      padding: 17px 24px;
    }

    @media (max-width: 575px) {
      font-size: 12px;
      line-height: 16px;
      padding: 5px 15px;
    }
  }
</style>
