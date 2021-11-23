import {CType} from "../interfaces/CType";
import {strlen} from "../util/strlen";
import {patchAlloc} from "../util/patchAlloc";
import {isNode} from "browser-or-node";

// Provide TextDecoder/TextEncoder to node. (A lil ugly but it works /shrug)
if (isNode) {
    global.TextDecoder = require("util").TextDecoder;
    global.TextEncoder = require("util").TextEncoder;
}

export function cString(length: number): CType<string> {
    const size = length;

    return patchAlloc({
        readBE(buf: ArrayBuffer, offset: number = 0): string {
            const s_len = strlen(buf, offset, length);
            const t = new TextDecoder("ascii");
            return t.decode(buf.slice(offset, offset+s_len));
        },
        readLE(buf: ArrayBuffer, offset: number = 0): string {
            const s_len = strlen(buf, offset, length);
            const t = new TextDecoder("ascii");
            return t.decode(buf.slice(offset, offset+s_len));
        },
        writeBE(data: string, buf: ArrayBuffer, offset: number = 0): void {
            const enc = new TextEncoder();
            enc.encodeInto(data, new Uint8Array(buf).subarray(offset))
        },
        writeLE(data: string, buf: ArrayBuffer, offset: number = 0): void {
            const enc = new TextEncoder();
            enc.encodeInto(data, new Uint8Array(buf).subarray(offset))
        },
        size
    });
}
