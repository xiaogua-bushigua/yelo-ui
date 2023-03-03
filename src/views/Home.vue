<script setup lang="ts">

</script>

<template>
  <br>
  <h1>已封装的组件</h1>
  <br>
  <router-link to='/button'><span>Button</span></router-link>
  <router-link to='/textarea'><span>Textarea</span></router-link>
  <router-link to='/modal'><span>Modal</span></router-link>
  <router-link to='/echarts'><span>Ecahrts</span></router-link>
  <router-link to='/swipers'><span>Swiper</span></router-link>
  <router-link to='/tour'><span>Tour</span></router-link>
  <RouterView />
</template>

<style scoped lang="scss">
h1 {
  text-align: center;
}

span {
  font-size: large;
  margin: 20px 50px;
}

</style>
