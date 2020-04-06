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

export default makeID