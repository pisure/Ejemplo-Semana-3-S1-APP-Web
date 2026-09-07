export class Currency {
    static #VALID_CODES = ['USD', 'EUR', 'GBP', 'JPY'];
    #code;

    constructor(code) {
        if (!Currency.#VALID_CODES.includes(code)) {
            throw new ReferenceError(`Invalid code: ${code}. Must be one of: ${Currency.#VALID_CODES.join(', ')}`);
        }
        this.code = code;
        Object.freeze(this);
    }
    get code() {
        return this.code;
    }
}