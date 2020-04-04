<template>
  <Layout>
    {{recode}}
    <Tags :tags.sync="tags" :selectedTags.sync="recode.selectedTags"/>
    <Notes :inputNotes.sync="recode.inputNotes"/>
    <Types :selectedType.sync="recode.selectedType"/>
    <NumberPad :inputAmount.sync="recode.inputAmount" @update:update="update"/>
  </Layout>
</template>

<script lang="js">
  import NumberPad from '@/components/Money/NumberPad'
  import Types from '@/components/Money/Types'
  import Notes from '@/components/Money/Notes'
  import Tags from '@/components/Money/Tags'

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
          inputAmount: '0'
        }
      }
    },
    methods:{
      update:function () {
        console.log(this.recode)
        localStorage.setItem('recode',JSON.stringify(this.recode))
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>