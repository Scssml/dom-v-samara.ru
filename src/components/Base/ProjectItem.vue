<template>
  <div class="project">
    <div class="project__img">
      <img :src="imgSrc" :alt="name" loading="lazy" />
    </div>

    <div class="project__content">
      <div class="project__name">{{ name }}</div>

      <template v-if="props">
        <div class="row align-items-center">
          <template v-for="(item, index) in props">
            <div
              :class="
                (index + 1 === props.length && ((index + 1) % 2))
                  ? 'col-12'
                  : 'col-6 col-sm-12 col-md-6'
              "
              :key="index"
            >
              <ProjectPropItem
                :icon="item.icon"
                :value="item.value"
              />
            </div>
          </template>
        </div>
      </template>

      <Btn
        :text="btnName"
        @click.prevent.native="showPopup()"
        class="w-100"
      />
    </div>

    <!-- <Popup
      :value="showPopup"
      :small="false"
      @close="showPopup = false"
    >
      <h2 class="text-center mb-3" v-html="popupTitle"></h2>
      <p class="text-center mb-4">дом "{{ name }}"</p>

      <template v-if="planSrc">
        <div class="text-center">
          <img :src="planSrc" :alt="name" loading="lazy" />
        </div>
      </template>
    </Popup> -->
  </div>
</template>

<script>
import ProjectPropItem from '@/components/Base/ProjectPropItem.vue';
import Btn from '@/components/Base/Btn.vue';
// import Popup from '@/components/Base/Popup.vue';

export default {
  name: 'ProjectItem',
  components: {
    ProjectPropItem,
    Btn,
    // Popup,
  },
  props: {
    imgSrc: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    props: {
      type: Array,
      required: false,
      default: () => [],
    },
    planSrc: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      btnName: 'Подробнее',
      // showPopup: false,
      // popupTitle: 'Возможные планировки дома',
    };
  },
  methods: {
    showPopup() {
      this.$emit('showPopup');
    },
  },
};
</script>

<style lang="scss" scoped>
  .project {
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(63, 63, 63, 0.1);
    border-radius: 15px;
    overflow: hidden;
    height: 100%;

    &__img {
      height: 186px;
      margin-bottom: 17px;

      img {
        object-fit: cover;
        object-position: center;
        width: 100%;
        height: 100%;
      }
    }

    &__content {
      padding: 0 18px 29px;
    }

    &__name {
      font-weight: 800;
      line-height: 30px;
      text-align: center;
      text-transform: uppercase;
      margin-bottom: 19px;

      @media (max-width: 575px) {
        font-size: 17px;
      }
    }
  }
</style>
