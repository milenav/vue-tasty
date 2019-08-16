<template>
  <div id="app">
    <page-header></page-header>
    <router-view></router-view>
    <page-footer></page-footer>
  </div>
</template>

<script>
import PageHeader from '@/components/common/PageHeader'
import PageFooter from '@/components/common/PageFooter'

export default {
  components: {
    PageHeader,
    PageFooter
  }
}
</script>

<style>

</style>
