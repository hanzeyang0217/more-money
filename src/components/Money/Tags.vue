<template>
  <div class="tags">
    <div class="new">
      <button @click="createTag()">新增标签</button>
    </div>
    <ul class="current">
      <li v-for="tag in tags" :key="tag.id" @click="selectTag(tag)"
          :class="selectedTag===tag && 'selected'">
        {{tag.name}}
      </li>
    </ul>
  </div>
</template>

<script lang="js">
  export default {
    name: "Tags",
    props: {
      tags: Array,
      selectedTag: Object
    },
    methods: {
      selectTag(tag) {
        this.$emit('update:selectedTag', tag)
      },

      createTag() {
        this.$emit('update:createTag')
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";

  .tags {
    font-size: 14px;
    padding: 16px;
    flex-grow: 1;
    display: flex;
    flex-direction: column-reverse;

    > .current {
      display: flex;
      flex-wrap: wrap;

      > li {
        cursor: pointer;
        background: #d9d9d9;
        $h: 24px;
        height: $h;
        line-height: $h;
        border-radius: $h/2;
        padding: 0 16px;
        margin-right: 12px;
        margin-top: 4px;

        &.selected {
          background: $color-highlight
        }
      }
    }

    > .new {
      padding-top: 16px;

      button {
        cursor: pointer;
        background: transparent;
        border: none;
        color: #999;
        border-bottom: 1px solid;
        padding: 0 4px;
      }
    }
  }
</style>