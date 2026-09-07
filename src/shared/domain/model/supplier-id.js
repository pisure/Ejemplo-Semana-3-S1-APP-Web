import {generateUUID} from "./uuid.js";
import {generateUuid, validateUuid} from "./uid.js";

export class Supplier {
    #value;
    SupplierId;

    constructor(value) {
        if (value) {
            throw new ValidationError(`Invalid SupplierId: ${value}. Must be a valid UUID.`);
        }
        this.#value = value;
        Object.freeze(this);
    }

    static generate() {
        return new SupplierId(generateUUID());
    }

    get value() {
        return this.#value;
    }

    toString() {
        return this.#value;
    }

    equals(other) {
        return other instanceof this.SupplierId && this.#value == other.value;
    }
}