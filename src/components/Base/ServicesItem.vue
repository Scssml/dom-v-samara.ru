<template>
  <div class="block">
    <div class="row">
      <div class="col-lg-5">
        <div class="block__img">
          <img :src="imgSrc" :alt="title" />
        </div>
      </div>

      <div class="col-lg-7">
        <div class="block__title" v-html="title"></div>

        <template v-if="price || deadline">
          <div class="row block__props-list">
            <template v-if="price">
              <div class="col-lg-auto">
                <div class="block__prop">
                  <span>Цена:</span>
                  {{ price }}
                </div>
              </div>
            </template>

            <template v-if="deadline">
              <div class="col-lg-auto">
                <div class="block__prop">
                  <span>Сроки:</span>
                  {{ deadline }}
                </div>
              </div>
            </template>
          </div>
        </template>

        <template v-if="text">
          <div v-html="text"></div>
        </template>

        <template v-if="list">
          <List :list="list" class="block__list" />
        </template>

        <Btn
          :text="btnName"
          class="block__btn"
        />
      </div>
    </div>
  </div>
</template>

<script>
import List from '@/components/Base/List.vue';
import Btn from '@/components/Base/Btn.vue';

export default {
  name: 'ServicesItem',
  components: {
    List,
    Btn,
  },
  props: {
    imgSrc: {
      type: String,
      requered: true,
    },
    title: {
      type: String,
      requered: true,
    },
    text: {
      type: String,
      requered: false,
    },
    price: {
      type: String,
      requered: false,
    },
    deadline: {
      type: String,
      requered: false,
    },
    list: {
      type: Array,
      requered: false,
      default: () => [],
    },
  },
  data() {
    return {
      btnName: 'Бесплатная консультация',
    };
  },
};
</script>

<style lang="scss" scoped>
  .block {
    line-height: 27px;

    &__img {
      height: 484px;
      border-radius: 15px;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      }
    }

    &__title {
      font-family: 'Montserrat', sans-serif;
      font-weight: 800;
      font-size: 19px;
      line-height: 30px;
      text-transform: uppercase;
      margin-bottom: 18px;
    }

    &__props-list {
      margin-bottom: 32px;
    }

    &__prop {
      font-family: 'Montserrat', sans-serif;
      font-weight: 500;
      font-size: 21px;
      line-height: 30px;
      letter-spacing: 0.05em;

      span {
        font-family: 'Raleway', sans-serif;
        font-weight: bold;
        font-size: 15px;
        line-height: 21px;
        text-transform: uppercase;
        color: #F3AF01;
      }
    }

    &__list {
      font-size: 16px;
      line-height: 35px;
      margin-top: 15px;
    }

    &__btn {
      margin-top: 35px;
      width: 100%;
      max-width: 294px;
    }
  }
</style>
