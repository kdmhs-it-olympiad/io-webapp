<script>
import { Component, Vue, Prop } from 'vue-property-decorator';
import moment from 'moment';

@Component
class NoticeItem extends Vue {
  @Prop({ type: Date, default: '' }) date;

  get dateString() {
    return moment(this.date).format('YYYY년 MM월 DD일 hh:mm')
  }
}

export default NoticeItem;
</script>

<template>
  <div class="NoticeItem">
    <p class="NoticeItem__date">{{ dateString }}</p>
    <p class="NoticeItem__contents"><slot></slot></p>
  </div>
</template>

<style lang="scss">
  @import '../styles/color';

  .NoticeItem {
    margin-bottom: 40px;

    @media (max-width: 780px) {
      margin-bottom: 32px;
    }

    &:last-child {
      margin-bottom: 0;
    }

    &__date {
      font-size: 16px;
      font-weight: bold;
      margin-bottom: 12px;
    }

    &__contents {
      font-size: 16px;
      line-height: 24px;
    }
  }
</style>