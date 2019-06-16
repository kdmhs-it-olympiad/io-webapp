<script>
import { Component, Vue } from 'vue-property-decorator';
import { AsyncComputed } from '@/decorators';

@Component({
  components: {
    Tile: () => import('@/components/Tile.vue'),
    NoticeItem: () => import('@/components/NoticeItem.vue'),
  },
})
class NoticeTile extends Vue {
  
}

export default NoticeTile;
</script>

<template>
  <tile 
    class="Notice"
    title="공지사항">

    <notice-item :date="new Date()">
      이 사이트는 인터넷 익스플로러(IE)를 제외한 다른 브라우저에 최적화되어 있습니다. 만약 IE를 사용중이시라면 <a href="https://chrome.google.com" target="_blank">이 브라우저</a>를 다운받아 사용해 주세요.
    </notice-item>

    <notice-item :date="new Date()">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </notice-item>

    <template slot="footer">
      <router-link class="Notice__link" to="/">공지사항 전체보기</router-link>
    </template>
  </tile>
</template>

<style lang="scss">
  @import '../styles/color';

  .Notice {
    background-color: $notice__back;

    &__link {
      color: $tile__font;
      font-weight: bold;
      float: right;
    }    
  }
</style>