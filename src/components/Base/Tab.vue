<template>
  <a
    href="#"
    class="tab"
    :class="classActive"
    v-html="name"
  ></a>
</template>

<script>
export default {
  name: 'Tab',
  props: {
    name: {
      type: String,
      requered: true,
    },
    active: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  computed: {
    classActive() {
      return (this.active) ? 'tab--active' : '';
    },
  },
};
</script>

<style lang="scss" scoped>
  .tab {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 300px;
    height: 100%;
    padding: 15px 18px;
    font-weight: 800;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    text-transform: uppercase;
    color: #000000;
    text-decoration: none;
    background: #FBFBFB;
    box-shadow: 0px 4px 20px rgba(63, 63, 63, 0.1);
    border-radius: 15px;
    border: 3px solid transparent;
    transition: border-color .25s ease-in-out;

    &--active {
      border-color: #F3AF01;
    }

    @media (max-width: 575px) {
      padding: 8px;
      font-size: 10px;
      line-height: 15px;
    }
  }
</style>
