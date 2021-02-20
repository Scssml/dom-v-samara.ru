<template>
  <section class="section">
    <div class="container">
      <h2 class="section__title text-center" v-html="title"></h2>

      <div class="row justify-content-center">
        <div class="col-lg-9 text-center" v-html="text"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Section5',
  components: {
  },
  data() {
    return {
      title: 'Проекты домов',
      text: `
        У Вас нет проекта дома? Стоимость индивидульного проектирования - от 150 руб. за м2.
        Для получения точной стоимости и ориентировочной сумме экономии на строительстве
        ответьте на несколько вопросов:
      `,
    };
  },
};
</script>

<style lang="scss" scoped>
  .section {
    height: 917px;
    background-color: #F5F5F5;
    background-image: url(~@/assets/img/block5/bg-left.jpg),
      url(~@/assets/img/block5/bg-right.jpg);
    background-repeat: no-repeat;
    background-position: 30px calc(100% - 30px), 100% 195px;
    padding: 92px 0;

    &__title {
      margin-bottom: 28px;
    }
  }
</style>
