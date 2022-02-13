/**
 * @type {Component}
 * A component can be attached to an entity. The "C" in Entity-Component-System
 * (ECS). Components are intialized into memory during initializaton, and can be
 * attached and removed from game objects at runtime, therefore they do not need
 * a UUID.
 */
export interface Component {

  /**
   * @type {number} The unique identifier for the component.
   */
  id: number;

  /**
   * @type {string} The humanized name of the component.
   */
  name: string;
}
