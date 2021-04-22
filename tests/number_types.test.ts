import {number_types} from "../index";

import each from "jest-each";
import {ICType} from "../interfaces/ICType";

describe("number types", () => {
    each(Object.values(number_types)).it("encodes and decodes simple vals", (c_type: ICType) => {
        let buf = Buffer.alloc(8);
        let test_num = 69;

        c_type.writeBE(69, buf);
        expect(c_type.readBE(buf)).toBe(test_num);

        c_type.writeLE(69, buf);
        expect(c_type.readLE(buf)).toBe(test_num);
    })
})
