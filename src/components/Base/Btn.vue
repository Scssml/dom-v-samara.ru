<template>
  <div :class="btnClass">
    <template v-if="href">
      <a href="#">
        <template v-if="iconSrc">
          <img :src="iconSrc" aly="icon" loading="lazy" />
        </template>

        <template v-else>
          {{ text }}
        </template>
      </a>
    </template>

    <template v-else>
      <button>
        <template v-if="iconSrc">
          <img :src="iconSrc" aly="icon" loading="lazy" />
        </template>

        <template v-else>
          {{ text }}
        </template>
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
      required: false,
      default: 'Оставить заявку',
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
    iconSrc: {
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

      if (this.iconSrc) {
        btnClass += ' btn--icon';
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
    display: inline-flex;
    align-items: center;
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

      @media (max-width: 575px) {
        min-width: 126px;
        height: 40px;
        font-size: 10px;
        line-height: 20px;
      }
    }

    &--big {
      height: 78px;

      @media (max-width: 575px) {
        height: 68px;
      }
    }

    &--border {
      box-sizing: content-box;
      border-bottom: 4px solid #275DE0;
    }

    &--shadow {
      box-shadow: 0px 4px 10px rgba(61, 114, 249, 0.5);
    }

    &--icon {
      min-width: initial;
      border-radius: 5px;
    }

    &:hover {
      background: linear-gradient(180deg, #4476F9 0%, #3D71F8 75.78%);
    }
  }
</style>
