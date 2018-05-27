function adder(a, b) {
  return a + b 
}

const describe = (desc, fn) => {
  console.log(desc)
  fn()
}

function insertSemis(str) {
  return str.replace(/(?:\r\n|\r|\n)/g, ';')
}

const checkForHook = (source) => {
  const captureCb = /beforeEach([\s\S]*(?=\}\)))/.exec(source)
  const beforeEachCb = captureCb ? captureCb[1] : null
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
      console.log('fail')
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
  insertSemis,
  checkForHook
}
