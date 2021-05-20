import {CType} from "./CType";

//Map every key to a ctype of that type.
export type StructMembers<S> = { [k in keyof S]: CType<S[k]> };
