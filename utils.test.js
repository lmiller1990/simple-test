const {
  checkForHook,
  describe,
  it,
  expect
} = require("./index")

describe('checkForHook', () => {
  it('returns body of beforeEach', () => {
    const str = 
      "it('test', () => {" +
        "beforeEach(() => {" +
          "const a = 1" +
        "})" +
      "})"

    const actual = checkForHook(str)

    expect(actual).toBe("(() => {const a = 1})")
  })
})
