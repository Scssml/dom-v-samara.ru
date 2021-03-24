<template>
  <div class="block">
    <div v-html="text"></div>

    <template v-if="name">
      <div class="block__author">
        <template v-if="imgSrc">
          <div class="block__img">
            <img :src="imgSrc" alt="author" loading="lazy" />
          </div>
        </template>

        <div>
          <div class="block__name">{{ name }}</div>

          <template v-if="post">
            <div class="block__post">{{ post }}</div>
          </template>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'QuoteBlock',
  props: {
    text: {
      type: String,
      required: true,
    },
    imgSrc: {
      type: String,
      required: false,
    },
    name: {
      type: String,
      required: false,
    },
    post: {
      type: String,
      required: false,
    },
  },
};
</script>

<style lang="scss" scoped>
  .block {
    background-image: url(~@/assets/img/quote/bg.webp),
      linear-gradient(23.89deg, #D7E2FF 43.66%, #8FA4D9 101.48%);
    background-position: calc(100% - 35px) 35px, 0 0;
    background-repeat: no-repeat;
    border-radius: 15px;
    padding: 80px 45px 60px;
    height: 100%;
    line-height: 30px;
    color: #5C6E99;

    &__author {
      display: flex;
      align-items: center;
      margin-top: 19px;
    }

    &__img {
      width: 76px;
      height: 76px;
      border-radius: 50%;
      overflow: hidden;
      flex-shrink: 0;
      margin-right: 14px;

      img {
        object-fit: cover;
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
      color: #000000;
    }

    &__post {
      font-size: 15px;
      line-height: 21px;
    }

    @media (max-width: 1199px) {
      padding: 40px;
      background-position: calc(100% - 20px) 20px, 0 0;
    }

    @media (max-width: 575px) {
      padding: 40px 20px;
      background-position: calc(100% - 10px) 10px, 0 0;
    }
  }
</style>
