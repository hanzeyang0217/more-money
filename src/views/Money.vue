<template>
  <Layout>
    {{recode.selectedType}}
    <br>
    {{recode.inputNotes}}
    <br>
    {{recode.inputAmount}}
    <br>
    {{recode.selectedTags}}
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
    watch: {
      'recode.inputAmount': function () {
        console.log(this.recode)
      }
    },
    methods:{
      update:function () {
        localStorage.setItem('recode',JSON.stringify(this.recode))
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>