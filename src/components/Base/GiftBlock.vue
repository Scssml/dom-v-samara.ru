<template>
  <div class="block" :class="classActive">
    <div class="block__img">
      <img :src="imgSrc" :alt="name" loading="lazy" />
    </div>

    {{ name }}
  </div>
</template>

<script>
export default {
  name: 'GiftBlock',
  props: {
    name: {
      type: String,
      required: true,
    },
    imgSrc: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
      required: false,
    },
  },
  computed: {
    classActive() {
      return (this.active) ? 'block--active' : '';
    },
  },
};
</script>

<style lang="scss" scoped>
  .block {
    font-size: 15px;
    line-height: 21px;
    text-align: center;
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(63, 63, 63, 0.1);
    border-radius: 15px;
    padding: 10px 15px;
    border: 3px solid transparent;
    transition: border-color .25s ease-in-out;
    max-width: 300px;
    margin: 0 auto;

    &__img {
      height: 77px;
      margin-bottom: 5px;

      img {
        object-fit: scale-down;
        object-position: center;
        width: 100%;
        height: 100%;
      }
    }

    &--active {
      border-color: #F3AF01;
    }

    @media (max-width: 767px) {
      padding: 5px;
      line-height: 18px;
    }
  }
</style>
