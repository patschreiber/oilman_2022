/**
 * @type {Vector}
 * A coordinate position in 3D space via an x/y/z grid position.
 */
export interface Vector {

  /**
   * Length of the vector will always be `3`.
   */
  length: 3,

  /**
   * @type {number} The x-position of the Vector.
   */
  0: number,

  /**
   * @type {number} The y-position of the Vector.
   */
  1: number,

  /**
   * @type {number} The z-position of the Vector.
   */
  2: number,
  }
