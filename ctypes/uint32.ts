import {ICType} from "../interfaces/ICType";

export const uint32: ICType = {
    readBE(buf: Buffer, offset: number): number {
        return buf.readUInt32BE(offset);
    },
    readLE(buf: Buffer, offset: number): number {
        return buf.readUInt32LE(offset);
    },
    writeBE(data: number, buf: Buffer, offset: number): void {
        buf.writeUInt32BE(data, offset);
    },
    writeLE(data: number, buf: Buffer, offset: number): void {
        buf.writeUInt32LE(data, offset);
    },
    size: 4
}
