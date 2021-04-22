import {ICType} from "./interfaces/ICType";


export function c_array(type: ICType, length: number): ICType {
    const size = type.size * length;

    return {
        readBE(buf: Buffer, offset: number = 0): any[] {
            const result = [];
            for (let i = 0; i < length; i++) {
                const iOffset = offset + i * type.size;
                result.push(type.readBE(buf, iOffset));
            }
            return result;
        },
        readLE(buf: Buffer, offset: number = 0): any[] {
            const result = [];
            for (let i = 0; i < length; i++) {
                const iOffset = offset + i * type.size;
                result.push(type.readLE(buf, iOffset));
            }
            return result;
        },
        writeBE(data: any[], buf: Buffer, offset: number = 0): void {
            if (data.length < length) throw new RangeError(`Passed data array was too short! Expected ${length} elements, got ${data.length}`);

            for (let i = 0; i < length; i++) {
                const iOffset = offset + i * type.size;
                type.writeBE(data[i], buf, iOffset);
            }
        },
        writeLE(data: any[], buf: Buffer, offset: number = 0): void {
            if (data.length < length) throw new RangeError(`Passed data array was too short! Expected ${length} elements, got ${data.length}`);

            for (let i = 0; i < length; i++) {
                const iOffset = offset + i * type.size;
                type.writeLE(data[i], buf, iOffset);
            }
        },
        size
    }
}
