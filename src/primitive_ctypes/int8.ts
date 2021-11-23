import {CType} from "../interfaces/CType";
import {patchAlloc} from "../util/patchAlloc";

export const int8: CType<number> = patchAlloc({
    readBE(buf: ArrayBuffer, offset: number = 0): number {
        return new DataView(buf).getInt8(offset);
    },
    readLE(buf: ArrayBuffer, offset: number = 0): number {
        return new DataView(buf).getInt8(offset);
    },
    writeBE(data: number, buf: ArrayBuffer, offset: number = 0): void {
        new DataView(buf).setInt8(offset, data);
    },
    writeLE(data: number, buf: ArrayBuffer, offset: number = 0): void {
        new DataView(buf).setInt8(offset, data);
    },
    size: 1
});
