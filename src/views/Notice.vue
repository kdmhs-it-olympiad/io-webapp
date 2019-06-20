<script>
import { Component, Vue } from 'vue-property-decorator';
import PageHero from '@/components/PageHero.vue';

@Component({
  components: {
    PageHero,
  },
})
class Notice extends Vue {

}

export default Notice;
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
