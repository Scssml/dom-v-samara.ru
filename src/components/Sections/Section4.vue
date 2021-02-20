<template>
  <section class="section">
    <div class="container">
      <h2 class="section__title text-center" v-html="title"></h2>

      <h3 class="section__sub-title text-center" v-html="subTitle"></h3>

      <div class="row section__materials">
        <template v-for="(item, index) in cardList">
          <div class="col-lg-4" :key="index">
            <MaterialsItem
              :imgSrc="item.imgSrc"
              :name="item.name"
              :text="item.text"
              :price="item.price"
            />
          </div>
        </template>
      </div>

      <div class="text-center">
        <template v-if="compare">
          <a :href="compare.link" target="_blank" class="section__compare-link">
            {{ compare.text }}
          </a>
        </template>

        <template v-if="smallText">
          <div class="section__small-text">{{ smallText }}</div>
        </template>
      </div>

      <InfoBlock2Col class="section__pay">
        <template v-slot:title-col-1>{{ payBlock.col1.title }}</template>
        <template v-slot:text-col-1>
          <ul class="section__list">
            <template v-for="(item, index) in payBlock.col1.list">
              <li :key="index" v-html="item"></li>
            </template>
          </ul>
          <div v-html="payBlock.col1.text"></div>
        </template>

        <template v-slot:title-col-2>{{ payBlock.col2.title }}</template>
        <template v-slot:text-col-2>
          <div v-html="payBlock.col2.text"></div>
        </template>
        <template v-slot:btn-col-2>
            <Btn
              :text="payBlock.col2.btnName"
              :big="true"
              class="section__btn"
            />
        </template>
      </InfoBlock2Col>
    </div>
  </section>
</template>

<script>
import MaterialsItem from '@/components/Base/MaterialsItem.vue';
import InfoBlock2Col from '@/components/Base/InfoBlock2Col.vue';
import Btn from '@/components/Base/Btn.vue';

export default {
  name: 'Section4',
  components: {
    MaterialsItem,
    InfoBlock2Col,
    Btn,
  },
  data() {
    return {
      title: 'Цены и условия оплаты',
      subTitle: 'Используем ТОП 3 материала для строительства',
      cardList: [
        {
          imgSrc: require('@/assets/img/materials/img-1.jpg'),
          name: 'Газобетон',
          text: 'Теплый и прочный дом с небольшим весом',
          price: 'от 1.900.000 ₽',
        },
        {
          imgSrc: require('@/assets/img/materials/img-2.jpg'),
          name: 'Кирпич',
          text: 'Обладает высокой тепло и звукоизоляцией',
          price: 'от 1.900.000 ₽',
        },
        {
          imgSrc: require('@/assets/img/materials/img-3.jpg'),
          name: 'Керамический блок',
          text: 'Максимальные теплоизоляционные свойства',
          price: 'от 1.900.000 ₽',
        },
      ],
      compare: {
        link: '#',
        text: 'Показать таблицу сравнения с другими материалами',
      },
      smallText: 'Все материалы соответствуют ГОСТам и стандартам качества',
      payBlock: {
        col1: {
          title: 'Оплата по этапам',
          list: [
            '<b>1 этап</b> - 3% при подписании договора',
            '<b>2 этап</b> -  15% при уведомлении о начале строительных работ',
            '<b>3 этап</b> -  20% при уведомлении об окончании работ по изготовлению фундамента',
            '<b>4 этап</b> -  24% возведение первого этажа',
            '<b>5 этап</b> -  20% монтаж кровельного покрытия',
            '<b>6 этап</b> -  15% начало работ по наружной отделке',
            '<b>7 этап</b> -  3% при окончании строительства',
          ],
        },
        col2: {
          title: 'Оплата в кредит',
          text: `
            <p>Для более комфортного сотрудничества мы предлагаем своим клиентам различные виды кредитования.</p>
            <p>Нужна консультация или квалифицированная помощь в подборе наиболее выгодных условий кредитования? Оставляйте заявку на сайте и мы обязательно найдем подходящее именно вам решение.</p>
          `,
          btnName: 'Получить консультацию',
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
  .section {
    background-color: #FBFBFB;
    background-image: url(~@/assets/img/block4/bg-right.png),
      url(~@/assets/img/block4/bg.jpg);
    background-repeat: no-repeat;
    background-position: 100% calc(100% + 200px), 0 0;
    background-size: auto, cover;
    padding: 100px 0;

    &__title {
      margin-bottom: 28px;
    }

    &__sub-title {
      margin-bottom: 38px;
    }

    &__materials {
      margin-bottom: 23px;
    }

    &__compare-link {
      font-weight: 600;
      font-size: 14px;
      line-height: 50px;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      margin-bottom: 4px;
    }

    &__small-text {
      font-weight: 500;
      font-size: 13px;
      line-height: 20px;
      color: #737373;
    }

    &__pay {
      margin-top: 65px;
    }

    &__list {
      padding: 0;
      margin: 0;
      list-style: none;

      li {
        line-height: 28px;
      }
    }

    &__btn {
      width: 284px;
    }
  }
</style>
