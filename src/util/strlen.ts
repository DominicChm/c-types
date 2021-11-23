/**
 * Calculates the length of a string at an offset (inclusive) in a buffer.
 * @param buf
 * @param offset
 * @param max_len
 */
export function strlen(buf: ArrayBuffer, offset: number, max_len: number): number {
    const u8 = new Uint8Array(buf);
    const index = u8.slice(offset, offset + max_len).indexOf(0x00)
    return index > 0 ? index : max_len;
}
