/**
 * @type {Coordinate}
 * A tuple representing an x/y grid position.
 */
export interface Coordinate {

  /**
   * Length of the coordinate tuple will always be `2`.
   */
  length: 2

  /**
   * @type {number} The position on the x-axis.
   */
  0: number,

  /**
   * @type {number} The position on the y-axis.
   */
  1: number
}
