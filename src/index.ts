/**
 * A handle around a Promise, so it may be resolved or
 * rejected from outside the Promise constructor.
 */
export class Deferred<T = unknown> {

  /**
   * Resolve the promise
   */
  resolve!: (v: T) => void

  /**
   * Reject the promise
   */
  reject!: (er: any) => void

  /**
   * The promise that gets resolved or rejected
   */
  promise: Promise<T> = new Promise((res, rej) => {
    this.resolve = res
    this.reject = rej
  })

  /**
   * static reference to the class, so that
   * require('trivial-deferred').Deferred works
   */
  static get Deferred() {
    return Deferred
  }
}

export default Deferred
