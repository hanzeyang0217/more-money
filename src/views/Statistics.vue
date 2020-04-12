<template>
  <Layout>
    <SelectTab class="tabType" :classPrefix="classPrefix" :tabData="tabTypeData" :selectedKey.sync="selectedType"/>
    <ol>
      <li class="record" v-for="group in showRecordList" :key="group.groupID">
        <div>
          <h3 class="title">{{group.groupID}}</h3>
        </div>
        <ol>
          <li v-for="groupItem in group.groupItems" :key="groupItem.id">
            <div class="recordItem">
              <span>
                {{groupItem.record.selectedTag.name}}
              </span>
              <span>
                {{groupItem.record.inputNotes}}
              </span>
              <span>
              ￥{{groupItem.record.inputAmount}}
              </span>
            </div>
          </li>
        </ol>
      </li>
    </ol>
  </Layout>
</template>

<script lang="js">
  import recordListModel from '@/Models/recordListModel'
  import SelectTab from '@/components/Common/SelectTab'
  import tabTypeData from '@/constants/tabTypeData'
  import DJ from '@/lib/DayJS'

  export default {
    name: "Statistics",
    components: {SelectTab},
    data() {
      return {
        recordList: recordListModel.fetch(),
        selectedType: '-',
        tabTypeData: tabTypeData,
        classPrefix: 'tabTypePrefix'
      }
    },
    computed: {
      showRecordList() {
        /**
         *[
         * {
         *   groupID:2020-04-10,
         *   groupItems:[
         *     {
         *       id : 1,
         *       record : {}
         *     },
         *     {
         *       id : 2,
         *       record : {}
         *     },
         *     {
         *       id : 3,
         *       record : {}
         *     },
         *   ]
         * },
         * {
         *   groupID:2020-04-09,
         *   groupItems:[
         *     {
         *       id : 1,
         *       record : {}
         *     },
         *     {
         *       id : 2,
         *       record : {}
         *     },
         *     {
         *       id : 3,
         *       record : {}
         *     },
         *   ]
         * }
         *]
         */
        const newRecordList = []
        this.recordList.forEach((item => {
          if (item.record.selectedType !== this.selectedType) return
          const targetGroupID = DJ(item.record.saveAt)
          let index = -1
          newRecordList.forEach((item, i) => {
            if (item.groupID === targetGroupID && index === -1) {
              index = i
            }
          })
          if (index >= 0) {
            //加入同一天的group
            newRecordList[index].groupItems.push(item)
          } else {
            //开始新的组
            newRecordList.push({
              groupID: DJ(item.record.saveAt, 'day'),
              groupItems: [
                item
              ]
            })
          }
        }))
        //排序 从近到远
        newRecordList.sort((a, b) => {
          return a.groupID > b.groupID ? -1 : 1
        })
        return newRecordList
      }
    }
  }
</script>

<style lang="scss" scoped>
  ::v-deep .tabType {
    > .tabTypePrefix-item {
      height: 64px;
      font-size: 24px;
    }
  }

  %item {
    padding: 8px 16px;
    line-height: 24px;
    display: flex;
    justify-content: space-between;
    align-content: center;
    background-color: #f5f5f5;
  }

  .title {
    @extend %item;
  }

  .recordItem {
    background: white;
    @extend %item;
  }

</style>