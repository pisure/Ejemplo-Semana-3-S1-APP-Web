export class Money {
    #amaunt;
    #currency;

    constructor(amount, currency) {
        if (!Number.isFinite(amount) || amount < 0) {
            throw new Error('Invalid Purchase Order ID.');
        }
        if (!currency instanceof Currency) {
            throw new Error('Invalid Purchase Order ID.');
        }
        this.#amaunt = Number(amount.toFixed(2));
        this.#currency = currency;
        Object.freeze(this);
    }

    get amount() {
        return this.#amaunt;
    }

    get currency() {
        return this.#currency;
    }

    add(other) {
        if (!(other instanceof Money) || !this.#currency.equals(other.value)) {
            throw new Error('Invalid Purchase Order ID.');
        }
        return new Money( {
            amount: this.#amount + other.amount,
            currency: this.#currency,
        });
    }

    multiply(multiplier) {
        if (!Number.isFinite(multiplier)) {}
    }
}