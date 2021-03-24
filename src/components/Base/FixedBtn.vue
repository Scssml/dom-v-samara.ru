<template>
  <div class="block">
    <div class="block__img">
      <img :src="iconSrc" alt="fixed" loading="lazy" />
    </div>

    {{ text }}
  </div>
</template>

<script>
export default {
  name: 'FixedBtn',
  props: {
    text: {
      type: String,
      required: true,
    },
    iconSrc: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
  .block {
    background: linear-gradient(180deg, #8AA6F5 0%, #3D71F8 75.78%);
    box-shadow: 0px 4px 10px rgba(61, 114, 249, 0.5);
    border-radius: 15px 50px 0px 0px;
    display: inline-flex;
    align-items: center;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 17px;
    line-height: 20px;
    letter-spacing: 0.07em;
    color: #FFFFFF;
    padding: 11px 30px 11px 20px;
    transform: rotate(-90deg);
    position: fixed;
    bottom: 200px;
    right: -151px;
    cursor: pointer;
    z-index: 5;

    &__img {
      width: 32px;
      height: 32px;
      margin-right: 12px;

      img {
        object-fit: scale-down;
        object-position: center;
        width: 100%;
        height: 100%;
      }

      @media (max-width: 575px) {
        width: 24px;
        height: 24px;
      }
    }

    @media (max-width: 575px) {
      font-size: 14px;
      line-height: 18px;
      bottom: 150px;
      right: -123px;
      padding: 11px 25px 11px 15px;
    }
  }
</style>
