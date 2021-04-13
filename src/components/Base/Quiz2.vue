<template>
  <div class="block">
    <template v-for="(item, questionIndex) in items">
      <template v-if="questionIndex === stepActive">
        <div :key="`question-${questionIndex}`">
          <div class="text-center mb-5">
            <div class="block__step mb-4">Вопрос {{ questionIndex + 1}} из {{ countItems }}</div>

            <div class="block__title">{{ item.question }}</div>
          </div>

          <div class="row mb-4">
            <template v-for="(answer, answerIndex) in item.answers">
              <template v-if="answer.name === 'Другое'">
                <div class="col-12 mb-3" :key="`answer-${answerIndex}`">
                  <div class="row align-items-center">
                    <div class="col-auto">
                      <div class="block__radio">
                        <input
                          type="radio"
                          :id="`quiz-${id}-question-${questionIndex}-answer-${answerIndex}`"
                          :value="answer.name"
                          v-model="values[questionIndex]"
                        />
                        <label
                          :for="`quiz-${id}-question-${questionIndex}-answer-${answerIndex}`"
                        >{{ answer.name }}</label>
                      </div>
                    </div>

                    <div class="col" v-if="values[questionIndex] === answer.name">
                      <Input
                        v-model="item.answerOther"
                        :name="`quiz-${id}-question-${questionIndex}-answerOther`"
                        type="text"
                        placeholder="Введите текст"
                        :required="false"
                        mask=""
                        pattern="*"
                        title=""
                        class="mb-0"
                      />
                    </div>
                  </div>
                </div>
              </template>

              <template v-else>
                <div class="col-sm-6 col-md-4 mb-3" :key="`answer-${answerIndex}`">
                  <div class="block__radio">
                    <input
                      type="radio"
                      :id="`quiz-${id}-question-${questionIndex}-answer-${answerIndex}`"
                      :value="answer.name"
                      v-model="values[questionIndex]"
                      @change="nextStep()"
                    />
                    <label
                      :for="`quiz-${id}-question-${questionIndex}-answer-${answerIndex}`"
                    >{{ answer.name }}</label>
                  </div>
                </div>
              </template>
            </template>
          </div>

          <div class="text-center">
            <Btn
              :text="btnQuestionName"
              @click.prevent.native="nextStep()"
              class="block__btn px-4"
            />
          </div>
        </div>
      </template>
    </template>

    <template v-if="stepActive === 'setGift'">
      <div class="text-center mb-5">
        <div class="block__step block__step--xs-no-border mb-4">
          ОСТАЛСЯ ВСЕГО ОДИН ШАГ ДО ПОЛУЧЕНИЯ ПОДАРКОВ
        </div>

        <div class="block__title">{{ gift.title }}</div>
      </div>

      <div class="row mb-3 mb-sm-5">
        <template v-for="(item, index) in gift.items">
          <div class="col-sm-4 mb-4 mb-sm-0" :key="index">
            <GiftBlock
              :name="item.name"
              :imgSrc="item.imgSrc"
              :active="item.active"
              @click.prevent.native="item.active = !item.active"
            />
          </div>
        </template>
      </div>

      <div class="text-center">
        <Btn
          :text="btnQuestionName"
          @click.prevent.native="nextStep()"
          class="block__btn px-4"
        />
      </div>
    </template>

    <template v-if="stepActive === 'callback'">
      <div class="text-center mb-5">
        <div class="block__step block__step--xs-no-border mb-4">
          ПОЛУЧИТЬ ПОДАРКИ И УЗНАТЬ СТОИМОСТЬ
        </div>

        <div class="block__title">{{ form.title }}</div>
      </div>

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

        <div class="row mb-3">
          <template v-for="(item, index) in form.fields">
            <div class="col-lg-6" :key="index">
              <Input
                v-model="item.value"
                :name="item.name"
                :type="item.type"
                :placeholder="item.placeholder"
                :required="item.required"
                :mask="item.mask"
                :pattern="item.pattern"
                :title="item.title"
              />
            </div>
          </template>
        </div>

        <div class="text-center">
          <div class="mb-4">
            <UserConsent
              v-model="userconsent"
              :id="`quiz-${id}`"
              class="mt-0"
            />
          </div>
          <div>
            <Btn
              :text="btnName"
              class="form__btn"
              v-if="!btnLoading"
            />
            <Preloader v-if="btnLoading"/>
          </div>
        </div>
      </form>
    </template>
  </div>
</template>

<script>
import axios from 'axios';
import Btn from '@/components/Base/Btn.vue';
import Input from '@/components/Base/Input.vue';
import UserConsent from '@/components/Base/UserConsent.vue';
import Preloader from '@/components/Base/Preloader.vue';
import GiftBlock from '@/components/Base/GiftBlock.vue';

