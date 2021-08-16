import { logTitle } from '../helpers.js'
import { searchData } from './jsonManipulation.js'

const test = async () => {
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
