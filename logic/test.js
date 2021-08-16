import chalk from 'chalk'
import { logTitle, line } from '../helpers.js'
import { palindromeCheck, betweenLapYear, reverseWord, fizzBuzz, nearestFibonacci } from './logicTest.js'
const log = console.log

const test = () => {
  log(line())
  log(`${line(4)} Logic Test`)
  log(`${line(4)} warna ${chalk.blue('biru')} adalah contoh hasil`)
  log(`${line(4)} warna ${chalk.green('hijau')} adalah hasil dari fungsi`)
  log(line())

  logTitle('Palindrome')

  log(chalk.blue(true), 'Radar =>', chalk.green(palindromeCheck('Radar')));
  log(chalk.blue(true), 'Malam =>', chalk.green(palindromeCheck('Malam')));
  log(chalk.blue(true), 'Kasur ini rusak =>', chalk.green(palindromeCheck('Kasur ini rusak')));
  log(chalk.blue(true), 'Ibu Ratna antar ubi =>', chalk.green(palindromeCheck('Ibu Ratna antar ubi')));
  log(chalk.blue(false), 'Malas =>', chalk.green(palindromeCheck('Malas')));
  log(chalk.blue(false), 'Makan nasi goreng =>', chalk.green(palindromeCheck('Makan nasi goreng')));
  log(chalk.blue(false), 'Balonku ada lima =>', chalk.green(palindromeCheck('Balonku ada lima')));

  logTitle('Lap Year')

  log(chalk.blue([1904, 1908, 1912, 1916, 1920, 1924, 1928, 1932, 1936, 1940, 1944, 1948, 1952, 1956, 1960, 1964, 1968, 1972, 1976, 1980, 1984, 1988, 1992, 1996, 2000, 2004, 2008, 2012, 2016, 2020]))

  log(chalk.green(betweenLapYear()))

  logTitle('Reverse Word')

  log(chalk.blue('I ma A Taerg namuh'))
  log(chalk.green(reverseWord('I am A Great human')))

  logTitle('Nearest Fibonacci')

  log(chalk.blue(2))
  log(chalk.green(nearestFibonacci([15,1,3])))

  logTitle('Fizz Buzz')

  log(chalk.blue(['1', '2', 'Fizz', '4', 'Buzz', 'Fizz', '7', '8', 'Fizz', 'Buzz', '11', 'Fizz', '13', '14', 'FizzBuzz']))
  log(chalk.green(fizzBuzz(15)))
}

export default test
