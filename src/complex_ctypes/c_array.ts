import {CType} from "../interfaces/CType";
import {patchAlloc} from "../util/patchAlloc";

export function c_array<T>(type: CType<T>, length: number): CType<T[]> {
    return patchAlloc({
        size: type.size * length,
        readBE(buf: Buffer, offset: number = 0): T[] {
            const result = [];
            for (let i = 0; i < length; i++) {
                const iOffset = offset + i * type.size;
                result.push(type.readBE(buf, iOffset));
            }
            return result;
        },
        readLE(buf: Buffer, offset: number = 0): T[] {
            const result = [];
            for (let i = 0; i < length; i++) {
                const iOffset = offset + i * type.size;
                result.push(type.readLE(buf, iOffset));
            }
            return result;
        },
        writeBE(data: T[], buf: Buffer, offset: number = 0): void {
            if (data.length < length) throw new RangeError(`Passed data array was too short! Expected ${length} elements, got ${data.length}`);

            for (let i = 0; i < length; i++) {
                const iOffset = offset + i * type.size;
                type.writeBE(data[i], buf, iOffset);
            }
        },
        writeLE(data: T[], buf: Buffer, offset: number = 0): void {
            if (data.length < length) throw new RangeError(`Passed data array was too short! Expected ${length} elements, got ${data.length}`);

            for (let i = 0; i < length; i++) {
                const iOffset = offset + i * type.size;
                type.writeLE(data[i], buf, iOffset);
            }
        }
    });
}
