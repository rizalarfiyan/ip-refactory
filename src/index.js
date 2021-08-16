import { logTitle } from './helpers.js'
import { palindromeCheck, betweenLapYear, reverseWord } from './logicTest.js'

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


