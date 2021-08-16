const palindromeCheck = (string) => {
  const str = string.toLowerCase()
  return str == str.toLowerCase().split('').reverse().join('')
}

export { palindromeCheck }