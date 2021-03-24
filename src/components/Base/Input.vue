<template>
  <label class="d-block">
    <input
      :type="type"
      :name="name"
      :placeholder="placeholder"
      :required="required"
      :value="value"
      v-mask="mask"
      :pattern="pattern"
      :title="title"
      @input="updateInput($event.target.value)"
      class="input"
    />
  </label>
</template>

<script>
export default {
  name: 'Input',
  props: {
    name: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    placeholder: {
      type: String,
      required: true,
      default: '',
    },
    required: {
      type: Boolean,
      default: false,
    },
    value: {
      type: String,
      required: true,
    },
    mask: {
      type: String,
      default: '',
    },
    pattern: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
  },
  methods: {
    updateInput(val) {
      this.$emit('input', val);
    },
  },
};
</script>

<style lang="scss" scoped>
  label {
    margin-bottom: 23px;

    .input {
      width: 100%;
      max-width: 352px;
      height: 62px;
      background: #fff;
      border: 1px solid #D7DBDD;
      border-radius: 7px;
      padding: 0 15px;
      outline: none;
      box-shadow: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
    }
  }
</style>
