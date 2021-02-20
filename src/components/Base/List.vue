<template>
  <ul>
    <template v-for="(item, index) in list">
      <li :key="index">
        <span>{{ item }}</span>
      </li>
    </template>
  </ul>
</template>

<script>
export default {
  name: 'List',
  props: {
    list: {
      type: Array,
      requered: true,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
  ul {
    margin: 0;
    padding: 0;
    list-style: none;

    li {
      line-height: 25px;
      display: flex;
      margin-bottom: 10px;

      &:before {
        content: '';
        flex-shrink: 0;
        background-color: #F3AF01;
        width: 7px;
        height: 7px;
        border-radius: 50%;
        margin-right: 10px;
        margin-top: 10px;
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
