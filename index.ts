//Import CTypes
import {uint8} from "./ctypes/uint8";
import {uint16} from "./ctypes/uint16";
import {uint32} from "./ctypes/uint32"

import {int8} from "./ctypes/int8";
import {int16} from "./ctypes/int16";
import {int32} from "./ctypes/int32";

import {double} from "./ctypes/double";
import {float} from "./ctypes/float";

//Import util functions
import {c_array} from "./c_array";
import {c_string} from "./c_string";
import {c_struct} from "./c_struct"
import {end} from "./end"

//Import types
import {ICType} from "./interfaces/ICType"
import {ICTypeConstEndian} from "./interfaces/ICTypeConstEndian"
import {IStructMember} from "./interfaces/IStructMember"

//Export generator functions
export {uint8, uint16, uint32}
export {int8, int16, int32}
export {float, double}
export {c_string, c_array, end, c_struct}
export {ICType, ICTypeConstEndian, IStructMember}

export let number_types = {uint8, uint16, uint32, int8, int16, int32, float, double};

// Export interfaces and types

