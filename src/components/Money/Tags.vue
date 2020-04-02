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
    props: [`tags`],
    data() {
      return {
        selectedTags: []
      }
    },
    watch: {
      selectedTags: function () {
        this.$emit('update:selectedTags', this.selectedTags)
      }
    },
    methods: {
      toggle(tag) {
        if (this.selectedTags.indexOf(tag) === -1) {
          this.selectedTags.push(tag)
        } else {
          this.selectedTags.splice(this.selectedTags.indexOf(tag), 1)
        }
      },
      create() {
        const name = window.prompt('请输入标签名').trim()
        if (name === '') {
          window.alert('标签名不能为空')
        } else if (this.tags) {
          this.$emit('update:tags',
            [...this.tags, name])
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