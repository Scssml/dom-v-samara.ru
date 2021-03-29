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
import axios from 'axios';
import AdvantagesTabs from '@/components/Base/AdvantagesTabs.vue';

export default {
  name: 'Section2',
  components: {
    AdvantagesTabs,
  },
  data() {
    return {
      title: 'Мы поможем сэкономить на строительстве дома без потери качества работ',
      advantagesList: [
        {
          name: 'Геология в подарок',
          imgSrc: require('@/assets/img/advantagesTabs/img-1.jpg'),
          title: 'Геология в подарок',
          text: 'Геологические изыскания помогут сэкономить на фундаментных работах и значительно продлят срок службы фундамента. Дом простоит более 200 лет',
        },
        {
          name: 'Скидка на материалы',
          imgSrc: require('@/assets/img/advantagesTabs/img-2.jpg'),
          title: 'Скидка на материалы',
          text: 'Мы закупаем материалы у партнеров со скидкой, что позволяет нам снизить стоимость строительства Вашего дома',
        },
        {
          name: 'Экономия на технике',
          imgSrc: require('@/assets/img/advantagesTabs/img-3.jpg'),
          title: 'Экономия на технике',
          text: 'Наличие собственной техники позволяет снизить стоимость ее привлечения в смете на 20-30%',
        },
        {
          name: 'Гарантия 5 лет',
          imgSrc: require('@/assets/img/advantagesTabs/img-4.jpg'),
          title: 'Гарантия 5 лет',
          text: 'Гарантия прописана  в договоре. Выполним обязательства даже если Вы позвоните через 4 года и 360 дней',
        },
        {
          name: 'Проект по себестоимости',
          imgSrc: require('@/assets/img/advantagesTabs/img-5.jpg'),
          title: 'Проект по себестоимости',
          text: 'Наша задача - построить дом. Поэтому мы готовы сделать проект по себестоимости - от 150 руб. за м2',
        },
        {
          name: 'Опыт бригад 10 лет',
          imgSrc: require('@/assets/img/advantagesTabs/img-6.jpg'),
          title: 'Опыт бригад 10 лет',
          text: 'Опыт работы позволяет не закладывать в смету резерв на исправление ошибок. Мы построим дом без ошибок и переработок',
        },
      ],
      formBlock: {
        imgSrc: require('@/assets/img/formBlock1/bg.webp'),
        title: 'Запишитесь на бесплатную консультацию со строительным консультантом',
        text: '<b>Строительный консультант поможет:</b>',
        list: [
          'избежать ошибок до начала строительства',
          'сократить стоимость и время строительства',
          'объяснит свойства материалов',
        ],
        timer: null,
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
      sectionTop: null,
    };
  },
  methods: {
    getTimer() {
      axios
        .get('/ajax/coundown.txt')
        .then((response) => {
          this.formBlock.timer = response.data;
        });
    },
  },
  created() {
    this.getTimer();
  },
};
</script>

<style lang="scss" scoped>
  .section {
    background-color: #F5F5F5;
    background-image: url(~@/assets/img/block2/bg-left.webp),
      url(~@/assets/img/block2/bg-right.webp);
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
