"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameObject = void 0;
const uuid = require("uuid");
class GameObject {
    constructor(position = [0, 0]) {
        this.uuid = this.generateUuid();
        this.position = position;
    }
    getPosition() {
        return this.position;
    }
    getUuid() {
        return this.uuid;
    }
    generateUuid() {
        return uuid.v4();
    }
}
exports.GameObject = GameObject;
