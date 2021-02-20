<template>
  <ul>
    <template v-for="(item, index) in list">
      <li :key="index">
        <span v-html="item"></span>
      </li>
    </template>
  </ul>
</template>

<script>
export default {
  name: 'CheckList',
  props: {
    list: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
  ul {
    font-family: 'Raleway', sans-serif;
    padding: 0;
    list-style: none;

    li {
      font-size: 17px;
      line-height: 28px;
      display: flex;
      margin-bottom: 22px;

      &:before {
        content: '';
        flex-shrink: 0;
        background-image: url(~@/assets/img/checkList/check.svg);
        background-repeat: no-repeat;
        background-position: center;
        background-color: #F3AF01;
        width: 31px;
        height: 31px;
        border-radius: 50%;
        margin-right: 19px;
      }

      span {
        align-self: center;
      }

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
</style>
