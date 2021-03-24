<template>
  <div
    class="sidebar"
    :class="classSidebar"
  >
    <div class="container text-center">
      <MenuVertical :items="menu"/>

      <Btn
        :text="btn.text"
        :small="true"
        :border="false"
        :shadow="false"
        class="mt-4"
        @click.native.prevent="$store.dispatch('setShowPopupFeedback', true)"
      />
    </div>
  </div>
</template>

<script>
import MenuVertical from '@/components/Base/MenuVertical.vue';
import Btn from '@/components/Base/Btn.vue';

export default {
  name: 'Sidebar',
  components: {
    MenuVertical,
    Btn,
  },
  data() {
    return {
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
      btn: {
        text: 'Заказать звонок',
      },
    };
  },
  computed: {
    scrollTop() {
      return this.$store.getters.getScrollTop;
    },
    fixed() {
      return this.scrollTop > 80;
    },
    show() {
      return this.$store.getters.getShowSidebar;
    },
    classSidebar() {
      let classSidebar = '';
      classSidebar += (this.fixed) ? 'sidebar--fixed' : '';
      classSidebar += (this.show) ? ' sidebar--active' : '';
      return classSidebar;
    },
  },
};
</script>

<style lang="scss" scoped>
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    transform: translateY(90px) translateX(100%);
    width: 100%;
    height: 100%;
    background: #fff;
    overflow: auto;
    padding: 15px 0 105px;
    align-items: center;
    display: none;
    z-index: 9;
    transition: transform .25s ease-in-out;

    &--active {
      transform: translateY(90px) translateX(0);
    }

    &--fixed {
      transform: translateY(60px) translateX(100%);

      &.sidebar--active {
        transform: translateY(60px) translateX(0);
      }
    }

    @media (max-width: 1199px) {
      display: flex;
    }

    @media (max-width: 767px) {
      transform: translateY(60px) translateX(100%);

      &--active {
        transform: translateY(60px) translateX(0);
      }
    }
  }
</style>
