import {ICType} from "../interfaces/ICType";

export const uint16: ICType<number> = {
    readBE(buf: Buffer, offset: number = 0): number {
        return buf.readUInt16BE(offset);
    },
    readLE(buf: Buffer, offset: number = 0): number {
        return buf.readUInt16LE(offset);
    },
    writeBE(data: number, buf: Buffer, offset: number = 0): void {
        buf.writeUInt16BE(data, offset);
    },
    writeLE(data: any, buf: Buffer, offset: number = 0): void {
        buf.writeUInt16LE(data, offset);
    },
    size: 2
}