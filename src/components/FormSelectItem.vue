<script>
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
class FormSelectItem extends Vue {
  @Prop() value;
}

export default FormSelectItem;
</script>

<template>
  <option class="FormSelectItem" :value="value">
    <slot></slot>
  </option>
</template>

<style lang="scss">
  .FormSelectItem {

  }
</style>
