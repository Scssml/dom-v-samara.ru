<template>
  <div class="block">
    <div class="row">
      <div class="col-lg-6 pr-lg-5 mb-4 mb-lg-0 pb-4 pb-g-0">
        <div class="block__title">
          <slot name="title-col-1"></slot>
        </div>

        <slot name="text-col-1"></slot>

        <slot name="btn-col-1"></slot>
      </div>

      <div class="col-lg-6 pl-lg-5">
        <div class="block__title">
          <slot name="title-col-2"></slot>
        </div>

        <slot name="text-col-2"></slot>

        <slot name="btn-col-2"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InfoBlock2Col',
};
</script>

<style lang="scss" scoped>
  .block {
    background: #FFFFFF;
    box-shadow: 0px 4px 40px rgba(201, 212, 222, 0.7);
    border-radius: 15px;
    padding: 35px 45px;

    &__title {
      font-family: 'Montserrat', sans-serif;
      font-weight: 800;
      font-size: 19px;
      line-height: 30px;
      text-transform: uppercase;
      margin-bottom: 16px;

      @media (max-width: 575px) {
        text-align: center;
        font-size: 14px;
        line-height: 22px;
      }
    }

    *[class^="col"] {
      border-right: 2px solid #f3af01;

      &:last-child {
        border-right: none;
        border-bottom: none;
      }

      @media (max-width: 991px) {
        border-right: none;
        border-bottom: 2px solid #f3af01;
      }
    }

    @media (max-width: 575px) {
      padding: 20px;
    }
  }
</style>
