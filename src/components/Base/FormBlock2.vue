<template>
  <div class="block" :style="bgImage">
    <template v-if="imgSrc">
      <div class="block__img">
        <img :src="imgSrc" alt="form-img" />
      </div>
    </template>

    <div class="row">
      <div class="col-lg-8">
        <template v-if="title">
          <div class="block__title" v-html="title"></div>
        </template>

        <template v-if="text">
          <div class="block__text" v-html="text"></div>
        </template>

        <div class="row">
          <div class="col-lg-5">
            <Form
              :items="formProps.items"
              :btnName="formProps.btnName"
              :id="formProps.id"
            />
          </div>

          <div class="col-lg-4">
            <FormHint :text="hint" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Form from '@/components/Base/Form.vue';
import FormHint from '@/components/Base/FormHint.vue';

export default {
  name: 'FormBlock2',
  components: {
    Form,
    FormHint,
  },
  props: {
    bgSrc: {
      type: String,
      requered: false,
    },
    imgSrc: {
      type: String,
      requered: false,
    },
    title: {
      type: String,
      requered: false,
    },
    text: {
      type: String,
      requered: false,
    },
    formProps: {
      type: Object,
      requered: true,
      default: () => {},
    },
    hint: {
      type: String,
      requered: false,
    },
  },
  computed: {
    bgImage() {
      return (this.bgSrc) ? `background-image: url(${this.bgSrc})` : '';
    },
  },
};
</script>

<style lang="scss" scoped>
  .block {
    background: #F5F5F5;
    border-radius: 15px;
    padding: 50px 60px 67px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;

    &__title {
      font-family: 'Montserrat', sans-serif;
      font-weight: bold;
      font-size: 28px;
      line-height: 48px;
      margin-bottom: 14px;
    }

    &__text {
      margin-bottom: 35px;
    }

    &__img {
      width: 485px;
      height: 477px;
      position: absolute;
      bottom: 0;
      right: 30px;

      img {
        object-fit: scale-down;
        object-position: bottom;
        width: 100%;
        height: 100%;
      }
    }
  }
</style>
