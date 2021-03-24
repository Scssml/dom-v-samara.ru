<template>
  <section class="section">
    <div class="container">
      <h2 class="section__title text-center" v-html="title"></h2>

      <div class="row">
        <div class="col-xl-5">
          <StaffItem
            :imgSrc="staff.imgSrc"
            :name="staff.name"
            :post="staff.post"
            :phone="staff.phone"
            :text="staff.text"
          />
        </div>

        <div class="col-xl-7 text-center text-xl-right">
          <Map
            :imgSrc="map.imgSrc"
            :items="map.points"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import StaffItem from '@/components/Base/StaffItem.vue';
import Map from '@/components/Base/Map.vue';

export default {
  name: 'Section9',
  components: {
    StaffItem,
    Map,
  },
  data() {
    return {
      title: `
        Помогли построить более 130 домов и коттеджей 
        <br>по всей Самарской области
      `,
      staff: {
        // imgSrc: require('@/assets/img/staff/staff.webp'),
        imgSrc: '',
        name: 'Игорь Краснов',
        post: 'Директор',
        phone: '+7 (987) 953-78-60',
        text: `
          Я рад приветствовать вас на нашем сайте!
          <br><br>Мы занимаемся строительством домов из камня в Самарской области, реализуя проекты
          самых разных уровней сложности.
          <br><br>Вся наша деятельность основана на убеждении, что дом
          — не просто постройка. Это — место, где рождается новая история. Важно всё: от правильно
          подобранного фундамента до грамотно обустроенного окружения.
        `,
      },
      map: {
        imgSrc: require('@/assets/img/map/map.svg'),
        points: [
          {
            coords: ['76%', '58%'],
            list: [
              {
                name: 'Большеглушицкий р-н',
                value: '1 объект',
              },
            ],
          },
          {
            coords: ['57%', '83%'],
            list: [
              {
                name: 'Борский р-н',
                value: '1 объект',
              },
            ],
          },
          {
            coords: ['60%', '55%'],
            list: [
              {
                name: 'Самара',
                value: '26 объектов',
              },
              {
                name: 'Красноглинский р-н',
                value: '5 объектов',
              },
              {
                name: 'Новокуйбышевск',
                value: '4 объекта',
              },
              {
                name: 'Тольятти',
                value: '1 объект',
              },
              {
                name: 'Отрадный',
                value: '1 объект',
              },
              {
                name: 'Сызрань',
                value: '1 объект',
              },
              {
                name: 'Чапаевск',
                value: '2 объекта',
              },
              {
                name: 'Волжский р-н',
                value: '29 объектов',
              },
            ],
          },
          {
            coords: ['55%', '65%'],
            list: [
              {
                name: 'Кинельский р-н',
                value: '5 объектов',
              },
            ],
          },
          {
            coords: ['40%', '55%'],
            list: [
              {
                name: 'Красноярский р-н',
                value: '18 объектов',
              },
            ],
          },
          {
            coords: ['60%', '22%'],
            list: [
              {
                name: 'Приволжский р-н',
                value: '1 объект',
              },
            ],
          },
          {
            coords: ['37%', '35%'],
            list: [
              {
                name: 'Ставропольский р-н',
                value: '7 объектов',
              },
            ],
          },
          {
            coords: ['70%', '28%'],
            list: [
              {
                name: 'Хворостянский р-н',
                value: '1 объект',
              },
            ],
          },
          {
            coords: ['15%', '78%'],
            list: [
              {
                name: 'Шенталитнский р-н',
                value: '1 объект',
              },
            ],
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss" scoped>
  .section {
    background-color: #E7F0F9;
    background-image: url(~@/assets/img/block9/bg-left-1.jpg),
      url(~@/assets/img/block9/bg-left-2.webp),
      url(~@/assets/img/block9/bg-right.webp);
    background-repeat: no-repeat;
    background-position: 0 40px, 183px calc(100% - 65px), calc(100% - 68px) 207px;
    padding: 92px 0;

    &__title {
      margin-bottom: 34px;
      position: relative;
      z-index: 1;
    }

    @media (max-width: 1599px) {
      background-image: url(~@/assets/img/block9/bg-left-1.jpg),
        url(~@/assets/img/block9/bg-left-2.webp),
        none;
    }

    @media (max-width: 1321px) {
      background-image: none,
        url(~@/assets/img/block9/bg-left-2.webp),
        none;
    }

    @media (max-width: 1199px) {
      background-image: none;
    }

    @media (max-width: 575px) {
      padding: 40px 0;
      background-image: none;
    }
  }
</style>
