<template>
  <div class="header-fixed" :class="(show) ? 'header-fixed--active' : ''">
    <div class="container">
      <div class="row align-items-center justify-content-between">
        <div class="col-auto">
          <Logo
            :src="logo.src"
            :text="logo.text"
          />
        </div>

        <div class="col-auto px-0 d-none d-xl-block">
          <Menu :items="menu" />
        </div>

        <div class="col-auto">
          <div class="row align-items-center">
            <div class="col-auto d-none d-sm-block">
              <Phone :tel="tel" />
            </div>

            <div class="col-auto d-none d-xxl-block">
              <Btn
                :text="btn.text"
                :small="true"
                :border="false"
                :shadow="false"
                class="header-fixed__btn"
                @click.native.prevent="$store.dispatch('setShowPopupFeedback', true)"
              />
            </div>

            <div class="col-auto d-sm-none">
              <PhoneBtn :tel="tel" />
            </div>

            <div class="col-auto d-xl-none">
              <Burger
                :active="showSidebar"
                @click.native.prevent="$store.dispatch('setShowSidebar', !showSidebar)"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '@/components/Base/Logo.vue';
import Phone from '@/components/Base/Phone.vue';
import PhoneBtn from '@/components/Base/PhoneBtn.vue';
import Btn from '@/components/Base/Btn.vue';
import Burger from '@/components/Base/Burger.vue';
import Menu from '@/components/Base/Menu.vue';

export default {
  name: 'HeaderFixed',
  components: {
    Logo,
    Phone,
    PhoneBtn,
    Btn,
    Burger,
    Menu,
  },
  data() {
    return {
      logo: {
        src: require('@/assets/img/logo.webp'),
        text: 'Фундамент Волга',
      },
      tel: '8 (846) 990-55-09',
      btn: {
        text: 'Заказать звонок',
      },
      menu: [
        {
          name: 'Преимущества',
          href: '#advantages',
        },
        {
          name: 'Готовые проекты',
          href: '#projects',
        },
        {
          name: 'Цены',
          href: '#prices',
        },
        {
          name: 'О компании',
          href: '#about',
        },
        {
          name: 'Контакты',
          href: '#contacts',
        },
      ],
    };
  },
  computed: {
    scrollTop() {
      return this.$store.getters.getScrollTop;
    },
    show() {
      return this.scrollTop > 80;
    },
    showSidebar() {
      return this.$store.getters.getShowSidebar;
    },
  },
};
</script>

<style lang="scss" scoped>
  .header-fixed {
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(63, 63, 63, 0.2);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 5;
    transform: translateY(-100%);
    transition: transform .25s ease-in-out;

    &__btn {
      min-width: 162px;
      height: 40px;
    }

    &--active {
      transform: translateY(0);
    }
  }
</style>
