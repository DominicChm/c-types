import {CType} from "../interfaces/CType";

export const double: CType<number> = {
    readBE(buf: Buffer, offset: number = 0): number {
        return buf.readDoubleBE(offset);
    },
    readLE(buf: Buffer, offset: number = 0): number {
        return buf.readDoubleLE(offset);
    },
    writeBE(data: number, buf: Buffer, offset: number = 0): void {
        buf.writeDoubleBE(data, offset);
    },
    writeLE(data: number, buf: Buffer, offset: number = 0): void {
        buf.writeDoubleLE(data, offset);
    },
    size: 8
}
