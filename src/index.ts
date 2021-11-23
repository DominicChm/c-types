
//Import CTypes
import {uint8} from "./primitive_ctypes/uint8";
import {uint16} from "./primitive_ctypes/uint16";
import {uint32} from "./primitive_ctypes/uint32"

import {int8} from "./primitive_ctypes/int8";
import {int16} from "./primitive_ctypes/int16";
import {int32} from "./primitive_ctypes/int32";

import {double} from "./primitive_ctypes/double";
import {float} from "./primitive_ctypes/float";

import {boolean} from "./primitive_ctypes/boolean";

//Import advanced types
import {cArray} from "./complex_ctypes/c_array";
import {cString} from "./complex_ctypes/c_string";
import {cStruct} from "./complex_ctypes/c_struct"
import {end} from "./complex_ctypes/end"

//Import types
import {CType} from "./interfaces/CType"
import {CTypeEndian} from "./interfaces/CTypeEndian"
import {StructMembers} from "./interfaces/StructMembers"
import {CTypeBase} from "./interfaces/CTypeBase";

//Import util functions
import {patchAlloc} from "./util/patchAlloc";
import {allocBE, allocLE} from "./util/alloc";

//Export generator functions
export {uint8, uint16, uint32}
export {int8, int16, int32}
export {float, double}
export {boolean}
export {cString, cArray, end, cStruct}
export {CType, CTypeEndian, StructMembers, CTypeBase}
export {patchAlloc, allocLE, allocBE}

export let number_types = {uint8, uint16, uint32, int8, int16, int32, float, double};

// Export interfaces and types

