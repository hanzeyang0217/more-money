<template>
  <Layout>
    <Tags :tags.sync="tags"/>
    <Notes/>
    <Types/>
    <NumberPad/>
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
    data(){
      return{
        tags:['711','全家','螺丝']
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>