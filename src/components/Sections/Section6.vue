<template>
  <section class="section">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 col-xxl-8">
          <h2 class="section__title" v-html="title"></h2>

          <div class="section__text" v-html="text"></div>

          <div class="row justify-content-center justify-content-md-start">
            <div class="col-auto col-sm-8 col-md-6 col-lg-5 col-xl-4 col-xxl-5">
              <Form
                :items="form.items"
                :btnName="form.btnName"
                :id="form.id"
              />
            </div>

            <div class="col-md-5 col-lg-4 col-xl-3 col-xxl-4 mt-5 mt-md-0">
              <FormHint :text="hint" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Form from '@/components/Base/Form.vue';
import FormHint from '@/components/Base/FormHint.vue';

export default {
  name: 'Section6',
  components: {
    Form,
    FormHint,
  },
  data() {
    return {
      title: `
        У Вас уже есть проект дома Вашей мечты?
        <br>Сделаем <span class="text-blue">бесплатную</span> проверку проекта
      `,
      text: `
        Проверим готовый (типовой или индивидуальный) проект дома. Сэкономим деньги, силы и нервы. 
        <br>Проверку осуществляет строительный консультант - ведущий специалист загородного домостроения.
      `,
      form: {
        items: [
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
        btnName: 'Заказать бесплатный аудит',
        id: 'audit',
      },
      hint: `
        Оставьте номер телефона. Строительный консультант свяжется с Вами для того,
        чтобы помочь. Это ни к чему не обязывает.
      `,
    };
  },
};
</script>

<style lang="scss" scoped>
  .section {
    background-color: #F5F5F5;
    background-image: url(~@/assets/img/block6/bg.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom;
    padding: 100px 0 117px;

    &__title {
      margin-bottom: 28px;
    }

    &__text {
      margin-bottom: 87px;
    }

    @media (max-width: 575px) {
      padding: 40px 0;
    }
  }
</style>
