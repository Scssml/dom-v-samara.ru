<template>
  <Popup
    :value="showPopupQuiz"
    :small="popupSmall"
    @close="$store.dispatch('setShowPopupFeedback', false)"
  >
    <h2 class="text-center mb-3" v-html="title"></h2>
    <p class="text-center mb-4">{{ text }}</p>

    <Form
      :items="formProps.items"
      :btnName="formProps.btnName"
      :id="formProps.id"
    />
  </Popup>
</template>

<script>
import Popup from '@/components/Base/Popup.vue';
import Form from '@/components/Base/Form.vue';

export default {
  name: 'PopupFeedback',
  components: {
    Popup,
    Form,
  },
  data() {
    return {
      popupSmall: true,
      title: 'Оставьте заявку',
      text: 'Менеджер свяжется с Вами',
      formProps: {
        items: [
          {
            name: 'name',
            placeholder: 'Ваше имя',
            required: false,
            type: 'text',
            value: '',
            mask: '',
            pattern: '.*',
            title: '',
          },
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
        btnName: 'Жду звонка',
        id: 'popupFeedback',
      },
    };
  },
  computed: {
    showPopupQuiz() {
      return this.$store.getters.getShowPopupFeedback;
    },
  },
};
</script>
