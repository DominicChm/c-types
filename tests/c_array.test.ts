import {c_array, number_types, ICType} from "../src"

describe.each(Object.values(number_types))("c_array", (c_type: ICType<number>) => {
    test("short data write", () => {
        let carr = c_array(c_type, 5);
        let buf = Buffer.alloc(c_type.size * 5);
        let data = [1, 69, 81];

        expect(() => carr.writeBE(data, buf)).toThrow();
        expect(() => carr.writeLE(data, buf)).toThrow();
    })

    it("encodes and decodes", () => {
        let carr = c_array(c_type, 5);
        let buf = Buffer.alloc(c_type.size * 5);
        let data = [1, 69, 81, 90, 0];

        carr.writeLE(data, buf)
        expect(carr.readLE(buf)).toEqual(data)

        carr.writeBE(data, buf)
        expect(carr.readBE(buf)).toEqual(data)
    })
})
