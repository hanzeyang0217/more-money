<template>
  <Layout>
    {{recordList}}
    <Tags :tags="tags" @update:createTag="createTag" :selectedTag.sync="record.selectedTag"/>
    <Notes :inputNotes.sync="record.inputNotes"/>
    <Types :selectedType.sync="record.selectedType"/>
    <NumberPad :inputAmount.sync="record.inputAmount" @update:addRecord="addRecord"/>
  </Layout>
</template>

<script lang="js">
  import NumberPad from '@/components/Money/NumberPad'
  import Types from '@/components/Money/Types'
  import Notes from '@/components/Money/Notes'
  import Tags from '@/components/Money/Tags'
  import tagListModel from '@/Models/tagListModel'
  import recordListModel from '@/Models/recordListModel'

  /**
   * 数据迁移 数据库更新
   * 等会儿封装
   * TODO
   */
  const version = window.localStorage.getItem('version') || '0'
  const recordList = JSON.parse(window.localStorage.getItem('recordList'))
  if (version === '0.0.0') {
    //增加data
    recordList.forEach(record => {
      record.createdAt = new Date(2020, 1, 1)
    })
    window.localStorage.setItem('recordList', recordList)
  }
  window.localStorage.setItem('version', '0.0.1')


  export default {
    name: "Money",
    components: {Tags, Notes, Types, NumberPad},
    data() {
      return {
        tags: tagListModel.fetch(),
        record: {
          selectedTag: {},
          inputNotes: '',
          selectedType: '-',
          inputAmount: '0',
          saveAt: new Date()
        },
        recordList: []
      }
    },
    methods: {
      addRecord: function () {
        const cloneRecord = JSON.parse(JSON.stringify(this.record))
        this.recordList = recordListModel.addRecord(cloneRecord)
      },
      createTag() {
        this.tags = tagListModel.createTag()
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>