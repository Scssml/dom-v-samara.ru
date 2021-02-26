<template>
  <a :href="href" class="phone">
    {{ tel }}
  </a>
</template>

<script>
export default {
  name: 'Phone',
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
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 21px;
    line-height: 25px;
    letter-spacing: 0.05em;
    color: #000000;
    text-decoration: none;

    &:hover,
    &:focus {
      color: #000000;
    }

    @media (max-width: 991px) {
      font-size: 18px;
    }

    @media (max-width: 575px) {
      font-size: 13px;
    }
  }
</style>
