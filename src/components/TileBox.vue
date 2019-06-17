<script>
import { Component, Vue } from 'vue-property-decorator';

@Component
class TileBox extends Vue {

}

export default TileBox;
</script>

<template>
  <div class="TileBox">
    <slot></slot>
  </div>
</template>

<style lang="scss">
  .TileBox {
    display: flex;
    width: 100%;

    @media (max-width: 780px) {
      flex-flow: column-reverse nowrap;
    }
  }
</style>
