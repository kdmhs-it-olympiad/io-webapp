<script>
import { Component, Vue } from 'vue-property-decorator';
import PageHero from '@/components/PageHero.vue';

@Component({
  components: {
    PageHero,
  },
})
class Info extends Vue {
  mounted() {
    this.$store.commit('updateNavbar', { invert: true });
  }
}

export default Info;
</script>

<template>
  <div class="Info">
    <page-hero text="올림피아드 대회정보"></page-hero>
    <div class="Info__content">
      <iframe
        src="https://drive.google.com/uc?id=1VHCBIeBFUBi9iTqQ6Qmqbt3hDR-DjRP_"
        type="application/pdf" width="70%" height="900px"
      ></iframe>
    </div>
  </div>
</template>

<style lang="scss">
  .Info {
    &__content {
      display: flex;
      justify-content: center;
      padding: 80px 0;
    }
  }
</style>
