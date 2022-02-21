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
        new DataView(buf).setUint8(offset, Number(data));
    },
    writeLE(data: boolean, buf: ArrayBuffer, offset: number = 0): void {
        new DataView(buf).setUint8(offset, Number(data));
    },
    size: 1
});

