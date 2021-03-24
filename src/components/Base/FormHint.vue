<template>
  <div class="hint">
    {{ text }}
  </div>
</template>

<script>
export default {
  name: 'FormHint',
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
  .hint {
    background: #C5D5FD;
    border-radius: 15px;
    padding: 22px;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    color: #5C6E99;

    @media (max-width: 575px) {
      font-size: 14px;
      line-height: 21px;
      padding: 15px;
    }
  }
</style>
