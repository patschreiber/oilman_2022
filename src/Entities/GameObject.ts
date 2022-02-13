import * as uuid from 'uuid';
import { Coordinate } from "../types/Coordinate";

export class GameObject implements GameObject {

  private uuid: string;
  private position: Coordinate;

  /**
   * @constructor
   * @param position Coordinate The initial position of the GameObject.
   */
  constructor(position: Coordinate = [0,0]) {
    this.uuid = this.generateUuid();
    this.position = position;
  }

  public getPosition(): Coordinate {
    return this.position;
  }

  public getUuid(): string {
    return this.uuid;
  }

  /**
   * Generates a UUID for the Game Object.
   *
   * @returns {string} The UUID of the Game Object.
   */
  private generateUuid(): string {
    return uuid.v4();
  }
}
