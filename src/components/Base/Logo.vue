<template>
  <a href="/" class="logo">
    <img :src="src" alt="logo" />
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
    display: flex;
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
  }
</style>
