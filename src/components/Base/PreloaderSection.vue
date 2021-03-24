<template>
  <div :id="`section-${id}`">
    <template v-if="show">
      <slot />
    </template>
  </div>
</template>

<script>
export default {
  name: 'PreloaderSection',
  props: {
    id: {
      type: [String, Number],
    },
  },
  data() {
    return {
      sectionTop: null,
    };
  },
  computed: {
    show() {
      if (this.sectionTop !== null) {
        const windowHeight = document.documentElement.clientHeight + 150;
        if (windowHeight >= this.sectionTop) {
          window.removeEventListener('scroll', this.scrollPage, { passive: true });
          return true;
        }
      }
      return false;
    },
  },
  methods: {
    scrollPage() {
      const section = document.getElementById(`section-${this.id}`);
      const sectionBox = section.getBoundingClientRect();
      this.sectionTop = sectionBox.top;
    },
  },
  created() {
    window.addEventListener('scroll', this.scrollPage, { passive: true });
  },
};
</script>
