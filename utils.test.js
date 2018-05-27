const {
  insertSemis,
  checkForHook,
  describe,
  it,
  expect
} = require("./index")
  /*
describe("insertSemis", () => {
  it("replaces carriage returns with ;", () => {
    const str = "a\nb"
    
    const actual = insertSemis(str)

    expect(actual).toBe("a;b")
  })
})*/

describe('checkForHook', () => {
  it('returns body of beforeEach', () => {
    const str = `
      it('test', () => {
        beforeEach(() => {
          const a = 1;
        })
      })
    `

    const actual = checkForHook(str)

    expect(actual).toBe(`(() => { const a = 1; })`)
  })
})
