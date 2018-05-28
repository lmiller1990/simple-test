function adder(a, b) {
  return a + b 
}

const describe = (desc, fn) => {
  console.log(desc)
  fn()
}

const checkForHook = (source) => {
  const captureCb = /beforeEach([\s\S]*(?=\}\)))/  
  const match = captureCb.exec(source)
  const beforeEachCb = match ? match[1] : null
  return beforeEachCb
}

const it = (msg, fn) => {
  console.log('  ' + msg)
  fnBody = fn.toString()
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
