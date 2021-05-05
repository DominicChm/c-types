import {ICType} from "../interfaces/ICType";
import {IStructMembers, UnknownDict} from "../interfaces/IStructMember";


export function c_struct<S extends UnknownDict>(members: IStructMembers<S>): ICType<S> {

    return {
        // Adds sizes of input members.
        size: members.reduce((acc, member) => acc + member.type.size, 0),

        readBE(buf: Buffer, offset: number = 0): S {
            const values: UnknownDict = {};
            let pos = offset;

            for (const member of members) {
                values[member.name] = member.type.readBE(buf, pos);
                pos += member.type.size;
            }

            return values as S;
        },
        readLE(buf: Buffer, offset: number = 0): S {
            const values: UnknownDict = {};
            let pos = offset;

            for (const member of members) {
                values[member.name] = member.type.readLE(buf, pos);
                pos += member.type.size;
            }

            return values as S;
        },
        writeBE(data: S, buf: Buffer, offset: number = 0): void {
            let pos = offset;

            for (const member of members) {

                const dat = data[member.name];
                if (dat === undefined) throw new Error(`field "${member.name}" on passed object was undefined!`)

                member.type.writeBE(dat, buf, pos);
                pos += member.type.size;
            }
        },
        writeLE(data: S, buf: Buffer, offset: number = 0): void {
            let pos = offset;

            for (const member of members) {

                const dat = data[member.name];
                if (dat === undefined) throw new Error(`field "${member.name}" on passed object was undefined!`)

                member.type.writeLE(dat, buf, pos);
                pos += member.type.size;
            }
        }
    }
}
