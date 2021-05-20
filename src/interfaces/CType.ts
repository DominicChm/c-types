export interface CType<T> {
    size: number;

    readLE(buf: Buffer, offset?: number): T;

    readBE(buf: Buffer, offset?: number): T;

    writeLE(data: T, buf: Buffer, offset?: number): void;

    writeBE(data: T, buf: Buffer, offset?: number): void;
}
