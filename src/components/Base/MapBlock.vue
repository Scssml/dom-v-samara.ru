<template>
  <div class="block-map">
    <yandexMap
      :settings="{ apiKey: mapSettings.apikey }"
      :coords="mapSettings.center"
      :zoom="mapSettings.zoom"
      :controls="mapSettings.controls"
      :scrollZoom="mapSettings.scrollZoom"
      :showAllMarkers="mapSettings.showAllMarkers"
      class="block-map__map"
    >
      <template v-for="(item, index) in mapSettings.markers">
        <ymapMarker
          :key="index"
          :markerId="`marker-${index}`"
          :coords="item.coords"
        />
      </template>
    </yandexMap>

    <div class="container position-relative">
      <FormBlock3
        :title="formBlock.title"
        :address="formBlock.address"
        :phone="formBlock.phone"
        :mail="formBlock.mail"
        :hint="formBlock.hint"
        :formProps="formBlock.formProps"
        class="block-map__info"
      />
    </div>
  </div>
</template>

<script>
import { yandexMap, ymapMarker } from 'vue-yandex-maps';
import FormBlock3 from '@/components/Base/FormBlock3.vue';

export default {
  name: 'MapBlock',
  components: {
    yandexMap,
    ymapMarker,
    FormBlock3,
  },
  props: {
    mapSettings: {
      type: Object,
      required: true,
      default: () => {},
    },
    formBlock: {
      type: Object,
      required: false,
      default: () => {},
    },
  },
};
</script>

<style lang="scss" scoped>
  .block-map {
    height: 646px;

    &__map {
      height: 100%;
    }

    &__info {
      position: absolute;
      bottom: 0;
      left: 123px;
      z-index: 1;

      @media (max-width: 991px) {
        left: 0;
      }
    }
  }
</style>
