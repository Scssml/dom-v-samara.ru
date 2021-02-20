<template>
  <div class="faq-item" @click.prevent="show = !show">
    <div
      class="faq-item__title"
      :class="(show) ? 'faq-item__title--active' : ''"
    >
      {{ title }}
    </div>

    <div class="faq-item__text" v-show="show">{{ text }}</div>
  </div>
</template>

<script>
export default {
  name: 'FaqItem',
  props: {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      show: false,
    };
  },
  created() {
    this.show = this.active;
  },
};
</script>

<style lang="scss" scoped>
  .faq-item {
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(63, 63, 63, 0.1);
    border-radius: 15px;
    padding: 20px 30px;
    margin-bottom: 26px;

    &__title {
      font-weight: bold;
      font-size: 19px;
      color: #1B1919;
      display: flex;
      justify-content: space-between;
      flex-shrink: 0;

      &:after {
        content: '';
        flex-shrink: 0;
        margin-left: 10px;
        width: 31px;
        height: 31px;
        background-color: #F3AF01;
        background-image: url(~@/assets/img/faq/arrow.svg);
        background-position: center;
        background-repeat: no-repeat;
        transform: rotate(-90deg);
        border-radius: 50%;
        transition: transform .25s ease-in-out;
      }

      &--active {

        &:after {
          transform: rotate(0);
        }
      }
    }

    &__text {
      line-height: 27px;
      margin-top: 15px;
    }
  }
</style>
