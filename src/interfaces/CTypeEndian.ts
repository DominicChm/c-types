export interface CTypeEndian<T> {
    size: number;

    read(buf: Buffer, offset?: number): T;

    write(data: T, buf: Buffer, offset?: number): void;
}
