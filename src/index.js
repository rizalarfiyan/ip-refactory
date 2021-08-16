import { logTitle } from './helpers.js'
import { palindromeCheck, betweenLapYear, reverseWord, fizzBuzz, nearestFibonacci } from './logicTest.js'
import { searchData } from './jsonManipulation.js'

logTitle('Palindrome')

console.log(palindromeCheck('Radar'), true);
console.log(palindromeCheck('Malam'), true);
console.log(palindromeCheck('Kasur ini rusak'), true);
console.log(palindromeCheck('Ibu Ratna antar ubi'), true);
console.log(palindromeCheck('Malas'), true);
console.log(palindromeCheck('Makan nasi goreng'), true);
console.log(palindromeCheck('Balonku ada lima'), true);

logTitle('Lap Year')

console.log(betweenLapYear())

logTitle('Reverse Word')

console.log(reverseWord('I am A Great human'))
console.log('I ma A Taerg namuh')

logTitle('Nearest Fibonacci')

console.log(nearestFibonacci([15,1,3]))

logTitle('Fizz Buzz')

console.log(fizzBuzz(15))

logTitle('Find items in the Meeting Room')

console.log(await searchData('placement.name', 'Meeting Room'))

logTitle('Find all electronic devices')

console.log(await searchData('type', 'electronic'))

logTitle('Find all the furniture')

console.log(await searchData('type', 'furniture'))

logTitle('Find all items were purchased on 16 Januari 2020')

console.log(await searchData('purchased_at', '16 Januari 2020'))

logTitle('Find all items with brown color')

console.log(await searchData('tags', 'brown', true))

