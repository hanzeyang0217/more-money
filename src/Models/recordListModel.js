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
  // inputTag() {
  //   const name = window.prompt('请输入标签名')
  //   const nameList = this.fetch().map(item => item.name)
  //   if (name === '') {
  //     window.alert('标签名不能为空')
  //   } else if (nameList.indexOf(name) !== -1) {
  //     window.alert('重复了')
  //   } else {
  //     return name
  //   }
  //   return 'fail'
  // },
  // findTag(id) {
  //   const tagList = this.fetch()
  //   return tagList.filter(item => item.id === id)[0]
  // },
  addRecord(record) {
    const recordList = this.fetch()
    const newRecord = this.makeRecord(record, recordList)
    recordList.push(newRecord)
    this.setData(recordList)
    return recordList
  },
  // update(id, tagName) {
  //   const tagList = this.fetch()
  //   const tag = tagList.filter(item => item.id === id)[0]
  //   tag.name = tagName
  //   this.setData(tagList)
  //   return tag
  // },
  // deleteTag(id) {
  //   const tagList = this.fetch()
  //   const tag = tagList.filter(item => item.id === id)[0]
  //   tagList.splice(tagList.indexOf(tag), 1)
  //   this.setData(tagList)
  //   return tagList
  // }
}

const recordListModel = {
  addRecord(record) {
    return recordListModelBase.addRecord(record)
  },
  // update(id, tagName) {
  //   return tagListModelBase.update(id, tagName)
  // },
  // deleteTag(id) {
  //   return tagListModelBase.deleteTag(id)
  // },
  // findTag(id) {
  //   return tagListModelBase.findTag(id)
  // },
  fetch() {
    return recordListModelBase.fetch()
  }
}

export default recordListModel