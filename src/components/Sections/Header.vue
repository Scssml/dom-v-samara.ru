<template>
  <header class="header">
    <div class="container">
      <div class="row align-items-center justify-content-between">
        <div class="col-lg-7">
          <div class="row align-items-center">
            <div class="col-lg-auto">
              <Logo
                :src="logo.src"
                :text="logo.text"
              />
            </div>

            <div class="col-lg-7">
              <span class="header__text">{{ slogan }}</span>
            </div>
          </div>
        </div>

        <div class="col-lg-auto">
          <div class="row align-items-center">
            <div class="col-auto text-right">
              <span class="header__text">{{ workMode }}</span>
              <br>
              <Phone :tel="tel" />
            </div>

            <div class="col-auto">
              <Btn
                :text="btn.text"
                :small="true"
                :border="false"
                :shadow="false"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import Logo from '@/components/Base/Logo.vue';
import Phone from '@/components/Base/Phone.vue';
import Btn from '@/components/Base/Btn.vue';

export default {
  name: 'Header',
  components: {
    Logo,
    Phone,
    Btn,
  },
  data() {
    return {
      logo: {
        src: require('@/assets/img/logo.png'),
        text: 'Фундаменты Волга',
      },
      slogan: `
        Строительство домов из камня в 
        Самарской области со сроком службы до 200 лет
      `,
      workMode: 'ежедневно с 7:00 до 22:00',
      tel: '+7 (927) 260-55-09',
      btn: {
        text: 'Заказать звонок',
      },
    };
  },
};
</script>

<style lang="scss" scoped>
  .header {
    padding: 18px 0;

    &__text {
      display: inline-block;
      font-size: 15px;
      line-height: 20px;
      color: #737373;
    }
  }
</style>
