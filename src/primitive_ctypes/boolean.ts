import {CType} from "../interfaces/CType";
import {patchAlloc} from "../util/patchAlloc";

export const boolean: CType<boolean> = patchAlloc({
    readBE(buf: ArrayBuffer, offset: number = 0): boolean {
        return !!new DataView(buf).getUint8(offset);
    },
    readLE(buf: ArrayBuffer, offset: number = 0): boolean {
        return !!new DataView(buf).getUint8(offset);
    },
    writeBE(data: boolean, buf: ArrayBuffer, offset: number = 0): void {
        new DataView(buf).setUint8(Number(data), offset);
    },
    writeLE(data: boolean, buf: ArrayBuffer, offset: number = 0): void {
        new DataView(buf).setUint8(Number(data), offset);
    },
    size: 1
});

