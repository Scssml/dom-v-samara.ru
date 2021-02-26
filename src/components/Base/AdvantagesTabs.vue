<template>
  <div>
    <div class="row mb-custom">
      <template v-for="(item, index) in list">
        <div class="col-6 col-sm-6 col-md-4 col-xl-2 mb-4" :key="index">
          <Tab
            :name="item.name"
            :active="index === tabActive - 1"
            @click.native.prevent="tabActive = index + 1"
          />
        </div>
      </template>
    </div>

    <div class="row">
      <div class="col-xl-6 mb-5 mb-xl-0">
        <template v-for="(item, index) in list">
          <AdvantagesItem
            :key="index"
            :imgSrc="item.imgSrc"
            :title="item.title"
            :text="item.text"
            v-if="index === tabActive - 1"
          />
        </template>
      </div>

      <template v-if="formBlock">
        <div class="col-xl-6">
          <FormBlock1
            :imgSrc="formBlock.imgSrc"
            :title="formBlock.title"
            :text="formBlock.text"
            :list="formBlock.list"
            :timer="formBlock.timer"
            :formProps="formBlock.formProps"
          />
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import Tab from '@/components/Base/Tab.vue';
import AdvantagesItem from '@/components/Base/AdvantagesItem.vue';
import FormBlock1 from '@/components/Base/FormBlock1.vue';

export default {
  name: 'AdvantagesTabs',
  components: {
    Tab,
    AdvantagesItem,
    FormBlock1,
  },
  props: {
    list: {
      type: Array,
      requered: true,
      default: () => [],
    },
    formBlock: {
      type: Object,
      requered: false,
      default: () => {},
    },
  },
  data() {
    return {
      tabActive: 1,
    };
  },
};
</script>

<style lang="scss" scoped>
  .mb-custom {
    margin-bottom: 41px;
  }
</style>
