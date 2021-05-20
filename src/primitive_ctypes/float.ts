import {CType} from "../interfaces/CType";
import {patchAlloc} from "../util/patchAlloc";

export const float: CType<number> = patchAlloc({
    readBE(buf: Buffer, offset: number = 0): number {
        return buf.readFloatBE(offset);
    },
    readLE(buf: Buffer, offset: number = 0): number {
        return buf.readFloatLE(offset);
    },
    writeBE(data: number, buf: Buffer, offset: number = 0): void {
        buf.writeFloatBE(data, offset);
    },
    writeLE(data: number, buf: Buffer, offset: number = 0): void {
        buf.writeFloatLE(data, offset);
    },
    size: 4
});
