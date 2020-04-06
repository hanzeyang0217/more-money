import makeID from '@/lib/IDMaker'

const key = 'tagList'

function setData(tagList) {
  window.localStorage.setItem(key, JSON.stringify(tagList))
}

function createTag(tagName, tagList) {
  return {
    id: makeID(tagList),
    name: tagName
  }
}

const tagListModel = {
  addTag(tagName) {
    const tagList = this.fetch()
    const newTag = createTag(tagName, tagList)
    tagList.push(newTag)
    setData(tagList)
    return tagList
  },
  update(id, tagName) {
    //TODO
  },
  deleteTag(id) {
    //TODO
  },
  fetch() {
    const nowTagList = JSON.parse(window.localStorage.getItem(key)) || []
    return Array.from(nowTagList)
  }
}

export default tagListModel