import {c_string, uint16, uint32, c_struct} from "../index"

describe("c_struct", () => {
    it("encodes LE correctly", () => {
        const struct = c_struct([
            {
                name: "u16_test",
                type: uint16,
            },
            {
                name: "u32_test",
                type: uint32
            }
        ])

        const test_data = {
            u32_test: 1,
            u16_test: 2,
        }

        let expected = Buffer.from([0x02, 0x00, 0x01, 0x00, 0x00, 0x00]);
        let actual = Buffer.alloc(struct.size);

        struct.writeLE(test_data, actual);

        expect(actual).toEqual(expected);
    });

    it("encodes BE correctly", () => {
        const struct = c_struct([
            {
                name: "u16_test",
                type: uint16,
            },
            {
                name: "u32_test",
                type: uint32
            }
        ])

        const test_data = {
            u32_test: 1,
            u16_test: 2,
        }

        let expected = Buffer.from([0x00, 0x02, 0x00, 0x00, 0x00, 0x01]);
        let actual = Buffer.alloc(struct.size);

        struct.writeBE(test_data, actual);

        expect(actual).toEqual(expected);
    });

    it("encodes, then decodes", () => {
        const struct = c_struct([
            {
                name: "u16_test",
                type: uint16,
            },
            {
                name: "u32_test",
                type: uint32
            }
        ])

        const test_data = {
            u32_test: 1,
            u16_test: 2,
        }

        let buf = Buffer.alloc(struct.size);

        struct.writeBE(test_data, buf);

        expect(struct.readBE(buf)).toEqual(test_data);
    });
})
