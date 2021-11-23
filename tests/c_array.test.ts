import {cArray, number_types, CType} from "../src"
import {testAlloc} from "./testAlloc";

describe.each(Object.values(number_types))("c_array", (c_type: CType<number>) => {
    test("short data write", () => {
        let carr = cArray(c_type, 5);
        let buf = Buffer.alloc(c_type.size * 5).buffer;
        let data = [1, 69, 81];

        expect(() => carr.writeBE(data, buf)).toThrow();
        expect(() => carr.writeLE(data, buf)).toThrow();
    })

    it("encodes and decodes", () => {
        let carr = cArray(c_type, 5);
        let buf = Buffer.alloc(c_type.size * 5).buffer;
        let data = [1, 69, 81, 90, 0];

        carr.writeLE(data, buf)
        expect(carr.readLE(buf)).toEqual(data)

        carr.writeBE(data, buf)
        expect(carr.readBE(buf)).toEqual(data)
    })

    it("allocates", () => {
        let data = [1, 69, 81, 90, 0];
        let carr = cArray(c_type, 5);
        testAlloc(data, carr);
    })
})
