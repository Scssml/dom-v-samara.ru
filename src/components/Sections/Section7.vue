<template>
  <section class="section">
    <div class="container">
      <h2 class="section__title text-center" v-html="title"></h2>

      <div class="row section__advantages">
        <template v-for="(item, index) in advantageList">
          <div class="col-lg-4" :key="index">
            <AdvantageItem
              :imgSrc="item.imgSrc"
              :text="item.text"
            />
          </div>
        </template>
      </div>

      <div class="row">
        <template v-for="(item, index) in stepsList">
          <div class="col-lg-3" :key="index">
            <StepItem
              :imgSrc="item.imgSrc"
              :list="item.list"
            />
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<script>
import AdvantageItem from '@/components/Base/AdvantageItem.vue';
import StepItem from '@/components/Base/StepItem.vue';

export default {
  name: 'Section7',
  components: {
    AdvantageItem,
    StepItem,
  },
  data() {
    return {
      title: 'Мы выполняем весь комплекс работ',
      advantageList: [
        {
          imgSrc: require('@/assets/img/advantages/img-1.png'),
          text: 'Закупим и бесплатно доставим строительный материал до объекта',
        },
        {
          imgSrc: require('@/assets/img/advantages/img-2.png'),
          text: 'Предоставим еженедельный фото / видео отчет в любой мессенджер',
        },
        {
          imgSrc: require('@/assets/img/advantages/img-3.png'),
          text: 'Не оставим следов: бесплатно уберем строительный мусор, сохраним ландшафт',
        },
      ],
      stepsList: [
        {
          imgSrc: require('@/assets/img/steps/img-1.svg'),
          list: [
            'Проверим готовый (типовой или индивидуальный) проект дома',
            'Сэкономим деньги, силы и нервы',
            'Проверку осуществляет строительный консультант - ведущий специалист загородного домостроения',
          ],
        },
        {
          imgSrc: require('@/assets/img/steps/img-2.svg'),
          list: [
            'Проверим готовый (типовой или индивидуальный) проект дома',
            'Сэкономим деньги, силы и нервы',
            'Проверку осуществляет строительный консультант - ведущий специалист загородного домостроения',
          ],
        },
        {
          imgSrc: require('@/assets/img/steps/img-3.svg'),
          list: [
            'Проверим готовый (типовой или индивидуальный) проект дома',
            'Сэкономим деньги, силы и нервы',
            'Проверку осуществляет строительный консультант - ведущий специалист загородного домостроения',
          ],
        },
        {
          imgSrc: require('@/assets/img/steps/img-4.svg'),
          list: [
            'Проверим готовый (типовой или индивидуальный) проект дома',
            'Сэкономим деньги, силы и нервы',
            'Проверку осуществляет строительный консультант - ведущий специалист загородного домостроения',
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
  .section {
    background-color: #F5F5F5;
    background-image: url(~@/assets/img/block7/bg-left.png),
      url(~@/assets/img/block7/bg-right.png);
    background-repeat: no-repeat;
    background-position: 40px 100%, 100% calc(100% - 20px);
    padding: 92px 0;

    &__title {
      margin-bottom: 52px;
    }

    &__advantages {
      margin-bottom: 53px;
    }
  }
</style>
