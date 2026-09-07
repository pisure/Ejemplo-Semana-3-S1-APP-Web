import {validateUuid} from "./uuid.js";

export class purchaseOrderId {
    #valie;

    constructor(val) {
        if (!validateUuid(value)) {
            throw new Error(`Invalid Purchase Order ID: ${value}. Must be a valida UUID.`);
        }
        this.#value = value;

    }
}