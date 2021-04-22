import {ICType} from "../interfaces/ICType";

export const int32: ICType = {
    readBE(buf: Buffer, offset: number): number {
        return buf.readInt32BE(offset);
    },
    readLE(buf: Buffer, offset: number): number {
        return buf.readInt32LE(offset);
    },
    writeBE(data: number, buf: Buffer, offset: number): void {
        buf.writeInt32BE(data, offset);
    },
    writeLE(data: number, buf: Buffer, offset: number): void {
        buf.writeInt32LE(data, offset);
    },
    size: 4
}
