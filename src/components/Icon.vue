<template>
  <svg class="icon">
    <use :xlink:href="'#'+this.name"></use>
  </svg>
</template>

<script lang="js">
  //搜来的
  const importAll = (requireContext) => requireContext.keys().forEach(requireContext)
  importAll(require.context('@/assets/icons/', true, /\.svg$/))
  export default {
    props: ['name'],
    name: "Icon"
  }
</script>

<style lang="scss" scoped>
  .icon {
    width: 1em; height: 1em;
    vertical-align: -0.15em;
    overflow: hidden;
  }
</style>