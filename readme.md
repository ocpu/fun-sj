### randomFloat(start [, end])

1. `randomFloat(start: number, end: number): number`
2. `randomFloat(end: number): number`

- `start` Inclusive start.
- `end` Exclusive end.
- A random number between `start` and `end`.

Get a random float between `start` and `end`. Omit end and get a value between 0 and `start`.

### randomInt(start [, end])

1. `randomInt(start: number, end: number): number`
2. `randomInt(end: number): number`

- `start` Inclusive start.
- `end` Exclusive end.
- A random number between `start` and `end`.

Get a random integer between `start` and `end`. Omit `end` and get a value between 0 and `start`.

### range(start [, end])

1. `range(start: number, end: number): Iterator<number>`
2. `range(end: number): Iterator<number>`

- `start` Inclusive start.
- `end` Exclusive end.

Get a range of numbers between `start` and `end`. Omit end and get a value between 0 and `start`.

### chain(value, ...fn)

- `value` The value to start with.
- `fn` The functions that modify the values.

Chain functions from a value and return the value.

### chainAsync(value, ...fn)

- `value` The value to start with.
- `fn` The functions that modify the values.

Chain but as promises.

### pick(key [, obj])

1. `pick<T, T>(key: K, obj: T) => T[K]`
2. `pick<T, T>(key: K): (obj: T) => T[K]`

- `key` The key to pick from a object.
- `obj` Any object to get picked on.
- The picked value.

### test(test [, failure])

1. `test<T, R>(test: () => T, failure?: (e: Error) => R): T | R`

- `test` Some thing to try.
- `failure` What to do on failure.
- Either the normal value or the failure value.

Try something as an expression.

### defaults(actual: A, defaults: D)

1. `defaults<A, D>(actual: A, defaults: D): A & D`
2. `defaults<A, D, R>(actual: A, defaults: D, fn: (opts: A & D) => R): R`

- `actual` The actual values
- `defaults` The default values
- `fn` A function to run after the defaults assignment.
- If the function is defined this returns that value.

Sets default values.

### extract(...keys)

1. `extract<T, K extends keyof T>(keys: ...K[]): { (obj: T): { [key: K]: T[K] } }`

- `transformer` How you want to transform the object
- A function that takes a object then returns a object with the key value pairs.

Extract keys from a obj.

### transform(transformer)

1. `transform<T, K extends keyof T, R>(transformer: (value: T[K], key: K, obj: T) => R): (obj: T) => { [K]: R }`

- `transformer` How you want to transform the object
- A function that takes a object then returns the transformed object/array.

Transform any object or array however you want.

### call(key, ...args)

1. `call<K extends keyof O, O, R>(key: K, args: ...any[]): (obj: O, args: ...any[]) => R`

- `key` The key to access to call the function.
- `args` Any agrguments you want to call the function with.
- A function that takes a object then returns the result of the called function.

Calls a function named like key on the object with the args specified.
