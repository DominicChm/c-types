import {CType} from "../interfaces/CType";
import {patchAlloc} from "../util/patchAlloc";

export const int8: CType<number> = patchAlloc({
    readBE(buf: Buffer, offset: number = 0): number {
        return buf.readInt8(offset);
    },
    readLE(buf: Buffer, offset: number = 0): number {
        return buf.readInt8(offset);
    },
    writeBE(data: number, buf: Buffer, offset: number = 0): void {
        buf.writeInt8(data, offset);
    },
    writeLE(data: number, buf: Buffer, offset: number = 0): void {
        buf.writeInt8(data, offset);
    },
    size: 1
});
