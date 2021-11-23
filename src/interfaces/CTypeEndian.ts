export interface CTypeEndian<T> {
    size: number;

    read(buf: ArrayBuffer, offset?: number): T;

    write(data: T, buf: ArrayBuffer, offset?: number): void;

    alloc(data: T): ArrayBuffer;
}
