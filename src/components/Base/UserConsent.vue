<template>
  <div class="userconsent">
    <input
      type="checkbox"
      :checked="value"
      :id="id"
      @input="updateInput($event.target.checked)"
    />

    <label :for="id">
      <span v-html="text"></span>
    </label>
  </div>
</template>

<script>
export default {
  name: 'UserConsent',
  props: {
    value: {
      type: Boolean,
      required: true,
    },
    id: {
      type: [String, Number],
      required: true,
    },
  },
  data() {
    return {
      text: 'Я согласен с <a href="#">Политикой конфиденциальности</a>',
    };
  },
  methods: {
    updateInput(val) {
      this.$emit('input', val);
    },
  },
};
</script>

<style lang="scss">
  .userconsent {
    margin-top: 17px;

    input {
      display: none;

      &:checked + label:before {
        background-image: url(~@/assets/img/form/checkbox.svg);
      }
    }

    label {
      margin-bottom: 0;
      font-size: 12px;
      line-height: 17px;
      color: #737373;
      display: flex;

      &:before {
        content: '';
        width: 15px;
        height: 15px;
        background-color: #fff;
        border: 1px solid #D7DBDD;
        border-radius: 1px;
        flex-shrink: 0;
        margin-right: 10px;
        background-position: center;
        background-repeat: no-repeat;
      }
    }
  }
</style>
