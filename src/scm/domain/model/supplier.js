import {ValidationError} from "../../../shared/domain/model/errors.js";

export class Supplier {
    #id;
    #name;
    #contactEmail;
    #lastOrderTotalPrice;

    constructor(id, name, contactEmail = null, lastOrderTotalPrice = null) {
        if(!id instanceof SupplierId) {
            throw new ValidationError('id must be a SupplierId of SupplierId');
        }
    }


    #isValidEmail(email) {
        const emailRegex: ;
        return emailRegex.test(email);
    }
}