export interface CTypeBase<T> {
    size: number;

    readLE(buf: ArrayBuffer, offset?: number): T;

    readBE(buf: ArrayBuffer, offset?: number): T;

    writeLE(data: T, buf: ArrayBuffer, offset?: number): void;

    writeBE(data: T, buf: ArrayBuffer, offset?: number): void;
}
