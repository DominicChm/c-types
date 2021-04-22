import {ICType} from "../interfaces/ICType";

//TODO: Allow for disabling these checks for performance.
export function check_inputs(c_type: ICType, buf: Buffer, offset: number) {
    //Existence checks
    if(!c_type) throw new Error(`passed c_type was falsy`);
    if(!buf) throw new Error(`passed buffer was falsy`);
    if(offset == null) throw new Error(`passed offset was null or undefined`);

    //Offset checks:
    if(!Number.isInteger(offset)) throw new Error("passed offset is not an integer!");
    if(offset < 0) throw new Error("passed offset is negative. Positive offset is required!");

    //Size checks
    if(c_type.size + offset > buf.length) throw new Error("Cannot write passed c_type at requested offset b/c buffer is too small.")
}
