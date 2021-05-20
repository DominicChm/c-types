import {CType} from "../interfaces/CType";
import {strlen} from "../util/strlen";
import {patchAlloc} from "../util/patchAlloc";

export function cString(length: number): CType<string> {
    const size = length;

    return patchAlloc({
        readBE(buf: Buffer, offset: number = 0): string {
            const s_len = strlen(buf, offset, length);
            return buf.toString("ascii", offset, offset + s_len);
        },
        readLE(buf: Buffer, offset: number = 0): string {
            const s_len = strlen(buf, offset, length);
            return buf.toString("ascii", offset, offset + s_len);
        },
        writeBE(data: string, buf: Buffer, offset: number = 0): void {
            buf.write(data, offset, size, "ascii");

            // Ensure that the last string value is a null terminator.
            buf.writeUInt8(0x00, offset + size - 1);

        },
        writeLE(data: string, buf: Buffer, offset: number = 0): void {
            buf.write(data, offset, size, "ascii");

            // Ensure that the last string value is a null terminator.
            buf.writeUInt8(0x00, offset + size - 1);
        },
        size
    });
}
