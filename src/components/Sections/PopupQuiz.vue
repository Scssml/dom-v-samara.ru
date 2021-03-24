<template>
  <Popup
    :value="showPopupQuiz"
    :small="popupSmall"
    @close="$store.dispatch('setShowPopupQuiz', false)"
  >
    <Quiz2 :id="2" />
  </Popup>
</template>

<script>
import Popup from '@/components/Base/Popup.vue';
import Quiz2 from '@/components/Base/Quiz2.vue';

export default {
  name: 'PopupQuiz',
  components: {
    Popup,
    Quiz2,
  },
  data() {
    return {
      popupSmall: false,
    };
  },
  computed: {
    showPopupQuiz() {
      return this.$store.getters.getShowPopupQuiz;
    },
  },
};
</script>
