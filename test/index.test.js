/* global describe it expect jest */

const F = require('../')

describe('random', () => {
  it('creates random floats', () => {
    const lower = 20.436
    const upper = 40.754
    for (let i = 0; i < 30; i++)
      expect(lower <= F.randomFloat(upper, lower) <= upper).toBeTruthy()
  })
  it('creates random floats with no lower bound', () => {
    const upper = 20.436
    for (let i = 0; i < 30; i++)
      expect(0 <= F.randomFloat(upper) <= upper).toBeTruthy()
  })
  it('creates random ints', () => {
    const lower = 20
    const upper = 40
    for (let i = 0; i < 30; i++)
      expect(lower <= F.randomInt(upper, lower) <= upper).toBeTruthy()
  })
  it('creates random ints with no lower bound', () => {
    const upper = 20
    for (let i = 0; i < 30; i++)
      expect(0 <= F.randomInt(upper) <= upper).toBeTruthy()
  })
})

it('creates a range of numbers', () => {
  const lower = 10
  const upper = 20
  let i = 0
  for (const index of F.range(lower, upper)) {
    expect(index).toBe(lower + i)
    i++
  }
})
it('creates a range of numbers with no lower bound', () => {
  const upper = 20
  let i = 0
  for (const index of F.range(upper)) {
    expect(index).toBe(i)
    i++
  }
})

it('chain functions', done => {
  const value = "Make me"
  const toLowerCase = value => value.toLowerCase()
  F.chain(
    value,
    toLowerCase,
    val => expect(val).toBe(value.toLowerCase()),
    () => void 0,
    done
  )
})

it('picks a value from a object', () => {
  let value = { hello: 'world' }
  expect(F.pick('hello', value)).toBe('world')
  let value1 = { hello: 'Make' }
  let value2 = { hello: 'Me' }
  let getHello = F.pick('hello')
  expect(getHello(value1)).toBe('Make')
  expect(getHello(value2)).toBe('Me')
})

it('makes a try/catch a expression', () => {
  let mock = jest.fn()
    .mockReturnValueOnce(void 0)
    .mockReturnValueOnce('Hello')
    .mockReturnValueOnce('Make')
  let ret

  F.test(mock)
  expect(mock).toHaveBeenCalledTimes(1)

  ret = F.test(mock)
  expect(mock).toHaveBeenCalledTimes(2)
  expect(ret).toBe('Hello')
  
  ret = F.test(() => {throw new Error}, mock)
  expect(mock).toHaveBeenCalledTimes(3)
  expect(ret).toBe('Make')
})

it('default a object', () => {
  let actual = { hello: 'World' }
  const ret = F.defaults(
    actual,
    { hello: 'Me', make: 2 }
  )
  expect(ret).toMatchObject({ hello: 'World', make: 2 })
  F.defaults(
    { hello: 'World' },
    { hello: 'Me', make: 2 },
    ret => {
      expect(ret).toMatchObject({ hello: 'World', make: 2 })
    }
  )
})
