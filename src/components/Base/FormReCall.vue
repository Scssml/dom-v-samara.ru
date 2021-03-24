<template>
  <form class="form" @submit.prevent="submit">
    <div
      v-if="errorMessage"
      class="form__message form__message--error"
    >
      {{ errorMessage }}
    </div>

    <div
      v-if="successMessage"
      class="form__message form__message--success"
    >
      {{ successMessage }}
    </div>

    <div class="form__content">
      <Input
        v-model="field.value"
        :name="field.name"
        :type="field.type"
        :placeholder="field.placeholder"
        :required="field.required"
        :mask="field.mask"
        :pattern="field.pattern"
        :title="field.title"
        class="form__input"
      />
      <Btn
        :iconSrc="iconSrc"
        class="form__btn"
        v-if="!btnLoading"
      />
      <Preloader v-if="btnLoading"/>
    </div>

    <UserConsent
      v-model="userconsent"
      :id="id"
      class="form__userconsent"
    />
  </form>
</template>

<script>
import axios from 'axios';
import Input from '@/components/Base/Input.vue';
import Btn from '@/components/Base/Btn.vue';
import UserConsent from '@/components/Base/UserConsent.vue';
import Preloader from '@/components/Base/Preloader.vue';

export default {
  name: 'FormReCall',
  components: {
    Input,
    Btn,
    UserConsent,
    Preloader,
  },
  props: {
    input: {
      type: Object,
      required: true,
      default: () => {},
    },
    iconSrc: {
      type: String,
      required: true,
    },
    id: {
      type: [String, Number],
      required: true,
    },
  },
  data() {
    return {
      field: {},
      userconsent: true,
      errorMessage: '',
      successMessage: '',
      btnLoading: false,
    };
  },
  computed: {
    checkForm() {
      let checkFields = false;

      if (this.field.required && this.field.value.length > 0) {
        checkFields = true;
      }

      if (!this.field.required) {
        checkFields = true;
      }

      return checkFields && this.userconsent;
    },
  },
  methods: {
    submit() {
      this.errorMessage = '';
      this.successMessage = '';

      if (this.checkForm) {
        this.btnLoading = true;
        const action = '/local/ajax/form.php';
        const url = new URL(window.location);
        const arUtm = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];
        const props = {
          web: url,
        };

        props[this.field.input.name] = this.field.input.value;

        arUtm.forEach((item) => {
          if (url.searchParams.has(item)) {
            props[item] = url.searchParams.get(item);
          }
        });

        axios
          .post(action, props)
          .then((response) => {
            if (response.data.success) {
              this.successMessage = response.data.message;

              this.$metrika.reachGoal('ORDERFORM');
            } else {
              this.errorMessage = response.data.message;
            }

            this.btnLoading = false;
          })
          .catch(() => {
            this.errorMessage = 'Произошла ошибка';
            this.btnLoading = false;
          });
      } else {
        this.errorMessage = 'Заполните обязательные поля';
      }
    },
  },
  created() {
    this.field = Object.assign([], this.input);
  },
};
</script>

<style lang="scss" scoped>
  .form {

    &__content {
      position: relative;
    }

    &__input {
      width: 100%;
      margin-bottom: 22px;
    }

    &__btn {
      width: 62px;
      min-width: initial;
      box-sizing: border-box;
      position: absolute;
      top: 0;
      right: 0;
    }

    &__userconsent {
      margin-top: 0;
    }

    &__message {
      margin-bottom: 5px;

      &--error {
        color: #EB1338;
      }

      &--success {
        color: #16a600;
      }

    }
  }
</style>
