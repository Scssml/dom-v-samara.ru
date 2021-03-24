<template>
  <a href="/" class="logo">
    <img :src="src" alt="logo" loading="lazy" />
    {{ text }}
  </a>
</template>

<script>
export default {
  name: 'Logo',
  props: {
    src: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: false,
    },
  },
};
</script>

<style lang="scss" scoped>
  .logo {
    display: inline-flex;
    vertical-align: middle;
    align-items: center;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    font-size: 15px;
    line-height: 20px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #000000;
    text-decoration: none;

    img {
      flex-shrink: 0;
      max-width: 60px;
      max-height: 60px;
      margin-right: 3px;
    }

    &:hover,
    &:focus {
      color: #000000;
    }

    @media (max-width: 991px) {
      font-size: 14px;
    }

    @media (max-width: 420px) {
      max-width: 175px;
    }
  }
</style>
