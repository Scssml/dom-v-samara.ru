<template>
  <div class="block-map">
    <template v-if="show">
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
    </template>

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
  data() {
    return {
      sectionTop: null,
    };
  },
  computed: {
    show() {
      if (this.sectionTop !== null) {
        const windowHeight = document.documentElement.clientHeight + 150;
        if (windowHeight >= this.sectionTop) {
          window.removeEventListener('scroll', this.scrollPage, { passive: true });
          return true;
        }
      }
      return false;
    },
  },
  methods: {
    scrollPage() {
      const section = document.getElementById('contacts');
      const sectionBox = section.getBoundingClientRect();
      this.sectionTop = sectionBox.top;
    },
  },
  created() {
    window.addEventListener('scroll', this.scrollPage, { passive: true });
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

      @media (max-width: 575px) {
        width: calc(100% - 30px);
        left: 15px;
      }
    }
  }
</style>
