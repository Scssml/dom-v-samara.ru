<template>
  <a :href="href" class="phone"></a>
</template>

<script>
export default {
  name: 'PhoneBtn',
  props: {
    tel: {
      type: String,
      required: true,
    },
  },
  computed: {
    href() {
      return `tel:${this.tel.replace(/[^+\d]/g, '')}`;
    },
  },
};
</script>

<style lang="scss" scoped>
  .phone {
    display: inline-block;
    vertical-align: middle;
    width: 30px;
    height: 30px;
    background-image: url(~@/assets/img/header/phone.svg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
  }
</style>
