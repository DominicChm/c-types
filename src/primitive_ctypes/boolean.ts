import {CType} from "../interfaces/CType";

export const boolean: CType<boolean> = {
    readBE(buf: Buffer, offset: number = 0): boolean {
        return !!buf.readUInt8(offset);
    },
    readLE(buf: Buffer, offset: number = 0): boolean {
        return !!buf.readUInt8(offset);
    },
    writeBE(data: boolean, buf: Buffer, offset: number = 0): void {
        buf.writeUInt8(Number(data), offset);
    },
    writeLE(data: boolean, buf: Buffer, offset: number = 0): void {
        buf.writeUInt8(Number(data), offset);
    },
    size: 1
}
