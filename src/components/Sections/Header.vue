<template>
  <header class="header">
    <div class="container">
      <div class="row align-items-center justify-content-between">
        <div class="col-md-auto col-xl-7">
          <div class="row align-items-center justify-content-between">
            <div class="col-auto">
              <Logo
                :src="logo.src"
                :text="logo.text"
              />
            </div>

            <div class="col-auto d-md-none">
              <div class="row align-items-center">
                <div class="col-auto">
                  <PhoneBtn :tel="tel" />
                </div>

                <div class="col-auto">
                  <Burger
                    :active="showSidebar"
                    @click.native.prevent="$store.dispatch('setShowSidebar', !showSidebar)"
                  />
                </div>
              </div>
            </div>

            <div class="col-lg-7 d-none d-xl-block">
              <span class="header__text">{{ slogan }}</span>
            </div>
          </div>
        </div>

        <div class="col-md-auto mt-3 mt-md-0">
          <div class="row align-items-center justify-content-between">
            <div class="col-auto text-right">
              <span class="header__text d-none d-sm-inline-block">{{ workMode }}</span>
              <br class="d-none d-sm-block">
              <Phone :tel="tel" />
            </div>

            <div class="col-auto">
              <Btn
                :text="btn.text"
                :small="true"
                :border="false"
                :shadow="false"
                @click.native.prevent="$store.dispatch('setShowPopupFeedback', true)"
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
import PhoneBtn from '@/components/Base/PhoneBtn.vue';
import Btn from '@/components/Base/Btn.vue';
import Burger from '@/components/Base/Burger.vue';

export default {
  name: 'Header',
  components: {
    Logo,
    Phone,
    PhoneBtn,
    Btn,
    Burger,
  },
  data() {
    return {
      logo: {
        src: require('@/assets/img/logo.webp'),
        text: 'Фундамент Волга',
      },
      slogan: `
        Строительство домов из камня в 
        Самарской области со сроком службы до 200 лет
      `,
      workMode: 'ежедневно с 7:00 до 22:00',
      tel: '8 (846) 990-55-09',
      btn: {
        text: 'Заказать звонок',
      },
    };
  },
  computed: {
    showSidebar() {
      return this.$store.getters.getShowSidebar;
    },
  },
};
</script>

<style lang="scss" scoped>
  .header {
    padding: 18px 0;
    position: relative;

    &__text {
      display: inline-block;
      font-size: 15px;
      line-height: 20px;
      color: #737373;
    }

    &:before {

      @media (max-width: 767px) {
        content: '';
        position: absolute;
        top: 60px;
        left: 0;
        width: 100%;
        border-bottom: 1px solid rgba(255, 255, 255, 0.5);
      }
    }

    @media (max-width: 767px) {
      padding: 0;
    }
  }
</style>
