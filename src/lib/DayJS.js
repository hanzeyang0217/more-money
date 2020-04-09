const DayJs = {
  getIsoStr(date) {
    const str = date.split('T')
    return str[0]
  }
}

function DJ(date) {
  return DayJs.getIsoStr(date)
}

export default DJ