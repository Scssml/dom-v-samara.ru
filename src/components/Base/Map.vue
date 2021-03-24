<template>
  <div class="map">
    <img :src="imgSrc" alt="map" loading="lazy" />

    <template v-for="(item, index) in items">
      <div
        class="map__point"
        :class="(activePoint === index) ? 'map__point--active' : ''"
        :key="index"
        :style="`top: ${item.coords[0]}; left: ${item.coords[1]}`"
        @click.prevent="activePoint = index"
      >
        <div
          class="map__point-content"
          :class="(+item.coords[1].replace(/[^.0-9]/gim, '') < 50) ? 'right' : 'left'"
        >
          <template v-for="(district, districtIndex) in item.list">
            <div
              class="map__point-district"
              :key="`district-${districtIndex}`"
            >
              {{district.name}} - <span>{{district.value}}</span>
            </div>
          </template>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'Map',
  props: {
    imgSrc: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  data() {
    return {
      activePoint: null,
    };
  },
};
</script>

<style lang="scss" scoped>
  .map {
    // background-image: url(~@/assets/img/map/map.svg);
    // background-position: center;
    // background-repeat: no-repeat;
    // background-size: contain;
    // max-width: 698px;
    // width: 100%;
    // height: 733px;
    display: inline-block;
    margin-top: -100px;
    position: relative;

    img {
      width: 100%;
    }

    &__point {
      position: absolute;
      width: 37px;
      height: 37px;
      background-image: url(~@/assets/img/map/point.svg);
      background-position: center;
      background-repeat: no-repeat;
      transform: translateX(-50%) translateY(-50%);
      cursor: pointer;
      transition: transform .25s ease-in-out;

      &-content {
        font-weight: 500;
        font-size: 14px;
        line-height: 25px;
        background: #fff;
        position: absolute;
        top: 50%;
        transform: translateY(-50%) scale(0.65);
        width: 250px;
        text-align: left;
        padding: 10px;
        border-radius: 15px;
        opacity: 0;
        visibility: hidden;
        transition: opacity .25s ease-in-out, visibility 0s linear .25s;

        &:before {
          content: '';
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          border-top: 7px solid transparent;
          border-bottom: 7px solid transparent;
        }

        &.right {
          left: calc(100% - 40px);

          &:before {
            left: -7px;
            border-right: 7px solid #fff;
          }
        }

        &.left {
          right: calc(100% - 40px);

          &:before {
            right: -7px;
            border-left: 7px solid #fff;
          }
        }

        span {
          color: #F3AF01;
          font-weight: 700;
        }
      }

      &--active {
        transform: translateX(-50%) translateY(-50%) scale(1.5);
        z-index: 1;

        .map__point-content {
          opacity: 1;
          visibility: visible;
          transition: opacity .25s ease-in-out .15s;
        }
      }

      @media (max-width: 767px) {
        transform: translateX(-50%) translateY(-65%);
      }

      @media (max-width: 575px) {
        width: 20px;
        height: 20px;
        background-size: cover;
      }
    }

    @media (max-width: 1199px) {
      margin-top: 0;
      margin-right: auto;
    }

    @media (max-width: 575px) {
      // height: 400px;
    }
  }
</style>
