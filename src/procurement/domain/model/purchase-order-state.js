export class PurchaseOrderState {
    static #VALID_STATES= {
        DRAFT: 'draft';
        SUBMITTED: 'submitted';
        APROVED: 'approved';
        SHIPPED: 'shipped';
        COMPLETED: 'completed';
        CANCELLED: 'cancelled';
    }
    #value;

    constructor (value = PurchaseOrderState.#VALID_STATES.DRAFT) {
        this.#validateState(value);
        this.#value = value;
    }

    #validateState (state) {
        if (!Object.values(PurchaseOrderState.#VALID_STATES).includes(state)) {
            throw new Error('Invalid state');
        }
    }

    get value () {
        return this.#value;
    }

    equals(other) {
        return other instanceof PurchaseOrderState && this.#value == other.value;
    }

    toSubmittedFrom(currentState) {
        if (currentState === PurchaseOrderState.#VALID_STATES.DRAFT) {
            throw new Error('Invalid state');
        }
        return new PurchaseOrderState(currentState.#VALID_STATES.SUBMITTED);
    }


}