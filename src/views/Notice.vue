<script>
import { Component, Vue } from 'vue-property-decorator';
import PageHero from '@/components/PageHero.vue';

@Component({
  components: {
    PageHero,
  },
})
class QnA extends Vue {
  mounted() {
    this.$store.commit('updateNavbar', { invert: true });
  }
}

export default QnA;
</script>

<template>
  <div class="Notice">
    <page-hero text="공지사항"></page-hero>
  </div>
</template>

<style lang="scss">
  .Notice {

  }
</style>
