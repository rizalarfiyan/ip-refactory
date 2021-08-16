import fs from 'fs'
import path from 'path'

const dataJson = 'src/data.json'

const loadData = (location = null) => {
  const getJson = location || dataJson
  return new Promise((resolve, reject) => {
    fs.readFile(path.join(path.resolve(), getJson), 'utf8', function (err, data) {
      if (err) return reject(err)
      resolve(JSON.parse(data))
    })
  })
}

const searchData = async (query, search, searchArray = false) => {
  const data = await loadData()
  return data.filter((item) => {
    const getQuery = query.split('.').reduce((prev, current) => (prev || {})[current], item)
    if ((new Date(getQuery)).getTime() > 0) {
      return (new Date(getQuery * 1000)).toLocaleDateString('id-ID') === (new Date(search)).toLocaleDateString('id-ID')
    }
    return searchArray ? getQuery.includes(search) : getQuery === search
  })
}



export { loadData, searchData }
