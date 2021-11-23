import {CType} from "../interfaces/CType";
import {patchAlloc} from "../util/patchAlloc";

export const uint16: CType<number> = patchAlloc({
    readBE(buf: ArrayBuffer, offset: number = 0): number {
        return new DataView(buf).getUint16(offset, false);
    },
    readLE(buf: ArrayBuffer, offset: number = 0): number {
        return new DataView(buf).getUint16(offset, true);
    },
    writeBE(data: number, buf: ArrayBuffer, offset: number = 0): void {
        new DataView(buf).setUint16(offset, data, false);
    },
    writeLE(data: number, buf: ArrayBuffer, offset: number = 0): void {
        new DataView(buf).setUint16(offset, data, true);
    },
    size: 2
});
