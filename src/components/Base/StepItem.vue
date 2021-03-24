<template>
  <div class="block">
    <div class="block__img">
      <img :src="imgSrc" alt="icon" loading="lazy" />
    </div>

    <List :list="list" />
  </div>
</template>

<script>
import List from '@/components/Base/List.vue';

export default {
  name: 'StepItem',
  components: {
    List,
  },
  props: {
    imgSrc: {
      type: String,
      required: true,
    },
    list: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
  .block {
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(63, 63, 63, 0.1);
    border-radius: 15px;
    padding: 30px 30px 35px;
    line-height: 27px;
    height: 100%;

    &__img {
      width: 48px;
      height: 48px;
      margin-bottom: 16px;

      img {
        object-fit: scale-down;
        object-position: bottom;
        width: 100%;
        height: 100%;
      }
    }
  }
</style>
