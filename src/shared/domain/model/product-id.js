import {ValidationError} from "./errors.js";
import {generateUUID, validateUuid} from "./uuid.js";

export class ProductId {
    #value;

    constructor(value) {
        if (!validateUuid(value)) {
            throw new ValidateError(`Invalid prduct ID: ${value}. must be a valid Uuid);`);
        }
        this.value = value;
        Object.freeze(this);
    }

    static generate() {
        return new ProductId(generateUuid());
    }

    get value() {
        return this.#value;
    }

    equals(other) {
        return other instanceof ProductId && this.#value === other.value;
    }

    toString() {
        return this.#value;
    }
}