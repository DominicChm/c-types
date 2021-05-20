import {cString} from "../src"
import {testAlloc} from "./testAlloc";

describe("c_string", () => {
    it("truncates strings longer than can fit", () => {
        let cstr = cString(5);
        let buf = Buffer.from("test_test_test_test");

        expect(cstr.readLE(buf)).toBe("test_");
    });

    it("it fits strings correctly than can fit", () => {
        let cstr = cString(10);
        let buf = Buffer.from("test");

        expect(cstr.readLE(buf)).toBe("test");
    });

    it("encodes, then decodes", () => {
        let cstr = cString(10);
        let buf = Buffer.alloc(11);

        cstr.writeLE("test123", buf);
        expect(cstr.readLE(buf)).toBe("test123");

        cstr.writeBE("test123", buf);
        expect(cstr.readBE(buf)).toBe("test123");
    });

    it("allocates", () => {
        let cstr = cString(10);
        let str = "test_str"

        testAlloc(str, cstr);
    });
})

