<template>
  <a
    class="burger"
    :class="(active) ? 'burger--active' : ''"
  >
    <span></span>
  </a>
</template>

<script>
export default {
  name: 'Burger',
  props: {
    active: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>

<style lang="scss">
  .burger {
    display: inline-block;
    position: relative;
    width: 25px;
    height: 21px;
    vertical-align: middle;
    cursor: pointer;

    &:before,
    &:after,
    span {
      position: absolute;
      width: 100%;
      height: 3px;
      left: 0;
      top: calc(50% - 1.5px);
      background: #25263C;
    }

    &:before,
    &:after {
      content: '';
      transition: transform .25s ease-in-out;
    }

    &:before {
      transform: translateY(-9px);
    }

    &:after {
      transform: translateY(9px);
    }

    span {
      transition: opacity .25s ease-in-out;
    }

    &--active {
      span {
        opacity: 0;
      }

      &:before {
        transform: translateY(0) rotate(45deg);
      }

      &:after {
        transform: translateY(0) rotate(-45deg);
      }
    }
  }
</style>
