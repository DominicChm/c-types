import {CType} from "../interfaces/CType";

export function allocLE<T>(this: CType<T>, data: T): Buffer {
    const buf = Buffer.alloc(this.size);
    this.writeLE(data, buf);
    return buf;
}

export function allocBE<T>(this: CType<T>, data: T): Buffer {
    const buf = Buffer.alloc(this.size);
    this.writeBE(data, buf);
    return buf;
}
