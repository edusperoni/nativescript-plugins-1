<template>
  <Page>
    <ActionBar>
      <Label text="nativescript-barcodescanner"/>
    </ActionBar>

    <GridLayout>
      <Button class="info" :text="message"/>
    </GridLayout>
  </Page>
</template>

<script lang="ts">
  import Vue from "nativescript-vue";
  import { DemoSharedNativescriptBarcodescanner } from '@demo/shared';
  import { } from '@nstudio/nativescript-barcodescanner';

  export default Vue.extend({
    computed: {
      message() {
        return "Test nativescript-barcodescanner";
      }
    }
  });
</script>

<style scoped lang="scss">

  .info {
    font-size: 20;
    horizontal-align: center;
    vertical-align: center;
  }
</style>
