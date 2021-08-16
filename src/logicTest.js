const palindromeCheck = (string) => {
  const str = string.toLowerCase()
  return str == str.toLowerCase().split('').reverse().join('')
}

const lapYearCheck = (year) => {
  return ((year % 4 == 0) && (year % 100 !== 0)) || (year % 400 == 0)
}

const betweenLapYear = (from = 1900, to = 2020) => {
  const loop = Math.abs(from - to) + 1;
  const getMin = Math.min(from)
  let arr = []
  for (let i = 0; i < loop; i++) {
    let year = getMin + i
    if (lapYearCheck(year)) {
      arr.push(year)
    }
  }
  return arr
}

export { palindromeCheck, betweenLapYear }