<template>
  <div class="block">
    <div class="block__header">
      <template v-if="imgSrc">
        <div class="block__img">
          <img :src="imgSrc" alt="staff" loading="lazy" />
        </div>
      </template>

      <div>
        <div class="block__name">{{ name }}</div>
        <div class="block__post">{{ post }}</div>
        <div class="block__phone">{{ phone }}</div>
      </div>
    </div>

    <div class="block__text" v-html="text"></div>
  </div>
</template>

<script>
export default {
  name: 'StaffItem',
  props: {
    imgSrc: {
      type: String,
      required: false,
    },
    name: {
      type: String,
      required: true,
    },
    post: {
      type: String,
      required: true,
    },
    phone: {
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
    box-shadow: 0px 4px 40px rgba(201, 212, 222, 0.7);
    border-radius: 15px;
    padding: 20px 0 40px;

    &__header {
      padding: 0 40px 17px;
      border-bottom: 1px solid #F1F1F1;
      display: flex;
      align-items: center;

      @media (max-width: 575px) {
        padding: 0 15px;
      }
    }

    &__img {
      width: 131px;
      height: 131px;
      border-radius: 50%;
      border: 3px solid #C3DAEE;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 33px;
      flex-shrink: 0;

      img {
        object-fit: scale-down;
        object-position: center;
        width: 95%;
        height: 95%;
      }

      @media (max-width: 575px) {
        width: 65px;
        height: 65px;
        margin-right: 15px;
      }
    }

    &__name {
      font-family: 'Montserrat', sans-serif;
      font-weight: 800;
      font-size: 19px;
      line-height: 30px;
      text-transform: uppercase;
      margin-bottom: 13px;

      @media (max-width: 575px) {
        font-size: 14px;
      }
    }

    &__post {
      display: inline-block;
      font-size: 17px;
      line-height: 21px;
      text-align: center;
      text-transform: capitalize;
      color: #FFFFFF;
      background: #F3AF01;
      position: relative;
      padding: 3px 5px;
      margin: 0 10px;

      &:before,
      &:after {
        content: '';
        position: absolute;
        top: 0;
      }

      &:before {
        border-bottom: 28px solid #F3AF01;
        border-left: 10px solid transparent;
        left: -10px;
        top: -1px;
      }

      &:after {
        border-top: 28px solid #F3AF01;
        border-right: 10px solid transparent;
        right: -10px;
        top: 0;
      }
    }

    &__phone {
      font-family: 'Montserrat', sans-serif;
      line-height: 50px;
    }

    &__text {
      padding: 20px 40px 0;

      @media (max-width: 575px) {
        padding: 10px 15px 0;
      }
    }

    @media (max-width: 575px) {
        padding: 10px 0 20px;
      }
  }
</style>
