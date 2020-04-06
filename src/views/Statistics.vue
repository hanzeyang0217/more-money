<template>
  <Layout>
    <SelectTab class="tabType" :tabData="tabTypeData" :selectedKey.sync="selectedType"/>
    <SelectTab :tabData="tabData" :selectedKey.sync="selectedTab"/>

    <ul>
      <li class="record" v-for="record in recordList" :key="record.id">
        <div>
          <span>日期</span>
          <span>
            {{record.record.saveAt}}
          </span>
        </div>
        <div>
          <span>
            {{record.record.selectedTag.name}}
          </span>
          <span>
            {{record.record.inputNotes}}
          </span>
          <span>
            {{record.record.inputAmount}}
          </span>
        </div>
      </li>
    </ul>
  </Layout>


</template>

<script lang="js">
  import recordListModel from '@/Models/recordListModel'
  import SelectTab from '@/components/Common/SelectTab'
  import tabData from '@/constants/tabData'
  import tabTypeData from '@/constants/tabTypeData'

  export default {
    name: "Statistics",
    components: {SelectTab},
    data() {
      return {
        recordList: recordListModel.fetch(),
        selectedType: '-',
        selectedTab: 'day',
        tabData: tabData,
        tabTypeData:tabTypeData
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