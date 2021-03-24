<template>
  <div class="banner-btn">
    <template v-if="imgSrc">
      <div class="banner-btn__img">
        <img :src="imgSrc" alt="banner-btn" loading="lazy" />
      </div>
    </template>

    <template v-if="text">
      <div v-html="text"></div>
    </template>

    <template v-if="link">
      <span>{{ link }}</span>
    </template>
  </div>
</template>

<script>
export default {
  name: 'BannerBtn',
  props: {
    imgSrc: {
      type: String,
      required: false,
    },
    text: {
      type: String,
      required: false,
    },
    link: {
      type: String,
      required: false,
    },
  },
};
</script>

<style lang="scss" scoped>
  .banner-btn {
    text-align: center;
    color: #FFFFFF;
    cursor: pointer;

    &__img {
      width: 55px;
      height: 55px;
      background: linear-gradient(180deg, #89A5F6 0%, #3D72F9 100%);
      box-shadow: 0px 4px 10px rgba(61, 114, 249, 0.5);
      border-radius: 50%;
      margin: 0 auto 5px;

      img {
        object-fit: scale-down;
        object-position: center;
        width: 100%;
        height: 100%;
      }
    }

    span {
      display: inline-block;
      font-weight: bold;
      font-size: 12px;
      line-height: 30px;
      letter-spacing: 0.05em;
      text-decoration-line: underline;
      text-transform: uppercase;
      color: #F3AF01;
    }

    &:hover {

      span {
        text-decoration-line: none;
      }
    }
  }
</style>
