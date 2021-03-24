<template>
  <section class="section">
    <div class="container">
      <h2 class="section__title text-center" v-html="title"></h2>

      <div class="row section__tabs">
        <template v-for="(item, index) in tabs">
          <div class="col-6 col-md-4 col-lg-3 mb-4" :key="index">
            <Tab
              :name="item.name"
              :active="index === tabActive - 1"
              @click.native.prevent="tabActive = index + 1"
            />
          </div>
        </template>
      </div>

      <template v-for="(item, index) in tabs">
        <ServicesItem
          :key="index"
          :imgSrc="item.imgSrc"
          :title="item.title"
          :text="item.text"
          :price="item.price"
          :deadline="item.deadline"
          :list="item.list"
          v-if="index === tabActive - 1"
        />
      </template>
    </div>
  </section>
</template>

<script>
import Tab from '@/components/Base/Tab.vue';
import ServicesItem from '@/components/Base/ServicesItem.vue';

export default {
  name: 'Section10',
  components: {
    Tab,
    ServicesItem,
  },
  data() {
    return {
      title: 'Чем еще можем помочь',
      tabActive: 1,
      tabs: [
        {
          name: 'Исследование грунтов',
          title:
            `
              Инженерно геологические изыскания для
              <br>строительства дома
            `,
          imgSrc: require('@/assets/img/services/img-1.jpg'),
          price: '29 000 ₽',
          deadline: 'от 7 дней',
          text: '<b>Работы по геологическим изысканиям для строительства коттеджа включают:</b>',
          list: [
            `
              бурение скважин и отбор проб грунта для изучения геологического разреза,
              определения уровня грунтовых вод и проведения лабораторных исследований;
            `,
            `
              проведение лабораторных исследований отобранных образцов: изучение
              физико-механических, агрессивных и коррозионных свойств грунтов, определение
              химического состава грунтовых вод;
            `,
            `
              камеральная обработка результатов полевых исследований и лабораторных испытаний,
              составление технического отчета.
            `,
          ],
        },
        {
          name: 'Фундаментные работы',
          title: 'Фундаментные работы',
          imgSrc: require('@/assets/img/services/img-2.jpg'),
          price: '',
          deadline: '',
          text: '',
          list: [
            `
              Компания Фундамент Волга выполняет весь цикл работ по возведению фундамента на вашем
              участке от договора до акта приёмки объекта
            `,
            `
              Фундамент за 1-2 дня с гарантией качества до 5 лет
            `,
            `
              При обращении в нашу компанию вы получаете профессиональный проект фундамента для вашего дома
            `,
          ],
        },
        {
          name: 'Дачи / бани',
          title: 'Дачи / бани',
          imgSrc: require('@/assets/img/services/img-3.jpg'),
          price: '',
          deadline: '',
          text: '',
          list: [
            `
              Предлагаем недорогое строительство дачи или русской бани в Самарской области
            `,
            `
              Цена возведения деревянной бани зависит от выбранной вами комплектации
            `,
            `
              Любой проект можно изменить по вашему желанию, выбрать печку, фундамент, заказать дополнительные услуги
            `,
          ],
        },
        {
          name: 'Гаражи',
          title: 'Гаражи',
          imgSrc: require('@/assets/img/services/img-4.jpg'),
          price: '',
          deadline: '',
          text: '',
          list: [
            `
              Профессиональный уровень наших сотрудников позволяет реализовать любые пожелания клиента
            `,
            `
              Множество вариантов материала строительства. Учитывая собственные финансовые возможности,
              представления о виде и особенностях будущего гаража, выбрать тип не составит труда
            `,
          ],
        },
        {
          name: 'Заборы',
          title: 'Заборы',
          imgSrc: require('@/assets/img/services/img-5.jpg'),
          price: '',
          deadline: '',
          text: '',
          list: [
            `
              В заранее утвержденные дату и время наши специалисты приезжают на объект со всем необходимым
              оборудованием и материалами
            `,
            `
              Для увеличения скорости работы мы используем бензиновые буры немецкого производства. Принимая
              во внимание тип почвы и вид забора, предлагаем оптимальный вариант укрепления опор
            `,
            `
              Вся продукция, используемая при строительстве забора, имеет сертификаты соответствия от производителя
            `,
          ],
        },
        {
          name: 'Септики / выгребные ямы',
          title: 'Септики / выгребные ямы',
          imgSrc: require('@/assets/img/services/img-6.jpg'),
          price: '',
          deadline: '',
          text: '',
          list: [
            `
              Для производства колодцев мы используем только качественные материалы
            `,
            `
              Бесплатный выезд специалиста прямо на участок клиента
            `,
            `
              Весь объем работ осуществляется нашей компанией под ключ
            `,
            `
              Выполнение работы в кратчайшие сроки
            `,
          ],
        },
        {
          name: 'Бурение скважин',
          title: 'Бурение скважин',
          imgSrc: require('@/assets/img/services/img-7.jpg'),
          price: '',
          deadline: '',
          text: '',
          list: [
            `
              На протяжении многих лет успешно бурим скважины на различных типах грунтов. Собственные буровые
              установки позволяют оперативно выезжать на участки клиентов и бурить скважины в выбранном месте
            `,
            `
              Работаем без посредников, поэтому цены на услуги ниже рыночных. Для бурения подходит вся Самарская
              область, независимо от района и типа почвы
            `,
          ],
        },
        {
          name: 'Черновая отделка',
          title: 'Черновая отделка',
          imgSrc: require('@/assets/img/services/img-8.jpg'),
          price: '',
          deadline: '',
          text: '',
          list: [
            `
              Бесплатный выезд прораба для составления сметы
            `,
            `
              Работаем по официальному договору
            `,
            `
              Только узкопрофильные мастера
            `,
            `
              Прораб всегда на связи
            `,
            `
              Гарантия на ремонт 2 года
            `,
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
  .section {
    background-color: #F5F5F5;;
    background-image: url(~@/assets/img/block10/bg-left.webp),
      url(~@/assets/img/block10/bg-right.webp);
    background-repeat: no-repeat;
    background-position: 25px calc(100% - 79px), calc(100% - 76px) 358px;
    padding: 92px 0;

    &__title {
      margin-bottom: 40px;

      @media (max-width: 575px) {
        margin-bottom: 20px;
      }
    }

    &__tabs {
      margin-bottom: 76px;

      @media (max-width: 575px) {
        margin-bottom: 30px;
      }
    }

    @media (max-width: 1199px) {
      background-image: none;
    }

    @media (max-width: 575px) {
      padding: 40px 0;
    }
  }
</style>
