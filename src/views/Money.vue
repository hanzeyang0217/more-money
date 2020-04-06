<template>
  <Layout>
    <Tags :tags="tags" @update:createTag="createTag" :selectedTag.sync="record.selectedTag"/>
    <Notes :inputNotes.sync="record.inputNotes"/>
    <SelectTab class="tabType" :tabData="tabTypeData" :selectedKey.sync="record.selectedType"/>
    <NumberPad :inputAmount.sync="record.inputAmount" @update:addRecord="addRecord"/>
  </Layout>
</template>

<script lang="js">
  import NumberPad from '@/components/Money/NumberPad'
  import Notes from '@/components/Money/Notes'
  import Tags from '@/components/Money/Tags'
  import tagListModel from '@/Models/tagListModel'
  import recordListModel from '@/Models/recordListModel'
  import SelectTab from '@/components/Common/SelectTab'

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
    components: {SelectTab, Tags, Notes, NumberPad},
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
        recordList: [],
        tabTypeData: [
          {
            key: '-',
            name: '支出',
            defaultSelected: true
          },
          {
            key: '+',
            name: '收入',
          }
        ]
      }
    },
    methods: {
      addRecord: function () {
        if (this.record.inputAmount !== 0) {
          const cloneRecord = JSON.parse(JSON.stringify(this.record))
          this.recordList = recordListModel.addRecord(cloneRecord)

        }
      },
      createTag() {
        this.tags = tagListModel.createTag()
      }
    }
  }
</script>

<style lang="scss" scoped>
  ::v-deep .tabType{
    > li {
      height: 64px;
      font-size: 24px;
    }
  }
</style>