<template>
  <div class="nav-wrapper">
    <div class="content">
      <slot></slot>
    </div>
    <Nav/>
  </div>
</template>

<script lang="js">
  import Nav from '@/components/Nav'
  export default {
    name: "Layout",
    components: {Nav},
  }
</script>

<style lang="scss" scoped>
  .nav-wrapper {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  .content {
    flex-grow: 1;
    overflow: auto;
    display: flex;
    flex-direction: column;
  }
</style>