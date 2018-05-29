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

module.exports = {
  matchers
}
