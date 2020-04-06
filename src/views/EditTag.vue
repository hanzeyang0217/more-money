<template>
  <Layout>
    <div class="navBar">
      <router-link to="/Tags">
        <Icon class="backIcon" name="back"/>
      </router-link>
      <span class="title">编辑标签</span>
      {{tag}}
      <span class="rightIcon"></span>
    </div>
    <div class="form-wrapper">
      <label class="notes">
        <span class="name">标签名</span>
        <input type="text" :value="this.tag.name" @input="update($event.target.value)" placeholder="在这里输入标签名">
      </label>
    </div>
    <div class="button-wrapper">
      <Button class="deleteTag" @click="deleteTag">删除标签</Button>
    </div>
  </Layout>
</template>

<script lang="js">
  import tagListModel from '@/Models/tagListModel'

  export default {
    name: "EditTag.vue",
    data() {
      return {
        tag: {}
      }
    },
    methods: {
      update(value) {
        this.tag = tagListModel.update(this.tag.id, value)
      },
      deleteTag() {
        tagListModel.deleteTag(Number(this.$route.params.id))
        this.$router.replace('/Tags')
      }
    },
    created() {
      this.tag = tagListModel.findTag(Number(this.$route.params.id))
      if (!this.tag) {
        this.$router.replace('/404')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .notes {
    font-size: 14px;
    background: #f5f5f5;
    padding-left: 16px;
    display: flex;
    align-items: center;

    .name {
      padding-right: 16px;
    }

    input {
      height: 64px;
      flex-grow: 1;
      background: transparent;
      border: none;
      padding-right: 16px;
    }
  }

  .navBar {
    text-align: center;
    font-size: 16px;
    padding: 8px 16px;
    background: white;
    display: flex;
    align-items: center;
    justify-content: space-between;

    > .title {
    }

    > .backIcon {
      width: 24px;
      height: 24px;
    }

    > .rightIcon {
      width: 24px;
      height: 24px;
    }
  }

  .form-wrapper {
    background: white;
    margin-top: 8px;
  }

  .deleteTag {
    background: #767676;
    color: white;
    border-radius: 4px;
    border: none;
    height: 40px;
    padding: 0 16px;

    &-wrapper {
      text-align: center;
      padding: 16px;
      margin-top: 44-16px;
    }
  }

  .button-wrapper {
    text-align: center;
    padding: 16px;
    margin-top: 44-16px;
  }
</style>