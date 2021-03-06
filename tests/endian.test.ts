import {end, uint32} from "../src";

describe("end type modifier", () => {
    it("encodes LE", () => {
        const uint32le = end(uint32, "little");
        const buf = Buffer.alloc(4).buffer;
        const testNum = 123456;

        uint32le.write(testNum, buf);
        expect(uint32.readLE(buf)).toBe(testNum)
    });

    it("encodes BE", () => {
        const uint32be = end(uint32, "big");
        const buf = Buffer.alloc(4).buffer;
        const testNum = 123456;

        uint32be.write(testNum, buf);
        expect(uint32.readBE(buf)).toBe(testNum)
    });

    it("decodes LE", () => {
        const uint32le = end(uint32, "little");
        const buf = Buffer.alloc(4).buffer;
        const testNum = 123456;

        uint32.writeLE(testNum, buf)
        expect(uint32le.read(buf)).toBe(testNum)
    });

    it("decodes BE", () => {
        const uint32be = end(uint32, "big");
        const buf = Buffer.alloc(4).buffer;
        const testNum = 123456;

        uint32.writeBE(testNum, buf);
        expect(uint32be.read(buf)).toBe(testNum)
    });

    it("defaults to LE", () => {
        const uint32le = end(uint32);
        const buf = Buffer.alloc(4).buffer;
        const testNum = 123456;

        uint32le.write(testNum, buf);
        expect(uint32.readLE(buf)).toBe(testNum)
    });

    it("allocates", () => {
        const u32le = end(uint32, "little");
        const u32be = end(uint32, "little");

        const data = 0x12345678;

        expect(u32le.read(u32le.alloc(data))).toBe(data)
        expect(u32be.read(u32be.alloc(data))).toBe(data)
    });
});
