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

  public getPosition() {
    return this.position;
  }

  public getUuid() {
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

  /**
   * Validates the UUID of the Game Object.
   *
   * @returns {boolean} If the UUID was valid.
   */
  // private validateUuid(): boolean {
  //   return (uuid.validate(this.uuid));
  // }

}
