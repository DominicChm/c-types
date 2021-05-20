import {CType} from "../interfaces/CType";
import {CTypeEndian} from "../interfaces/CTypeEndian";

/** Helper function that isolates either the big-endian or little-endian r/w functions of a type. Useful as a pre-step
 * for generalized fns that handle both big and little-endian inputs.
 * */
export function end<T>(c_type: CType<T>, endian: "little" | "big" = "little"): CTypeEndian<T> {
    switch (endian) {
        case "little":
            return {
                read: c_type.readLE,
                write: c_type.writeLE,
                size: c_type.size,
                alloc: c_type.allocLE,
            };
        case "big":
            return {
                read: c_type.readBE,
                write: c_type.writeBE,
                size: c_type.size,
                alloc: c_type.allocBE,
            };
    }
}
