<template>
  <MapBlock
    :title="mabBlock.title"
    :address="mabBlock.address"
    :phone="mabBlock.phone"
    :mail="mabBlock.mail"
    :mapSettings="mabBlock.mapSettings"
    :formBlock="mabBlock.formBlock"
  />
</template>

<script>
import MapBlock from '@/components/Base/MapBlock.vue';

export default {
  name: 'Section11',
  components: {
    MapBlock,
  },
  data() {
    return {
      mabBlock: {
        mapSettings: {
          apiKey: '0f36e4b1-a183-430d-ade7-6581f26610bd',
          center: [53.195954, 50.220025],
          zoom: 14,
          controls: [],
          scrollZoom: false,
          showAllMarkers: false,
          markers: [
            {
              coords: [53.195954, 50.240492],
            },
          ],
        },
        formBlock: {
          title: `
            Доверьте строительство
            <br>дома профессионалам
          `,
          address: 'г. Самара, Заводское шоссе 14Ак1',
          phone: '+7 (927) 260-55-09',
          mail: 'info@fundament-toliyatti.ru',
          hint: `
            Оставьте номер телефона. Строительный консультант свяжется с Вами для того,
            чтобы помоч. Это ни к чему не обязывает.
          `,
          formProps: {
            input: {
              name: 'phone',
              placeholder: 'Ваш телефон',
              required: true,
              type: 'tel',
              value: '',
              mask: '+7 (999) 999-99-99',
              pattern: '^\\+7\\s\\([0-9]{3}\\)\\s[0-9]{3}-[0-9]{2}-[0-9]{2}$',
              title: '+7 (___) ___-__-__',
            },
            iconSrc: require('@/assets/img/form/phone.svg'),
            id: 'map',
          },
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
  .section {
    background-color: #F5F5F5;;
    background-image: url(~@/assets/img/block10/bg-left.png),
      url(~@/assets/img/block10/bg-right.png);
    background-repeat: no-repeat;
    background-position: 25px calc(100% - 79px), calc(100% - 76px) 358px;
    padding: 92px 0;

    &__title {
      margin-bottom: 40px;
    }

    &__tabs {
      margin-bottom: 76px;
    }
  }
</style>
