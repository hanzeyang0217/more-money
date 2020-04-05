<template>
  <Layout>
    {{recodeList}}
    <Tags :tags.sync="tags" :selectedTags.sync="recode.selectedTags"/>
    <Notes :inputNotes.sync="recode.inputNotes"/>
    <Types :selectedType.sync="recode.selectedType"/>
    <NumberPad :inputAmount.sync="recode.inputAmount" @update:addRecode="addRecode"/>
  </Layout>
</template>

<script lang="js">
  import NumberPad from '@/components/Money/NumberPad'
  import Types from '@/components/Money/Types'
  import Notes from '@/components/Money/Notes'
  import Tags from '@/components/Money/Tags'

  /**
   * 数据迁移 数据库更新
   * 等会儿封装
   */
  const version = window.localStorage.getItem('version') || '0'
  const recordList = JSON.parse(window.localStorage.getItem('recodeList'))
  if (version === '0.0.0'){
    //增加data
    recordList.forEach(recode=>{
      recode.createdAt=new Date(2020,1,1)
    })
    window.localStorage.setItem('recodeList',recordList)
  }
  window.localStorage.setItem('version','0.0.1')

  export default {
    name: "Money",
    components: {Tags, Notes, Types, NumberPad},
    data() {
      return {
        tags: ['711', '全家', '螺丝'],
        recode: {
          selectedTags: [],
          inputNotes: '',
          selectedType: '-',
          inputAmount: '0',
          saveAt: new Date()
        },
        recodeList: []
      }
    },
    watch: {
      recodeList: function () {
        console.log(this.recodeList)
        localStorage.setItem('recodeList', JSON.stringify(this.recodeList))

      }
    },
    methods: {
      addRecode: function () {
        const cloneRecode = JSON.parse(JSON.stringify(this.recode))
        this.recodeList.push(cloneRecode)
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>