export default {
  name: 'Quiz2',
  components: {
    Btn,
    Input,
    UserConsent,
    Preloader,
    GiftBlock,
  },
  props: {
    id: {
      type: [String, Number],
      required: true,
    },
  },
  data() {
    return {
      stepActive: 0,
      userconsent: true,
      errorMessage: '',
      successMessage: '',
      btnLoading: false,
      btnName: 'Узнать стоимость проекта',
      items: [
        {
          question: 'Я хочу дом площадью:',
          answers: [
            {
              name: 'до 70 м2',
              active: false,
            },
            {
              name: '70 - 100 м2',
              active: false,
            },
            {
              name: '100 - 150 м2',
              active: false,
            },
            {
              name: '150 - 200 м2',
              active: false,
            },
            {
              name: '200 - 250 м2',
              active: false,
            },
            {
              name: 'от 250 м2',
              active: false,
            },
            {
              name: 'Не определился',
              active: false,
            },
          ],
          answerOther: '',
        },
        {
          question: 'Мне нужна мансарда?',
          answers: [
            {
              name: 'Да',
              active: false,
            },
            {
              name: 'Нет',
              active: false,
            },
            {
              name: 'Не определился',
              active: false,
            },
          ],
          answerOther: '',
        },
        {
          question: 'Сколько спальных комнат я хочу?',
          answers: [
            {
              name: '1',
              active: false,
            },
            {
              name: '2',
              active: false,
            },
            {
              name: '3',
              active: false,
            },
            {
              name: '4',
              active: false,
            },
            {
              name: 'Не определился',
              active: false,
            },
            {
              name: 'Другое',
              active: false,
            },
          ],
          answerOther: '',
        },
        {
          question: 'Мне нужен гараж в здании дома?',
          answers: [
            {
              name: 'Да',
              active: false,
            },
            {
              name: 'Нет',
              active: false,
            },
          ],
          answerOther: '',
        },
      ],
      form: {
        title: 'Куда позвонить, чтобы сказать о том, как получить подарки и сказать ориентировочную стоимость проекта?',
        fields: [
          {
            name: 'name',
            placeholder: 'Ваше имя',
            required: false,
            type: 'text',
            value: '',
            mask: '',
            pattern: '.*',
            title: '+7 (___) ___-__-__',
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
      },
      gift: {
        title: 'Выберите один или несколько подарков',
        items: [
          {
            name: 'проект дома с большой террасой',
            imgSrc: require('@/assets/img/gift/img-1.jpg'),
            active: true,
          },
          {
            name: 'проект дома для маленького участка',
            imgSrc: require('@/assets/img/gift/img-2.jpg'),
            active: false,
          },
          {
            name: 'сметный расчет на строительство дома',
            imgSrc: require('@/assets/img/gift/img-3.jpg'),
            active: false,
          },
        ],
      },
      values: [],
    };
  },
  computed: {
    countItems() {
      return this.items.length;
    },
    btnQuestionName() {
      return (this.stepActive === 'setGift') ? 'Далее' : 'Следующий вопрос';
    },
    checkForm() {
      const checkFields = this.form.fields.every((item) => {
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
    nextStep() {
      if (this.stepActive + 1 === this.countItems) {
        this.stepActive = 'setGift';
      } else if (this.stepActive === 'setGift') {
        this.stepActive = 'callback';
      } else {
        this.stepActive += 1;
      }
    },
    setDefaultValues() {
      this.items.forEach((item) => {
        const defaultValue = item.answers.find((answer) => answer.active);
        this.values.push(defaultValue.name);
      });
    },
    submit() {
      this.errorMessage = '';
      this.successMessage = '';

      if (this.checkForm) {
        this.btnLoading = true;
        const action = '/ajax/quiz.php';
        const props = {
          questions: {},
          gifts: [],
        };

        this.form.fields.forEach((item) => {
          props[item.name] = item.value;
        });

        this.items.forEach((item, index) => {
          if (this.values[index] === 'Другое' && item.answerOther) {
            props.questions[item.question] = item.answerOther;
          } else {
            props.questions[item.question] = this.values[index];
          }
        });

        this.gift.items.forEach((item) => {
          if (item.active) {
            props.gifts.push(item.name);
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
    this.setDefaultValues();
  },
};
</script>

<style lang="scss" scoped>
  .block {
    height: 100%;

    &__title {
      font-family: 'Montserrat', sans-serif;
      font-weight: 600;
      font-size: 26px;
      line-height: 38px;
    }

    &__step {
      display: inline-block;
      font-weight: 800;
      font-size: 14px;
      line-height: 22px;
      text-align: center;
      text-transform: uppercase;
      color: #FFFFFF;
      background: #F3AF01;
      position: relative;
      padding: 3px 5px;
      margin: 0 10px 11px;
      text-decoration: none;

      &:before,
      &:after {
        content: '';
        position: absolute;
        top: 0;
      }

      &:before {
        border-bottom: 28px solid #F3AF01;
        border-left: 10px solid transparent;
        left: -10px;
        top: 0;
      }

      &:after {
        border-top: 28px solid #F3AF01;
        border-right: 10px solid transparent;
        right: -10px;
        top: 0;
      }

      @media (max-width: 575px) {
        &--xs-no-border {

          &:before,
          &:after {
            display: none;
          }
        }
      }
    }

    &__radio {

      label {
        display: flex;
        align-items: center;

        &:before {
          content: '';
          flex-shrink: 0;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          border: 5px solid #fff;
          background-color: #fff;
          transition: background-color .25s ease-in-out;
          box-shadow: 0 0 0 1px #CACACA;
          margin-right: 12px;
        }
      }

      input {
        display: none;

        &:checked + label {

          &:before {
            background-color: #F3AF01;
          }
        }
      }
    }

    &__btn {
      align-self: flex-start;
    }
  }
</style>
