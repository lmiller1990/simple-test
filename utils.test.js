const {
  describe,
  it,
  expect
} = require("./index")

const {checkForHook} = require("./utils")

describe('checkForHook', () => {
  it('returns body of beforeEach', () => {
    const str = 
      "it('test', () => {" +
        "beforeEach(() => {" +
          "const a = 1" +
        "})" +
        "it('some other nested it', () => {" +
          "console.log('something')" +
        "})" +
      "})"

    const actual = checkForHook("beforeEach", str)

    expect(actual).toBe("(() => {const a = 1})")
  })
})
