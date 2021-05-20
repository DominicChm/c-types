import {CType} from "../interfaces/CType";
import {patchAlloc} from "../util/patchAlloc";

export const uint32: CType<number> = patchAlloc({
    readBE(buf: Buffer, offset: number = 0): number {
        return buf.readUInt32BE(offset);
    },
    readLE(buf: Buffer, offset: number = 0): number {
        return buf.readUInt32LE(offset);
    },
    writeBE(data: number, buf: Buffer, offset: number = 0): void {
        buf.writeUInt32BE(data, offset);
    },
    writeLE(data: number, buf: Buffer, offset: number = 0): void {
        buf.writeUInt32LE(data, offset);
    },
    size: 4
})
