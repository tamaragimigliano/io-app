import { isSome } from "fp-ts/lib/Option";
import { CreditCardDetector } from "../creditCard";

describe("Validates CC Number", () => {
    /*
    Test Table structure for nested describe.each. 
    Please note that in our case expected result is simply a string.

    [
        [
            "test category n.1", 
            [
                ["test name n. 1.1", {expected results n. 1.1}]
                ["test name n. 1.2", {expected results n. 1.2}]
                ...
            ]
            
        ],
        [
            "test category n.2", 
            [
                ["test name n. 2.1", {expected results n. 2.1}]
                ["test name n. 2.2", {expected results n. 2.2}]
                ...
            ]
            
        ],
    ]
    
    */

    const testTable: Array<[string, Array<[string, string]>]> = [
        ["Normal Success Cases", // At least one test case for card brand
            [
                ["4012888888881881", "visa"],
                ["62123456789002", "unionPay"],
                ["621234567890003", "unionPay"], //different length
                ["5555555555554444", "mastercard"],
                ["5000000000000611", "maestro"],
                ["6011000990139424", "discover"],
                ["378282246310005", "amex"],
                ["3530111333300000", "jcb"],
            ]
        ]
    ];
    describe.each(testTable)(
        "Tests for category %s",
        (description, tests) => {
            describe.each(tests)(
                `Testing brand detection on card number %p, category ${description} `,
                (cardNumber, brandExpected) => { 
                    const brandComputed = CreditCardDetector.getInfo(cardNumber);
                    it(`Brand should be ${brandExpected}`, () => { 
                        //Do the test
                        expect(isSome(brandComputed)).toBeTruthy();
                        if (isSome(brandComputed)) {
                            expect(brandComputed.value).toEqual(brandExpected);
                        }
                    });
                }
            );
        }
    );

});