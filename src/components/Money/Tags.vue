<template>
  <div class="tags">
    <div class="new">
      <button @click="create()">新增标签</button>
    </div>
    <ul class="current">
      <li v-for="tag in tags" :key="tag" @click="toggle(tag)"
          :class="selectedTags.indexOf(tag) !== -1 && 'selected'">
        {{tag}}
      </li>
    </ul>
  </div>
</template>

<script lang="js">
  export default {
    name: "Tags",
    props: {
      tags: Array,
      selectedTags: Array
    },
    data() {
      return {
        dataSelectedTags: Array.from(this.selectedTags)
        //因为是数组 需要保证data单向传输 所以新建了一个数组
      }
    },
    methods: {
      toggle(tag) {
        if (this.selectedTags.indexOf(tag) === -1) {
          this.dataSelectedTags.push(tag)
          this.$emit('update:selectedTags', this.dataSelectedTags)
        } else {
          this.dataSelectedTags.splice(this.dataSelectedTags.indexOf(tag), 1)
          this.$emit('update:selectedTags', this.dataSelectedTags)
        }
      },
      create() {
        const name = window.prompt('请输入标签名')
        if (name === '') {
          window.alert('标签名不能为空')
        } else if (this.tags) {
          this.$emit('update:addTag',
            name)
        }
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