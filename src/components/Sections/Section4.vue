<template>
  <section class="section">
    <div class="container">
      <h2 class="section__title text-center" v-html="title"></h2>

      <h3 class="section__sub-title text-center" v-html="subTitle"></h3>

      <div class="row section__materials d-none d-lg-flex">
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

      <div class="section__slider d-lg-none">
        <Slider
          :breakpoints="sliderBreakpoints"
          :id="3"
        >
          <template v-for="(item, index) in cardList">
            <SwiperSlide :key="index">
                <MaterialsItem
                :imgSrc="item.imgSrc"
                :name="item.name"
                :text="item.text"
                :price="item.price"
              />
            </SwiperSlide>
          </template>
        </Slider>
      </div>

      <div class="text-center">
        <template v-if="compare">
          <a
            :href="compare.link"
            target="_blank"
            class="section__compare-link"
            @click.prevent="showPopup = true"
          >
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
              @click.native.prevent="$store.dispatch('setShowPopupFeedback', true)"
            />
        </template>
      </InfoBlock2Col>
    </div>

    <Popup
      :value="showPopup"
      :small="false"
      @close="showPopup = false"
    >
      <h2 class="text-center mb-4" v-html="PopupBlock.title"></h2>

      <Table
        :head="PopupBlock.table.head"
        :value="PopupBlock.table.value"
      />
    </Popup>
  </section>
</template>

<script>
import Slider from '@/components/Base/Slider.vue';
import { SwiperSlide } from 'vue-awesome-swiper';
import MaterialsItem from '@/components/Base/MaterialsItem.vue';
import InfoBlock2Col from '@/components/Base/InfoBlock2Col.vue';
import Btn from '@/components/Base/Btn.vue';
import Popup from '@/components/Base/Popup.vue';
import Table from '@/components/Base/Table.vue';

export default {
  name: 'Section4',
  components: {
    Slider,
    SwiperSlide,
    MaterialsItem,
    InfoBlock2Col,
    Btn,
    Popup,
    Table,
  },
  data() {
    return {
      title: 'Цены и условия оплаты',
      subTitle: 'Используем ТОП 3 материала для строительства',
      showPopup: false,
      sliderBreakpoints: {
        768: {
          slidesPerView: 2.2,
          spaceBetween: 0,
          freeMode: true,
        },
        576: {
          slidesPerView: 1.7,
          spaceBetween: 0,
          freeMode: true,
        },
        320: {
          slidesPerView: 1.2,
          spaceBetween: 0,
          freeMode: true,
        },
      },
      cardList: [
        {
          imgSrc: require('@/assets/img/materials/img-1.jpg'),
          name: 'Газобетон',
          text: 'Теплый и прочный дом с небольшим весом',
          price: 'от 17 тыс. руб. за м2',
        },
        {
          imgSrc: require('@/assets/img/materials/img-2.jpg'),
          name: 'Керамзитоблок',
          text: 'Высокая прочность материала',
          price: 'от 17 тыс. руб. за м2',
        },
        {
          imgSrc: require('@/assets/img/materials/img-3.jpg'),
          name: 'Керамический блок',
          text: 'Легкий и экологичный материал',
          price: 'от 18 тыс. руб. за м2',
        },
      ],
      compare: {
        link: '#',
        text: 'Показать таблицу сравнения с другими материалами',
      },
      PopupBlock: {
        title: 'Таблица сравнения Газобетон и Керамзитоблок',
        table: {
          head: [
            '',
            'Газобетон',
            'Керамзитоблок',
          ],
          value: [
            [
              'Теплоизоляционные свойства',
              'Хорошо сохраняет тепло - можно сэкономить на утеплителе (в некоторых случаях он не понадобится)',
              'Обязательно использование утеплителя',
            ],
            [
              'Особенности укладки',
              'Укладывается на клеевой раствор, что минимизирует мостики холода',
              'Укладывается на цементный раствор',
            ],
            [
              'Геометрия',
              'Правильная геометрия, не нужно тратиться на толстый слой штукатурки',
              'Не такой ровный, как газобетон, потребуется штукатурка стен',
            ],
            [
              'Цена',
              `
                $$. Стоимость постройки дома не отличается от стоимости дома из керамзитоблока за счет меньшего
                количества кубометров материала для строительства
              `,
              `
                $. Из-за размеров и тяжести материала необходимо большее кол-во кубометров, чем при использовании
                газобетона
              `,
            ],
            [
              'Срок строительства',
              'Значительно уменьшается срок строительства за счет особенностей материала',
              '—',
            ],
          ],
        },
      },
      smallText: 'Все материалы соответствуют ГОСТам и стандартам качества',
      payBlock: {
        col1: {
          title: 'ПОЭТАПНАЯ ОПЛАТА',
          list: [
            '<b>1 этап</b> - при подписании договора',
            '<b>2 этап</b> - при уведомлении о начале строительных работ',
            '<b>3 этап</b> - при уведомлении об окончании работ по изготовлению фундамента',
            '<b>4 этап</b> - возведение первого этажа',
            '<b>5 этап</b> - монтаж кровельного покрытия',
            '<b>6 этап</b> - начало работ по наружной отделке',
            '<b>7 этап</b> - при окончании строительства',
          ],
        },
        col2: {
          title: 'Оплата в кредит',
          text: `
            <p>Для более комфортного сотрудничества мы предлагаем своим клиентам помощь в получении кредита.</p>
            <p>Нужна помощь в подборе наиболее выгодных условий кредитования? Оставляйте заявку на сайте и мы обязательно поможем Вам подобрать кредит через наших партнеров.</p>
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
    background-image: url(~@/assets/img/block4/bg-right.webp),
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

    &__slider {
      margin-bottom: 40px;

      @media (max-width: 575px) {
        margin-bottom: 60px;
      }
    }

    &__compare-link {
      font-weight: 600;
      font-size: 14px;
      line-height: 50px;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      margin-bottom: 4px;

      @media (max-width: 575px) {
        display: inline-block;
        font-size: 12px;
        line-height: 20px;
        margin-bottom: 10px;
      }
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

        @media (max-width: 575px) {
          line-height: 20px;
          margin-bottom: 5px;
        }
      }
    }

    &__btn {
      width: 284px;

      @media (max-width: 575px) {
        max-width: 100%;
      }
    }

    @media (max-width: 991px) {
      background-position: 100% calc(100% + 200px), center;
    }

    @media (max-width: 575px) {
      padding: 40px 0;
    }
  }
</style>
