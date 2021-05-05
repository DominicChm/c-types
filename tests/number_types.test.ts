import {number_types} from "../src";
import {ICType} from "../src";

describe.each(Object.values(number_types))("number types", (c_type: ICType<number>) => {
    it("encodes and decodes simple vals", () => {
        let buf = Buffer.alloc(8);
        let test_num = 69;

        c_type.writeBE(69, buf);
        expect(c_type.readBE(buf)).toBe(test_num);

        c_type.writeLE(69, buf);
        expect(c_type.readLE(buf)).toBe(test_num);
    })
})
