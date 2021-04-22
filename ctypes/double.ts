import {ICType} from "../interfaces/ICType";

export const double: ICType = {
    readBE(buf: Buffer, offset: number): number {
        return buf.readDoubleBE(offset);
    },
    readLE(buf: Buffer, offset: number): number {
        return buf.readDoubleLE(offset);
    },
    writeBE(data: number, buf: Buffer, offset: number): void {
        buf.writeDoubleBE(data, offset);
    },
    writeLE(data: number, buf: Buffer, offset: number): void {
        buf.writeDoubleLE(data, offset);
    },
    size: 8
}
