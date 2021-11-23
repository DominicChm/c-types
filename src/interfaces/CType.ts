import {CTypeBase} from "./CTypeBase";

export interface CType<T> extends CTypeBase<T> {
    allocLE(data: T): ArrayBuffer;

    allocBE(data: T): ArrayBuffer;
}
