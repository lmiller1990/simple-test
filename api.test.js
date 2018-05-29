const {
  describe,
  it,
  expect,
  beforeEach
} = require('./api')

let executes = 0
const noop = () => { executes += 1 }
  /*
describe('describe', () => {
  it('returns a function', () => {
    const actual = describe('', noop)

    expect(executes).toBe(1)
  }) 
})

describe('expect', () => {
  it('returns an object', () => {
    const actual = expect(true)

    expect(typeof actual).toBe('object')
    expect(typeof actual.toBe).toBe('function')
  })
})*/

describe('beforeEach', () => {
  it('executes before each it block', () => {
    let assiged = false

    beforeEach(() => {
      console.log("CalleD!")
      // assiged = true  
    })

    it('executes', () => {
      //expect(assiged).toBe(true)
    })

    assiged = false

    it('executes', () => {
      //expect(assiged).toBe(true)
    })
  })
})
