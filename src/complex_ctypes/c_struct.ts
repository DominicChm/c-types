import {CType} from "../interfaces/CType";
import {StructMembers} from "../interfaces/StructMembers";
import {patchAlloc} from "../util/patchAlloc";

export function cStruct<S extends Record<string, any>>(members: StructMembers<S>): CType<S> {

    return patchAlloc({
        // Adds sizes of input members.
        size: Object.values<CType<any>>(members).reduce((acc, member) => acc + member.size, 0),

        readBE(buf: ArrayBuffer, offset: number = 0): S {
            const values: any = {};
            let pos = offset;

            for (const k in members) {
                values[k] = members[k].readBE(buf, pos);
                pos += members[k].size;
            }

            return values as S;
        },
        readLE(buf: ArrayBuffer, offset: number = 0): S {
            const values: any = {};
            let pos = offset;

            for (const k in members) {
                values[k] = members[k].readLE(buf, pos);
                pos += members[k].size;
            }

            return values as S;
        },
        writeBE(data: S, buf: ArrayBuffer, offset: number = 0): void {
            let pos = offset;

            for (let [k, member] of Object.entries<CType<any>>(members)) {
                const dat = data[k];
                if (dat === undefined) throw new Error(`field >${k}< on passed object was undefined!`)

                member.writeBE(dat, buf, pos);
                pos += member.size;
            }
        },
        writeLE(data: S, buf: ArrayBuffer, offset: number = 0): void {
            let pos = offset;

            for (let [k, member] of Object.entries<CType<any>>(members)) {
                const dat = data[k];
                if (dat === undefined) throw new Error(`field >${k}< on passed object was undefined!`)

                member.writeLE(dat, buf, pos);
                pos += member.size;
            }
        }
    })
}
