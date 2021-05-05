import {ICType} from "../interfaces/ICType";

export const int16: ICType<number> = {
    readBE(buf: Buffer, offset: number = 0): number {
        return buf.readInt16BE(offset);
    },
    readLE(buf: Buffer, offset: number = 0): number {
        return buf.readInt16LE(offset);
    },
    writeBE(data: number, buf: Buffer, offset: number = 0): void {
        buf.writeInt16BE(data, offset);
    },
    writeLE(data: number, buf: Buffer, offset: number = 0): void {
        buf.writeInt16LE(data, offset);
    },
    size: 2
}
