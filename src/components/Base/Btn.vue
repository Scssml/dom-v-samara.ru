<template>
  <div :class="btnClass">
    <template v-if="href">
      <a href="#">
        {{ text }}
      </a>
    </template>

    <template v-else>
      <button>
        {{ text }}
      </button>
    </template>
  </div>
</template>

<script>
export default {
  name: 'Btn',
  props: {
    text: {
      type: String,
      required: true,
    },
    big: {
      type: Boolean,
      required: false,
      default: false,
    },
    small: {
      type: Boolean,
      required: false,
      default: false,
    },
    border: {
      type: Boolean,
      required: false,
      default: true,
    },
    shadow: {
      type: Boolean,
      required: false,
      default: true,
    },
    href: {
      type: String,
      required: false,
      default: '',
    },
  },
  computed: {
    btnClass() {
      let btnClass = 'btn';

      if (this.big) {
        btnClass += ' btn--big';
      } else if (this.small) {
        btnClass += ' btn--small';
      }

      if (this.border) {
        btnClass += ' btn--border';
      }

      if (this.shadow) {
        btnClass += ' btn--shadow';
      }

      return btnClass;
    },
  },
};
</script>

<style lang="scss" scoped>
  .btn {
    min-width: 188px;
    height: 62px;
    background: linear-gradient(180deg, #8AA6F5 0%, #3D71F8 75.78%);
    border-radius: 70px;
    display: inline-block;
    font-weight: 600;
    font-size: 14px;
    line-height: 25px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    text-align: center;

    a,
    button {
      display: flex;
      width: 100%;
      height: 100%;
      justify-content: center;
      align-items: center;
      color: #FFFFFF;
      text-transform: uppercase;
      padding: 0;
      margin: 0;
    }

    a {
      text-decoration: none;

      &:hover,
      &:focus {
        color: #fff;
      }
    }

    button {
      background: transparent;
      border: none;
      outline: none;
    }

    &--small {
      height: 50px;

      font-size: 13px;
    }

    &--big {
      height: 78px;
    }

    &--border {
      box-sizing: content-box;
      border-bottom: 4px solid #275DE0;
    }

    &--shadow {
      box-shadow: 0px 4px 10px rgba(61, 114, 249, 0.5);
    }
  }
</style>
