import makeID from '@/lib/IDMaker'

const tagListModelBase = {
  key: 'tagList',
  setData(tagList) {
    window.localStorage.setItem(this.key, JSON.stringify(tagList))
  },
  fetch() {
    const nowTagList = JSON.parse(window.localStorage.getItem(tagListModelBase.key)) || []
    return Array.from(nowTagList)
  },
  makeTag(tagName, tagList) {
    return {
      id: makeID(tagList),
      name: tagName
    }
  },
  inputTag() {
    const name = window.prompt('请输入标签名')
    const nameList = this.fetch().map(item => item.name)
    if (name === '') {
      window.alert('标签名不能为空')
    } else if (nameList.indexOf(name) !== -1) {
      window.alert('重复了')
    } else {
      return name
    }
    return 'fail'
  },
  findTag(id) {
    const tagList = this.fetch()
    return tagList.filter(item => item.id === id)[0]
  },
  addTag(tagName) {
    const tagList = this.fetch()
    const newTag = this.makeTag(tagName, tagList)
    tagList.push(newTag)
    this.setData(tagList)
    return tagList
  },
  update(id, tagName) {
    const tagList = this.fetch()
    const tag = tagList.filter(item => item.id === id)[0]
    tag.name = tagName
    this.setData(tagList)
    return tag
  },
  deleteTag(id) {
    const tagList = this.fetch()
    const tag = tagList.filter(item => item.id === id)[0]
    tagList.splice(tagList.indexOf(tag), 1)
    this.setData(tagList)
    return tagList
  }
}

const tagListModel = {
  createTag() {
    const result = tagListModelBase.inputTag()
    if (result !== 'fail') {
      return tagListModelBase.addTag(result)
    } else {
      return this.fetch()
    }
  },
  update(id, tagName) {
    return tagListModelBase.update(id, tagName)
  },
  deleteTag(id) {
    return tagListModelBase.deleteTag(id)
  },
  findTag(id) {
    return tagListModelBase.findTag(id)
  },
  fetch() {
    return tagListModelBase.fetch()
  }
}

export default tagListModel