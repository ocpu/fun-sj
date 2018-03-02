declare var random: {
  randomFloat(start: number, end: number): number
  randomFloat(end: number): number
  randomInt(start: number, end: number): number
  randomInt(end: number): number
  range(start: number, end: number): Iterator<number>
  range(end: number): Iterator<number>
  chain<T,R1,R2,R3,R4,R5,R6>(value: T, fn: (value: T) => R1|Promise<R1>, fn1: (value: R1) => R2|Promise<R2>, fn2: (value: R2) => R3|Promise<R3>, fn3: (value: R3) => R4|Promise<R4>, fn4: (value: R4) => R5|Promise<R5>, fn5: (value: R5) => R6|Promise<R6>): Promise<R6>
  chain<T,R1,R2,R3,R4,R5>(value: T, fn: (value: T) => R1|Promise<R1>, fn1: (value: R1) => R2|Promise<R2>, fn2: (value: R2) => R3|Promise<R3>, fn3: (value: R3) => R4|Promise<R4>, fn4: (value: R4) => R5|Promise<R5>): Promise<R5>
  chain<T,R1,R2,R3,R4>(value: T, fn: (value: T) => R1|Promise<R1>, fn1: (value: R1) => R2|Promise<R2>, fn2: (value: R2) => R3|Promise<R3>, fn3: (value: R3) => R4|Promise<R4>): Promise<R4>
  chain<T,R1,R2,R3>(value: T, fn: (value: T) => R1|Promise<R1>, fn1: (value: R1) => R2|Promise<R2>, fn2: (value: R2) => R3|Promise<R3>): Promise<R3>
  chain<T,R1,R2>(value: T, fn: (value: T) => R1|Promise<R1>, fn1: (value: R1) => R2|Promise<R2>): Promise<R2>
  chain<T,R>(value: T, fn: (value: T) => R|Promise<R>): Promise<R>
  pick<T extends {}, K extends keyof T>(key: K): (obj: T) => T[K]
  pick<T extends {}, K extends keyof T>(key: K, obj: T): T[K]
  test<T, R>(test: () => T, failure?: (e: Error) => R): T | R
  defaults<A, D>(actual: A, defaults: D)
  defaults<A, D, R>(actual: A, defaults: D, fn: (opts: A & D) => R): R
}

export = random
