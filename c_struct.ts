import {ICType} from "./interfaces/ICType";
import {IStructMember} from "./interfaces/IStructMember";

export function c_struct(members: IStructMember[]): ICType {
    type read_t = { [key: string]: any } //TODO: More precisely type this to {members.name: any}

    return {
        // Adds sizes of input members.
        size: members.reduce((acc, member) => acc + member.type.size, 0),

        readBE(buf: Buffer, offset: number = 0): read_t {
            const values: read_t = {};
            let pos = offset;

            for (const member of members) {
                values[member.name] = member.type.readBE(buf, pos);
                pos += member.type.size;
            }

            return values;
        },
        readLE(buf: Buffer, offset: number = 0): read_t {
            const values: read_t = {};
            let pos = offset;

            for (const member of members) {
                values[member.name] = member.type.readLE(buf, pos);
                pos += member.type.size;
            }

            return values;
        },
        writeBE(data: read_t, buf: Buffer, offset: number = 0): void {
            let pos = offset;

            for (const member of members) {

                const dat = data[member.name];
                if (dat === undefined) throw new Error(`field "${member.name}" on passed object was undefined!`)

                member.type.writeBE(dat, buf, pos);
                pos += member.type.size;
            }
        },
        writeLE(data: read_t, buf: Buffer, offset: number = 0): void {
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
