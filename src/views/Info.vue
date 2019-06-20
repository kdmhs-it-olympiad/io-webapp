<script>
import { Component, Vue } from 'vue-property-decorator';
import PageHero from '@/components/PageHero.vue';
import loader from '@/assets/img/loader.gif';

@Component({
  components: {
    PageHero,
  },
})
class Info extends Vue {
  mounted() {
    this.$store.commit('updateNavbar', { invert: true });
  }

  get loader() {
    return loader;
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
        :style="`background: url(${loader}) top center no-repeat;`"
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
