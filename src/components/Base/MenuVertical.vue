<template>
  <ul class="menu">
    <template v-for="(item, index) in items">
      <li class="menu__item" :key="index">
        <a
          :href="item.href"
          class="menu__link"
          @click.prevent="scrollBlock(item.href)"
        >{{ item.name }}</a>
      </li>
    </template>
  </ul>
</template>

<script>
export default {
  name: 'MenuVertical',
  props: {
    items: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  methods: {
    scrollBlock(href) {
      const id = href.replace('#', '');

      this.$store.dispatch('setShowSidebar', false);

      const block = document.getElementById(id);
      const clientY = block.getBoundingClientRect();

      window.scrollBy({
        top: clientY.top - 60,
        behavior: 'smooth',
      });
    },
  },
};
</script>

<style lang="scss" scoped>
  .menu {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0;
    padding: 0;
    list-style: none;
    flex-direction: column;

    &__item {
      font-weight: 500;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      margin: 10px 0;
    }

    &__link {
      color: #000000;
      text-decoration: none;
    }
  }
</style>
