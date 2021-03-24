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
          center: [],
          zoom: 14,
          controls: [],
          scrollZoom: false,
          showAllMarkers: false,
          markers: [
            {
              coords: [53.192215, 50.168834],
            },
          ],
        },
        formBlock: {
          title: `
            Доверьте строительство
            <br>дома профессионалам
          `,
          address: 'г. Самара, Партизанская 80а',
          phone: '+7 (927) 260-55-09',
          mail: 'info@dom-v-samara.ru',
          hint: `
            Оставьте номер телефона. Строительный консультант свяжется с Вами для того,
            чтобы помочь. Это ни к чему не обязывает.
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
  created() {
    const windowWidth = document.documentElement.clientWidth;
    const center = (windowWidth <= 575) ? [53.182555, 50.168834] : [53.195954, 50.15000];
    this.mabBlock.mapSettings.center = center;
  },
};
</script>
