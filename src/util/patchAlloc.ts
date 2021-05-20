import {CType} from "../interfaces/CType";
import {CTypeBase} from "../interfaces/CTypeBase";
import {allocBE, allocLE} from "./alloc";

/**
 * Adds allocation functions to the ctype.
 */
export function patchAlloc<T>(cTypeBase: CTypeBase<T>): CType<T> {
    const cType = cTypeBase as CType<T>;
    cType.allocLE = allocLE.bind(cType);
    cType.allocBE = allocBE.bind(cType);

    return cType;
}
