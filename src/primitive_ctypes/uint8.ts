import {CType} from "../interfaces/CType";

export const uint8: CType<number> = {
    readBE(buf: Buffer, offset: number = 0): number {
        return buf.readUInt8(offset);
    },
    readLE(buf: Buffer, offset: number = 0): number {
        return buf.readUInt8(offset);
    },
    writeBE(data: number, buf: Buffer, offset: number = 0): void {
        buf.writeUInt8(data, offset);
    },
    writeLE(data: number, buf: Buffer, offset: number = 0): void {
        buf.writeUInt8(data, offset);
    },
    size: 1
}
