#!/usr/bin/env node
/**
 * Get a random float between `[start]` and `[end]`.
 * Omit end and get a value between 0 and `[start]`.
 *
 * @param {number} start Inclusive start or exclusive end
 * @param {number} [end] Exclusive end
 * @returns {number} A random number between `[start]` and `[end]`
 */
const randomFloat = (start, end) =>
  (end !== void 0 ? start : 0) + Math.random() * (end !== void 0 ? end - start : start)

/**
 * Get a random int between `[start]` and `[end]`.
 * Omit end and get a value between 0 and `[start]`.
 *
 * @param {number} start Inclusive start or exclusive end
 * @param {number} [end] Exclusive end
 * @returns {number} A random number between [start] and [end]
 */
const randomInt = (start, end) => Math.floor(randomFloat(start, end))

/**
 * Get a range of numbers between `[start]` and `[end]`.
 * Omit end and get a value between 0 and `[start]`.
 *
 * @param {number} start Inclusive start or exclusive end
 * @param {number} [end] Exclusive end
 * @yields {number} A number in range
 */
function* range(start, end) {
  const s = (end !== void 0 ? start : 0)
  const e = (end !== void 0 ? end : start)
  for (let i = s; i < e; i++)
    yield i
}

/**
 * @template T,R
 * @param {T} value 
 * @param {...((value: T) => R|Promise<R>)} fn 
 * @returns {Promise<R>}
 */
const chain = async(value, ...fn) => !fn.length
  ? value
  : chain(Promise.resolve(fn.shift().call(null, await value)), ...fn)

const pick = (key, obj) => typeof obj !== 'undefined' ? obj[key] : obj => obj[key]

const test = (test, failure) => {
  let value
  try {
    value = test()
  } catch (e) {
    value = failure && failure(e)
  }
  return value
}

const defaults = (actual={}, defaults={}, fn) => {
  Object.keys(defaults).forEach(key => {
    if (!(key in actual) || typeof actual[key] === 'undefined')
      actual[key] = defaults[key]
  })
  return fn && fn(actual)
}

module.exports = {
  randomFloat,
  randomInt,
  range,
  chain,
  pick,
  test,
  defaults
}
