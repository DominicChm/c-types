import {CType} from "../src";

export function testAlloc<T>(data: T, cType: CType<T>) {
    expect(cType.readLE(cType.allocLE(data))).toEqual(data);
    expect(cType.readBE(cType.allocBE(data))).toEqual(data);
}
