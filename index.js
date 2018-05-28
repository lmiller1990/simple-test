function adder(a, b) {
  return a + b 
}

const describe = (desc, fn) => {
  console.log(desc)
  fn()
}

const checkForHook = (hook, source) => {
  // beforeEach([\s\S]*?\}\){1})
  const captureCb = new RegExp(`${hook}([\\s\\S]*?\\}\\)\{1\})`)
  const match = captureCb.exec(source)
  return match ? match[1] : null
}

const it = (msg, fn) => {
  console.log('  ' + msg)
  fnBody = fn.toString()
  const hasBeforeEachHook = checkForHook("beforeEach", fnBody)
  console.log("hook", hasBeforeEachHook)
  fn()
}

const matchers = (exp) => ({
  toBe: (ass) => {
    if (exp === ass) {
      console.log('pass')
      return true
    } else {
      throw new Error(`Expected ${ass}, got ${exp}`)
      return false
    }
  }
})

const beforeEach = (cb) => {
  cb()
}

const expect = (exp) => matchers(exp)


module.exports = {
  describe,
  expect,
  it,
  matchers,
  beforeEach,
  checkForHook
}
