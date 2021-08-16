import { logTitle } from '../helpers.js'
import { palindromeCheck, betweenLapYear, reverseWord, fizzBuzz, nearestFibonacci } from './logicTest.js'

const test = () => {
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
}

export default test
