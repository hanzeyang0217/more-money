import makeID from '@/lib/IDMaker'

const recordListModelBase = {
  key: 'recordList',
  setData(data) {
    window.localStorage.setItem(this.key, JSON.stringify(data))
  },
  fetch() {
    const nowRecordList = JSON.parse(window.localStorage.getItem(this.key)) || []
    return Array.from(nowRecordList)
  },
  makeRecord(record, recordList) {
    return {
      id: makeID(recordList),
      record: record
    }
  },
  addRecord(record) {
    const recordList = this.fetch()
    const newRecord = this.makeRecord(record, recordList)
    recordList.push(newRecord)
    this.setData(recordList)
    return recordList
  }
}

const recordListModel = {
  addRecord(record) {
    return recordListModelBase.addRecord(record)
  },
  fetch() {
    return recordListModelBase.fetch()
  }
}
/**
 *[
 *  {
 *    id : xxx,
 *    record : {
 *      selectedTag : {},
 *      selectedType : xxx,
 *      saveAt : xxx
 *      ...
 *    }
 *  }
 *]
 */

export default recordListModel
