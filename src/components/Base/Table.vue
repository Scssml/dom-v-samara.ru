<template>
  <div class="table">
    <table>
      <template v-if="head.length > 0">
        <tr>
          <template v-for="(item, index) in head">
            <th :key="`th-${index}`">{{ item }}</th>
          </template>
        </tr>
      </template>

      <template v-for="(rowItems, rowIndex) in value">
        <tr :key="`tr-${rowIndex}`">
          <template v-for="(item, index) in rowItems">
            <td :key="`td-${index}`">{{ item }}</td>
          </template>
        </tr>
      </template>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Table',
  props: {
    head: {
      type: Array,
      required: false,
      default: () => [],
    },
    value: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
  .table {
    overflow: auto;

    table {
      width: 100%;
      border-collapse: collapse;
      background: #F5F5F5;
      border-radius: 15px;

      th {
        font-weight: 800;
        font-size: 17px;
        line-height: 30px;
        text-transform: uppercase;
        padding: 15px;
        border: 2px solid #FFFFFF;
        vertical-align: top;
      }

      td {
        font-size: 16px;
        line-height: 22px;
        padding: 15px;
        border: 2px solid #FFFFFF;
        vertical-align: top;
      }
    }
  }
</style>
