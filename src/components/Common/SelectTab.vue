<template>
  <ul class="tabs">
    <li v-for="item in tabData"
        :key="item.key"
        @click="selectTab(item.key)"
        :class="liClass(item)">
      {{item.name}}
    </li>
  </ul>
</template>

<script lang="js">
  export default {
    name: "SelectTab",
    props: {
      tabData: Array,
      selectedKey: String
    },
    methods: {
      liClass(item) {
        return {
          selected: item.key === this.selectedKey
        }
      },
      selectTab(key) {
        this.$emit('update:selectedKey', key)
      }
    },
    created() {
      Array.from(this.tabData).forEach(item => {
        if (item.defaultSelected === true) {
          this.$emit('update:selectedKey', item.key)
        }
      })
    }
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";

  .tabs {
    display: flex;
    justify-content: space-around;
    text-align: center;
    background: #c4c4c4;
    font-size: 18px;

    > li {
      cursor: pointer;
      flex-grow: 1;
      height: 48px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;

      &.selected {
        background-color: $color-highlight;
      }

      &.selected::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 4px;
        background: #333;
      }
    }
  }
</style>