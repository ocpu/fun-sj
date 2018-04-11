declare var F: {
  /**
   * Get a random float between `[start]` and `[end]`.
   * Omit end and get a value between 0 and `[start]`.
   * 
   * @param start Inclusive start or exclusive end
   * @param end Exclusive end
   * @returns A random number between `[start]` and `[end]`
   */
  randomFloat(start: number, end: number): number
  /**
   * Get a random float between `[start]` and `[end]`.
   * Omit end and get a value between 0 and `[start]`.
   * 
   * @param end Exclusive end
   * @returns A random number between `[start]` and `[end]`
   */
  randomFloat(end: number): number
  /**
   * Get a random int between `[start]` and `[end]`.
   * Omit end and get a value between 0 and `[start]`.
   *
   * @param start Inclusive start or exclusive end
   * @param end Exclusive end
   * @returns A random number between [start] and [end]
   */
  randomInt(start: number, end: number): number
  /**
   * Get a random int between `[start]` and `[end]`.
   * Omit end and get a value between 0 and `[start]`.
   *
   * @param end Exclusive end
   * @returns A random number between [start] and [end]
   */
  randomInt(end: number): number
  /**
   * Get a range of numbers between `[start]` and `[end]`.
   * Omit end and get a value between 0 and `[start]`.
   *
   * @param start Inclusive start or exclusive end
   * @param end Exclusive end
   * @yields A number in range
   */
  range(start: number, end: number): Iterator<number>
  /**
   * Get a range of numbers between `[start]` and `[end]`.
   * Omit end and get a value between 0 and `[start]`.
   *
   * @param end Exclusive end
   * @yields A number in range
   */
  range(end: number): Iterator<number>
  /**
   * Chain functions from a value.
   */
  chainAsync<T,R1,R2,R3,R4,R5,R6>(value: T, fn: (value: T) => R1|Promise<R1>, fn1: (value: R1) => R2|Promise<R2>, fn2: (value: R2) => R3|Promise<R3>, fn3: (value: R3) => R4|Promise<R4>, fn4: (value: R4) => R5|Promise<R5>, fn5: (value: R5) => R6|Promise<R6>): Promise<R6>
  /**
   * Chain functions from a value.
   */
  chainAsync<T,R1,R2,R3,R4,R5>(value: T, fn: (value: T) => R1|Promise<R1>, fn1: (value: R1) => R2|Promise<R2>, fn2: (value: R2) => R3|Promise<R3>, fn3: (value: R3) => R4|Promise<R4>, fn4: (value: R4) => R5|Promise<R5>): Promise<R5>
  /**
   * Chain functions from a value.
   */
  chainAsync<T,R1,R2,R3,R4>(value: T, fn: (value: T) => R1|Promise<R1>, fn1: (value: R1) => R2|Promise<R2>, fn2: (value: R2) => R3|Promise<R3>, fn3: (value: R3) => R4|Promise<R4>): Promise<R4>
  /**
   * Chain functions from a value.
   */
  chainAsync<T,R1,R2,R3>(value: T, fn: (value: T) => R1|Promise<R1>, fn1: (value: R1) => R2|Promise<R2>, fn2: (value: R2) => R3|Promise<R3>): Promise<R3>
  /**
   * Chain functions from a value.
   */
  chainAsync<T,R1,R2>(value: T, fn: (value: T) => R1|Promise<R1>, fn1: (value: R1) => R2|Promise<R2>): Promise<R2>
  /**
   * Chain functions from a value.
   */
  chainAsync<T,R>(value: T, fn: (value: T) => R|Promise<R>): Promise<R>
  /**
   * Chain functions from a value.
   */
  chainAsync<T,R>(value: T, ...fn: ((value: T) => R|Promise<R>)[]): Promise<R>
  /**
   * Chain functions from a value.
   */
  chain<T,R1,R2,R3,R4,R5>(value: T, fn: (value: T) => R1, fn1: (value: R1) => R2, fn2: (value: R2) => R3, fn3: (value: R3) => R4, fn4: (value: R4) => R5): R5
  /**
   * Chain functions from a value.
   */
  chain<T,R1,R2,R3,R4>(value: T, fn: (value: T) => R1, fn1: (value: R1) => R2, fn2: (value: R2) => R3, fn3: (value: R3) => R4): R4
  /**
   * Chain functions from a value.
   */
  chain<T,R1,R2,R3>(value: T, fn: (value: T) => R1, fn1: (value: R1) => R2, fn2: (value: R2) => R3): R3
  /**
   * Chain functions from a value.
   */
  chain<T,R1,R2>(value: T, fn: (value: T) => R1, fn1: (value: R1) => R2): R2
  /**
   * Chain functions from a value.
   */
  chain<T,R>(value: T, fn: (value: T) => R): R
  /**
   * Chain functions from a value.
   */
  chain<T,R>(value: T, ...fn: ((value: T) => R)[]): R
  /**
   * Pick a value from a object.
   * 
   * @param key The key to pick from a object
   * @returns The picked value
   */
  pick<T extends {}, K extends keyof T>(key: K): (obj: T) => T[K]
  /**
   * Pick a value from a object.
   * 
   * @param key The key to pick from a object
   * @param obj Any object to get picked on
   * @returns The picked value
   */
  pick<T extends {}, K extends keyof T>(key: K, obj: T): T[K]
  /**
   * Try something as an expression
   * 
   * @param test Some thing to try
   * @param failure What to do on failure
   * @returns Either the normal value or the failure value
   */
  test<T, R>(test: () => T, failure?: (e: Error) => R): T | R
  /**
   * Sets default values
   * 
   * @param actual The actual values
   * @param defaults The default values
   */
  defaults<A, D>(actual: A, defaults: D): A & D
  /**
   * Sets default values
   * 
   * @param actual The actual values
   * @param defaults The default values
   * @param fn A function to run after the defaults assignment.
   */
  defaults<A, D, R>(actual: A, defaults: D, fn: (opts: A & D) => R): R
  /**
   * Extract keys from a obj.
   * 
   * @param keys The keys you want to extract from the object.
   */
  extract<T, K extends keyof T>(keys: ...K[]): { (obj: T): { [key: K]: T[K] } }
  /**
   * Transform any object or array however you want.
   * 
   * @param transformer How you want to transform the object.
   */
  transform<T, K extends keyof T, R>(transformer: (value: T[K], key: K, obj: T) => R): (obj: T) => { [K]: R }
  /**
   * Calls a function named like key on the object with the args specified.
   */
  call<K extends keyof O, O, R>(key: K, args: ...any[]): (obj: O) => R
}

export = F
