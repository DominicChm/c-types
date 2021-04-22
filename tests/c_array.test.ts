import {c_array, uint8, uint32} from "../index"

describe("c_array uint8", () => {
    test("basic", () => {
        let carr = c_array(uint8, 5);
        let buf = Buffer.alloc(5);
        let data = [1, 2, 3, 4, 5];

        carr.writeBE(data, buf);
        expect(buf.equals(Buffer.from(data))).toBeTruthy();

        carr.writeLE(data, buf);
        expect(buf.equals(Buffer.from(data))).toBeTruthy();
    })

    test("short data write", () => {
        let carr = c_array(uint8, 5);
        let buf = Buffer.alloc(5);
        let data = [1, 2, 3];

        expect(() => carr.writeBE(data, buf)).toThrow();
        expect(() => carr.writeLE(data, buf)).toThrow();
    })

    it("encodes and decodes", () => {
        let carr = c_array(uint8, 5);
        let buf = Buffer.alloc(5);
        let data = [1, 2, 3, 5, 10];

        carr.writeLE(data, buf)
        expect(carr.readLE(buf)).toEqual(data)

        carr.writeBE(data, buf)
        expect(carr.readBE(buf)).toEqual(data)
    })
})

describe("c_array uint32", () => {
    it("encodes and decodes", () => {
        let carr = c_array(uint32, 5);
        let buf = Buffer.alloc(4 * 5);
        let data = [0, 2, 420420, 5, 4294967293];

        carr.writeLE(data, buf)
        expect(carr.readLE(buf)).toEqual(data)

        carr.writeBE(data, buf)
        expect(carr.readBE(buf)).toEqual(data)
    })
})
