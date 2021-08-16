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

const firstUpper = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const checkFirstupper = (string) => {
  return !!/[A-Z]/.exec(string[0])
}

const reverseWord = (string) => {
  let arrStr = string.split(' ')
  return arrStr.map((key) => {
    const reverse = key.toLowerCase().split('').reverse().join('')
    return !checkFirstupper(key) ? reverse : firstUpper(reverse)
  }).join(' ')
}


export { palindromeCheck, betweenLapYear, reverseWord }