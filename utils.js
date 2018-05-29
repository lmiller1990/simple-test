const checkForHook = (hook, source) => {
  // beforeEach([\s\S]*?\}\){1})
  const captureCb = new RegExp(`${hook}([\\s\\S]*?\\}\\)\{1\})`)
  const match = captureCb.exec(source)
  return match ? match[1] : null
}

module.exports = {
  checkForHook
}
