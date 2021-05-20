import {CType} from "../interfaces/CType";
import {StructMembers} from "../interfaces/StructMembers";
import {ICType} from "../../dist";

export function c_struct<S extends Record<string, any>>(members: StructMembers<S>): CType<S> {

    return {
        // Adds sizes of input members.
        size: Object.values<CType<any>>(members).reduce((acc, member) => acc + member.size, 0),

        readBE(buf: Buffer, offset: number = 0): S {
            const values: any = {};
            let pos = offset;

            for (const k in members) {
                values[k] = members[k].readBE(buf, pos);
                pos += members[k].size;
            }

            return values as S;
        },
        readLE(buf: Buffer, offset: number = 0): S {
            const values: any = {};
            let pos = offset;

            for (const k in members) {
                values[k] = members[k].readLE(buf, pos);
                pos += members[k].size;
            }

            return values as S;
        },
        writeBE(data: S, buf: Buffer, offset: number = 0): void {
            let pos = offset;

            for (let [k, member] of Object.entries<ICType<any>>(members)) {
                const dat = data[k];
                if (dat === undefined) throw new Error(`field >${k}< on passed object was undefined!`)

                member.writeBE(dat, buf, pos);
                pos += member.size;
            }
        },
        writeLE(data: S, buf: Buffer, offset: number = 0): void {
            let pos = offset;

            for (let [k, member] of Object.entries<ICType<any>>(members)) {
                const dat = data[k];
                if (dat === undefined) throw new Error(`field >${k}< on passed object was undefined!`)

                member.writeLE(dat, buf, pos);
                pos += member.size;
            }
        }
    }
}
