// Input: [3, 5, 2, -4, 8, 11]
// penjumlahan = 7
// Output: [[11, -4], [2, 5]]

const sumCheck = (arr, num) => {
  const sort = arr.sort((a, b) => a - b)
  let result = []
  for(let a of sort) {
    for(let b of sort) {
      if (a + b === num) {
        result.push([a, b])
      }
    }
  }
  return result.filter((a, b) => b % 2 !== 0 ? true : false).reverse()
}

console.log(sumCheck([3, 5, 2, -4, 8, 11], 7))
