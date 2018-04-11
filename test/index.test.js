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

it('chain functions', () => {
  const value = "Make me"
  const toLowerCase = value => value.toLowerCase()
  
  expect(
    F.chain(
      value,
      toLowerCase
    )
  ).toBe(value.toLowerCase())
})

it('chain asynchronously functions', () => {
  const value = "Make me"
  const toLowerCase = value => value.toLowerCase()

  return F.chainAsync(
    value,
    toLowerCase,
    val => expect(val).toBe(value.toLowerCase())
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
    { hello: 'Me', make: 1 }
  )
  expect(ret).toMatchObject({ hello: 'World', make: 1 })
  F.defaults(
    { hello: 'World' },
    { hello: 'Me', make: 2 },
    ret => {
      expect(ret).toMatchObject({ hello: 'World', make: 2 })
    }
  )
})

it('extracts object values', () => {
  const user = { id: '7', name: 'Unknown', services: ['Steam'] }
  const nameServices = F.extract('name', 'services')

  const extract = nameServices(user)
  expect(extract).toEqual({
    name: 'Unknown',
    services: ['Steam']
  })
})

it('transforms a array', () => {
  const usernames = [
    { id: '0', name: 'My cat', services: [] },
    { id: '1', name: 'rufus', services: [] },
    { id: '2', name: 'fudi', services: ['League of Legends'] },
    { id: '3', name: 'Shadows Warrior', services: ['League of Legends', 'Steam'] },
    { id: '4', name: 'Blank', services: ['League of Legends'] },
    { id: '5', name: 'cpus', services: ['Steam'] },
    { id: '6', name: 'Mals', services: ['Steam'] },
    { id: '7', name: 'Unknown', services: ['Steam'] },
  ]
  const transformToNames = F.transform(F.pick('name'))
  const names = transformToNames(usernames)
  expect(names).toEqual(['My cat', 'rufus', 'fudi', 'Shadows Warrior', 'Blank', 'cpus', 'Mals', 'Unknown'])
})

it('transforms a object', () => {
  const obj = {
    id: "dfvs",
    name: 'vdvsd'
  }
  const transformToUppercase = F.transform(value => value.toUpperCase())
  const newObj = transformToUppercase(obj)
  expect(newObj).toEqual({ id: 'DFVS', name: 'VDVSD' })
})

it('can call a function', () => {
  const obj = {
    fn: () => 'I am a result'
  }
  const callFunctionNamedFN = F.call('fn')
  const res = callFunctionNamedFN(obj)
  expect(res).toBe('I am a result')
})

it('can call a function with args', () => {
  const obj = {
    fn: () => 'I am a result'
  }
  const callFunctionNamedFN = F.call('fn')
  const res = callFunctionNamedFN(obj)
  expect(res).toBe('I am a result')
})
