import chalk from 'chalk'
import { logTitle, line } from '../helpers.js'
import { searchData, loadData } from './jsonManipulation.js'

const log = console.log

const test = async () => {
  log(line())
  log(`${line(4)} JSON Manipulation`)
  log(line())
  log(`${line(4)} ${chalk.yellow('Data asli')}`)

  log(await loadData())

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
}

export default test
