const {matchers} = require("./matchers")
const {checkForHook} = require("./utils")

const describe = (desc, fn) => {
  console.log(desc)
  fn()
}

const it = (msg, fn) => {
  fnBody = fn.toString()
  const hasBeforeEachHook = checkForHook("beforeEach", fnBody)
  if (hasBeforeEachHook) {
    const hook = new Function(hasBeforeEachHook) 
    hook()
  }
  fn()
}

const expect = (exp) => matchers(exp)

const beforeEach = (cb) => {
  cb()
}

module.exports = {
  describe,
  it,
  expect,
  beforeEach
}
