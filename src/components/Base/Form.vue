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

    <template v-for="(item, index) in items">
      <Input
        v-model="item.value"
        :name="item.name"
        :type="item.type"
        :placeholder="item.placeholder"
        :required="item.required"
        :mask="item.mask"
        :pattern="item.pattern"
        :title="item.title"
        :key="index"
      />
    </template>

    <Btn
      :text="btnName"
      :big="true"
      class="form__btn"
      v-if="!btnLoading"
    />
    <Preloader v-if="btnLoading"/>

    <UserConsent v-model="userconsent" :id="id"/>
  </form>
</template>

<script>
import axios from 'axios';
import Input from '@/components/Base/Input.vue';
import Btn from '@/components/Base/Btn.vue';
import UserConsent from '@/components/Base/UserConsent.vue';
import Preloader from '@/components/Base/Preloader.vue';

export default {
  name: 'Form',
  components: {
    Input,
    Btn,
    UserConsent,
    Preloader,
  },
  props: {
    items: {
      type: Array,
      required: true,
      default: () => [],
    },
    btnName: {
      type: String,
      default: 'Оставить заявку',
    },
    id: {
      type: [String, Number],
      required: true,
    },
  },
  data() {
    return {
      fields: [],
      userconsent: true,
      errorMessage: '',
      successMessage: '',
      btnLoading: false,
    };
  },
  computed: {
    checkForm() {
      const checkFields = this.fields.every((item) => {
        if (item.required && item.value.length > 0) {
          return true;
        }

        if (!item.required) {
          return true;
        }

        return false;
      });

      return checkFields && this.userconsent;
    },
  },
  methods: {
    submit() {
      this.errorMessage = '';
      this.successMessage = '';

      if (this.checkForm) {
        this.btnLoading = true;
        const action = '/ajax/form.php';
        const props = {};

        this.fields.forEach((item) => {
          props[item.name] = item.value;
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
    this.fields = Object.assign([], this.items);
  },
};
</script>

<style lang="scss">
  .form {

    &__btn {
      width: 100%;
      max-width: 352px;
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
