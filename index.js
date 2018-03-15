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
 * Chain functions from a value.
 * 
 * @template T,R
 * @param {T} value 
 * @param {...((value: T) => R|Promise<R>)} fn 
 * @returns {Promise<R>}
 */
const chain = async(value, ...fn) => !fn.length
  ? value
  : chain(Promise.resolve(fn.shift().call(null, await value)), ...fn)

/**
 * Pick a value from a object.
 * 
 * @param {string} key The key to pick from a object
 * @param {*} obj Any object to get picked on
 * @returns {(any|(obj: any) => any)}
 */
const pick = (key, obj) => typeof obj !== 'undefined' ? obj[key] : obj => obj[key]

/**
 * Try something as an expression
 * 
 * @template T,R
 * @param {() => T} test Some thing to try
 * @param {(error: Error) => R} [failure] What to do on failure
 * @returns {T | R} Either the normal value or the failure value
 */
const test = (test, failure) => {
  let value
  try {
    value = test()
  } catch (e) {
    value = failure && failure(e)
  }
  return value
}

/**
 * Sets default values
 * 
 * @template A, D, R
 * @param {A} actual The actual values
 * @param {D} defaults The default values
 * @param {(options: A & D) => R} [fn] A function to run after the defaults assignment.
 * @returns {(A & D|R)}
 */
const defaults = (actual={}, defaults={}, fn) => {
  const obj = Object.assign({}, defaults, actual)
  return typeof fn === 'function'
    ? fn(obj)
    : obj
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
