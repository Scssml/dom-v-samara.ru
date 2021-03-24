<template>
  <div class="block">
    <template v-if="formProps">
      <Form2
        :items="formProps.items"
        :btnName="formProps.btnName"
        :id="formProps.id"
      />
    </template>
  </div>
</template>

<script>
import Form2 from '@/components/Base/Form2.vue';

export default {
  name: 'FormBlock4',
  components: {
    Form2,
  },
  props: {
    formProps: {
      type: Object,
      required: false,
      default: () => {},
    },
  },
};
</script>

<style lang="scss" scoped>
  .block {
    background: #F5F5F5;
    padding: 40px;
    margin: 0 -40px -40px;

    @media (max-width: 575px) {
      margin: 0 -20px -45px;
    }

    @media (max-width: 767px) {
      text-align: center;
    }
  }
</style>
