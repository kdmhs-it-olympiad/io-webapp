<script>
import { Component, Vue } from 'vue-property-decorator';
import Navbar from '@/components/Navbar.vue';

@Component({
  components: {
    Navbar,
  },
})
class QnA extends Vue {

}

export default QnA;
</script>

<template>
  <div class="QnA">
    <navbar></navbar>
  </div>
</template>

<style>
  .QnA {

  }
</style>
