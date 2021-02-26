<template>
  <div class="block">
    <template v-if="title">
      <div class="block__title" v-html="title"></div>
    </template>

    <template v-if="address">
      <div class="block__address">{{ address }}</div>
    </template>

    <template v-if="phone">
      <div>
        <a :href="phoneHref" class="block__phone">{{ phone }}</a>
      </div>
    </template>

    <template v-if="mail">
      <div>
        <a :href="`mailto:${mail}`" class="block__mail">{{ mail }}</a>
      </div>
    </template>

    <template v-if="hint">
      <div class="block__hint" v-html="hint"></div>
    </template>

    <template v-if="formProps">
      <FormReCall
        :input="formProps.input"
        :iconSrc="formProps.iconSrc"
        :id="formProps.id"
      />
    </template>
  </div>
</template>

<script>
import FormReCall from '@/components/Base/FormReCall.vue';

export default {
  name: 'FormBlock3',
  components: {
    FormReCall,
  },
  props: {
    title: {
      type: String,
      required: false,
    },
    address: {
      type: String,
      required: false,
    },
    phone: {
      type: String,
      required: false,
    },
    mail: {
      type: String,
      required: false,
    },
    hint: {
      type: String,
      required: false,
    },
    formProps: {
      type: Object,
      required: false,
      default: () => {},
    },
  },
  computed: {
    phoneHref() {
      return `tel:${this.phone.replace(/[^+\d]/g, '')}`;
    },
  },
};
</script>

<style lang="scss" scoped>
  .block {
    width: 412px;
    padding: 40px;
    background: linear-gradient(194.09deg, #D7E2FF 58.63%, #8FA4D9 107.65%);
    border-radius: 15px 15px 0px 0px;
    text-align: center;

    &__title {
      font-family: 'Montserrat', sans-serif;
      font-weight: 800;
      font-size: 19px;
      line-height: 30px;
      text-transform: uppercase;
      margin-bottom: 11px;
    }

    &__address {
      margin-bottom: 11px;
    }

    &__phone {
      display: inline-block;
      font-family: Montserrat;
      font-weight: 600;
      font-size: 21px;
      line-height: 35px;
      text-align: center;
      text-transform: capitalize;
      color: #FFFFFF;
      background: #F3AF01;
      position: relative;
      padding: 3px 5px;
      margin: 0 10px 11px;
      text-decoration: none;

      &:before,
      &:after {
        content: '';
        position: absolute;
        top: 0;
      }

      &:before {
        border-bottom: 41px solid #F3AF01;
        border-left: 15px solid transparent;
        left: -15px;
        top: 0;
      }

      &:after {
        border-top: 41px solid #F3AF01;
        border-right: 15px solid transparent;
        right: -15px;
        top: 0;
      }
    }

    &__mail {
      color: #000;
      text-decoration: none;
    }

    &__hint {
      font-weight: 500;
      font-size: 16px;
      line-height: 26px;
      color: #5C6E99;
      margin-top: 24px;
      margin-bottom: 16px;
      text-align: left;
    }

    @media (max-width: 575px) {
      width: 100%;
    }
  }
</style>
