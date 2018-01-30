<template>
  <div>
    <common-header bgColor="rgb(0, 150, 136)">
      <span slot="title">Music</span>
    </common-header>
    <common-footer bgColor="rgb(0, 150, 136)"></common-footer>
  </div>
</template>

<script>
  import CommonHeader from '@/components/common/Header';
  import CommonFooter from '@/components/common/Footer';
  export default{
    components:{
      CommonHeader,
      CommonFooter
    }
  }
</script>

<style scoped>

</style>
