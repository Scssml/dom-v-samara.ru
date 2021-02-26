<template>
  <section class="section">
    <div class="container">
      <h2 class="section__title text-center" v-html="title"></h2>

      <AdvantagesTabs
        :list="advantagesList"
        :formBlock="formBlock"
      />
    </div>
  </section>
</template>

<script>
import AdvantagesTabs from '@/components/Base/AdvantagesTabs.vue';

export default {
  name: 'Section2',
  components: {
    AdvantagesTabs,
  },
  data() {
    return {
      title: 'Заголовок, отражающий суть преимуществ работы с Вами',
      advantagesList: [
        {
          name: 'Материалы со скидкой от производителя',
          imgSrc: require('@/assets/img/advantagesTabs/img-1.jpg'),
          title: 'Качественные материалы со скидкой 20%',
          text: 'Короткий текст о том, что закупаете материалы у производителей с сертификатами качества и партнерской скидкой',
        },
        {
          name: 'Собственная спец техника',
          imgSrc: require('@/assets/img/advantagesTabs/img-1.jpg'),
          title: 'Собственная спец техника',
          text: 'Короткий текст о том, что закупаете материалы у производителей с сертификатами качества и партнерской скидкой',
        },
        {
          name: 'Опытные бригады',
          imgSrc: require('@/assets/img/advantagesTabs/img-1.jpg'),
          title: 'Опытные бригады',
          text: 'Короткий текст о том, что закупаете материалы у производителей с сертификатами качества и партнерской скидкой',
        },
        {
          name: 'Дом под ключ',
          imgSrc: require('@/assets/img/advantagesTabs/img-1.jpg'),
          title: 'Дом под ключ',
          text: 'Короткий текст о том, что закупаете материалы у производителей с сертификатами качества и партнерской скидкой',
        },
        {
          name: 'Проектирование на 2х дешевле среднерыночной',
          imgSrc: require('@/assets/img/advantagesTabs/img-1.jpg'),
          title: 'Проектирование на 2х дешевле среднерыночной',
          text: 'Короткий текст о том, что закупаете материалы у производителей с сертификатами качества и партнерской скидкой',
        },
        {
          name: 'Даем гарантию 5 лет',
          imgSrc: require('@/assets/img/advantagesTabs/img-1.jpg'),
          title: 'Даем гарантию 5 лет',
          text: 'Короткий текст о том, что закупаете материалы у производителей с сертификатами качества и партнерской скидкой',
        },
      ],
      formBlock: {
        imgSrc: require('@/assets/img/formBlock1/bg.png'),
        title: 'Запишитесь на бесплатную консультацию со строительным консультантом',
        text: '<b>Строительный консультант поможет:</b>',
        list: [
          'избежать ошибок до начала строительства',
          'сократить стоимость и время строительства',
          'объяснит свойства материалов',
        ],
        timer: '2021-02-28',
        formProps: {
          items: [
            {
              name: 'phone',
              placeholder: 'Ваш телефон',
              required: true,
              type: 'tel',
              value: '',
              mask: '+7 (999) 999-99-99',
              pattern: '^\\+7\\s\\([0-9]{3}\\)\\s[0-9]{3}-[0-9]{2}-[0-9]{2}$',
              title: '+7 (___) ___-__-__',
            },
          ],
          btnName: 'Записаться бесплатно',
          id: 'advantagesTabs',
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
  .section {
    background-color: #F5F5F5;
    background-image: url(~@/assets/img/block2/bg-left.png),
      url(~@/assets/img/block2/bg-right.png);
    background-repeat: no-repeat;
    background-position: 0 0, 100% calc(100% - 125px);
    padding: 92px 0;

    &__title {
      margin-bottom: 40px;
    }

    @media (max-width: 575px) {
      padding: 40px 0;
    }
  }
</style>
