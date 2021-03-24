<template>
  <section class="section">
    <div class="container">
      <h2 class="section__title text-center" v-html="title"></h2>

      <div class="row justify-content-center section__text">
        <div class="col-lg-9 text-center">
          <h3 v-html="subTitle"></h3>
        </div>
      </div>

      <div class="row">
        <div class="col-xl-8">
          <Quiz class="section__quiz" :id="1"/>
        </div>

        <div class="col-xl-4">
          <QuoteBlock
            :text="quoteBlock.text"
            :imgSrc="quoteBlock.imgSrc"
            :name="quoteBlock.name"
            :post="quoteBlock.post"
            class="section__quote"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Quiz from '@/components/Base/Quiz.vue';
import QuoteBlock from '@/components/Base/QuoteBlock.vue';

export default {
  name: 'Section5',
  components: {
    Quiz,
    QuoteBlock,
  },
  data() {
    return {
      title: 'Проекты домов',
      subTitle: `
        У Вас нет проекта дома? Стоимость индивидульного проектирования - от 150 руб. за м2.
        Для получения точной стоимости и ориентировочной сумме экономии на строительстве
        ответьте на несколько вопросов:
      `,
      quoteBlock: {
        text: `
          <p>Для клиентов, которым мы строим дом, делаем проекты по цене ниже рыночной.</p>
          <p>
            Наша задача - построить теплый дом на века. Проект - необходимость, без которой мы не начнем работы.
            Поэтому мы проектируем для Вас по себестоимости.
          </p>
        `,
        // imgSrc: require('@/assets/img/quote/img.jpg'),
        imgSrc: '',
        name: 'Игорь Краснов',
        post: 'Директор',
      },
    };
  },
};
</script>

<style lang="scss" scoped>
  .section {
    background-color: #F5F5F5;
    background-image: url(~@/assets/img/block5/bg-left.jpg),
      url(~@/assets/img/block5/bg-right.jpg);
    background-repeat: no-repeat;
    background-position: 30px calc(100% - 30px), 100% 195px;
    padding: 92px 0;

    &__title {
      margin-bottom: 28px;
    }

    &__text {
      margin-bottom: 50px;
    }

    &__quiz {
      margin-right: -15px;
      border-radius: 15px 0 0 15px;

      @media (max-width: 1199px) {
        margin-right: 0;
        border-radius: 15px 15px 0 0;
      }
    }

    &__quote {
      margin-left: -15px;
      border-radius: 0px 15px 15px 0px;

      @media (max-width: 1199px) {
        margin-left: 0;
        border-radius: 0 0 15px 15px;
      }
    }

    @media (max-width: 1599px) {
      background-image: none;
    }

    @media (max-width: 575px) {
      padding: 40px 0;
    }
  }
</style>
