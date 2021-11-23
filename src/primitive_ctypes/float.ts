import {CType} from "../interfaces/CType";
import {patchAlloc} from "../util/patchAlloc";

export const float: CType<number> = patchAlloc({
    readBE(buf: ArrayBuffer, offset: number = 0): number {
        return new DataView(buf).getFloat32(offset, false);
    },
    readLE(buf: ArrayBuffer, offset: number = 0): number {
        return new DataView(buf).getFloat32(offset, true);
    },
    writeBE(data: number, buf: ArrayBuffer, offset: number = 0): void {
        new DataView(buf).setFloat32(offset, data, false);
    },
    writeLE(data: number, buf: ArrayBuffer, offset: number = 0): void {
        new DataView(buf).setFloat32(offset, data, true);
    },
    size: 4
});
