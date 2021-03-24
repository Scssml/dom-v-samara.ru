<template>
  <div class="popup" v-if="value">
    <div class="popup__wrapper" @click.prevent="close()"></div>

    <div class="popup__block" :class="classPopupBlock">
      <a href="#" class="popup__close" @click.prevent="close()"></a>

      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Popup',
  props: {
    value: {
      type: Boolean,
      required: true,
      default: false,
    },
    small: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classPopupBlock() {
      return (this.small) ? 'popup__block--small' : '';
    },
  },
  methods: {
    close() {
      this.$emit('input', false);
      this.$emit('close');
    },
  },
};
</script>

<style lang="scss">
  .popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 101;
    // transform: translateX(-100%);
    // opacity: 0;
    // transition: opacity .25s ease-in-out, transform 0s linear .25s;

    &__wrapper {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, .5);
      z-index: 1;
    }

    &__block {
      max-width: 988px;
      width: calc(100% - 30px);
      max-height: calc(100% - 30px);
      overflow: auto;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: #fff;
      border-radius: 15px;
      padding: 40px;
      z-index: 3;

      &--small {
        max-width: 414px;
      }

      img {
        max-width: 100%;
      }

      @media (max-width: 575px) {
        padding: 45px 20px;
      }
    }

    &__close {
      position: absolute;
      top: 15px;
      right: 15px;
      width: 26px;
      height: 26px;

      &:before,
      &:after {
        content: '';
        width: 100%;
        height: 3px;
        background: #C4C4C4;
        position: absolute;
        top: calc(50% - 1.5px);
        left: 0;
      }

      &:before {
        transform: rotate(-45deg);
      }

      &:after {
        transform: rotate(45deg);
      }
    }
  }
</style>
