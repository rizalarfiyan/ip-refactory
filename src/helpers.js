const line = (line = null) => {
  const long = !!line ? parseInt(line) : process.stdout.columns
  return '-'.repeat(long)
}

const logTitle = (title) => {
  return console.log(`\n${line()} ${title} \n${line()}\n`)
}

export { line, logTitle }