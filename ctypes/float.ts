import {ICType} from "../interfaces/ICType";

export const float: ICType = {
    readBE(buf: Buffer, offset: number): number {
        return buf.readFloatBE(offset);
    },
    readLE(buf: Buffer, offset: number): number {
        return buf.readFloatLE(offset);
    },
    writeBE(data: number, buf: Buffer, offset: number): void {
        buf.writeFloatBE(data, offset);
    },
    writeLE(data: number, buf: Buffer, offset: number): void {
        buf.writeFloatLE(data, offset);
    },
    size: 4
}
