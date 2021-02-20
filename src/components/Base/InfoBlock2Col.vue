<template>
  <div class="block">
    <div class="row">
      <div class="col-lg-6 pr-5">
        <div class="block__title">
          <slot name="title-col-1"></slot>
        </div>

        <slot name="text-col-1"></slot>

        <slot name="btn-col-1"></slot>
      </div>

      <div class="col-lg-6 pl-5">
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
    }

    *[class^="col"] {
      box-shadow: 1px 0 0 0 #F3AF01, inset -1px 0 0 0 #F3AF01;

      &:last-child {
        box-shadow: none;
      }
    }
  }
</style>
