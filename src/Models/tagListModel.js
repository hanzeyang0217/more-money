/**
 * data 大概是这个样子
 *[
 *  {
 *   id: 1,
 *   name: '711'
 *  },
 *  {
 *   id: 2,
 *   name: '全家'
 *  },
 *  {
 *   id: 3,
 *   name: '罗森'
 *  },
 *]
 */
const key = 'tagList'

function setData(tagList) {
  window.localStorage.setItem(key, JSON.stringify(tagList))
}

/**
 * id 有关的到时候也封装
 * TODO
 */

function getMaxID(tagList) {
  let maxID = 0
  Array.from(tagList).forEach(item => {
      if (item.id > maxID)
        maxID = item.id
    }
  )
  return maxID
}

function makeID(tagList) {
  return getMaxID(tagList) + 1
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