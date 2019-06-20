<script>
import { Component, Vue } from 'vue-property-decorator';
import FormText from '@/components/FormText.vue';
import IoButton from '@/components/IoButton.vue';
import PageHero from '@/components/PageHero.vue';

@Component({
  components: {
    FormText,
    IoButton,
    PageHero,
  },
})
class QnA extends Vue {
  mounted() {
    this.$store.commit('updateNavbar', { invert: true });
  }

  ready() {
    alert('준비중입니다.');
  }
}

export default QnA;
</script>

<template>
  <div class="QnA">
    <page-hero text="질문과 답변"></page-hero>
    <div class="QnA__content">
      <div class="QnA__section">
        <h2 class="QnA__subheader">질문하기</h2>
        <form @submit.prevent>

        </form>
      </div>
      <div class="QnA__section">
        <h2 class="QnA__subheader">답변</h2>
        <div class="QnA__answers">
          <div v-for="(answer, i) in answers" :key="`answer-${i}`" class="QnA__answer">
            <div class="QnA__answer-q">

            </div>
            <div class="QnA__answer-a">

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .QnA {
    &__content {
      display: flex;
      padding: 50px 120px;
    }

    &__section {
      width: 50%;
    }

    &__subheader {
      font-size: 36px;
      font-weight: lighter;
    }
  }


</style>
