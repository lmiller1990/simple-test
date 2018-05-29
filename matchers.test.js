const {describe, it, expect} = require("./api")
const {matchers} = require("./matchers")

describe('matchers', () => {
  describe('toBe', () => {
    it('works', () => {
      const actual = matchers('1').toBe('1')

      expect(actual).toBe(true)
    })
  })
})
