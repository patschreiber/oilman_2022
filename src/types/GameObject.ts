import { Coordinate } from "../types/Coordinate"

/**
 * @type {GameObject} The base type for all objects in the game world.
 */
export interface GameObject {

  /**
   * @type {string} The UUID of the Game Object.
   */
  uuid: string;

  /**
   * @type {Coordinate} The position of the Game Object.
   */
  position: Coordinate;

  /**
   * The UUID of the Game Object.
   */
  getUuid(): string;

  /**
   * The x/y position of the Game Object.
   */
  getPosition(): Coordinate;
}
