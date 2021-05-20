import {CTypeBase} from "./CTypeBase";

export interface CType<T> extends CTypeBase<T> {
    allocLE(data: T): Buffer;

    allocBE(data: T): Buffer;
}
