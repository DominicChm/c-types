import {ICType} from "./ICType";

export type UnknownDict = { [key: string]: unknown }

interface IStructMember<MemberName extends string, JsType> {
    type: ICType<JsType>
    name: MemberName,
}

//Maps an object in form of
export type IStructMembers<S extends UnknownDict> = IStructMember<Extract<keyof S, string>, S[keyof S]>[]


