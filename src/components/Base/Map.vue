<template>
  <div class="map">

  </div>
</template>

<script>
export default {
  name: 'Map',
  data() {
    return {

    };
  },
};
</script>

<style lang="scss" scoped>
  .map {
    background-image: url(~@/assets/img/map/map.svg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    max-width: 698px;
    width: 100%;
    height: 733px;
    margin-top: -100px;
    margin-left: auto;

    @media (max-width: 1199px) {
      margin-top: 0;
      margin-right: auto;
    }
  }
</style>
