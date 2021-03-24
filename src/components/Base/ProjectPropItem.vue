<template>
  <div class="prop">
    <div class="prop__img">
      <img :src="icon" :alt="value" loading="lazy" />
    </div>

    {{ value }}
  </div>
</template>

<script>
export default {
  name: 'ProjectPropItem',
  props: {
    icon: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
  .prop {
    display: flex;
    align-items: center;
    font-weight: 500;
    font-size: 15px;
    line-height: 21px;
    margin-bottom: 23px;

    &__img {
      width: 26px;
      height: 26px;
      flex-shrink: 0;
      margin-right: 9px;

      img {
        object-fit: scale-down;
        object-position: center;
        width: 100%;
        height: 100%;
      }
    }
  }
</style>
