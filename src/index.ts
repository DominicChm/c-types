//Import CTypes
import {uint8} from "./primitive_ctypes/uint8";
import {uint16} from "./primitive_ctypes/uint16";
import {uint32} from "./primitive_ctypes/uint32"

import {int8} from "./primitive_ctypes/int8";
import {int16} from "./primitive_ctypes/int16";
import {int32} from "./primitive_ctypes/int32";

import {double} from "./primitive_ctypes/double";
import {float} from "./primitive_ctypes/float";

//Import util functions
import {c_array} from "./complex_ctypes/c_array";
import {c_string} from "./complex_ctypes/c_string";
import {c_struct} from "./complex_ctypes/c_struct"
import {end} from "./complex_ctypes/end"

//Import types
import {CType} from "./interfaces/CType"
import {CTypeEndian} from "./interfaces/CTypeEndian"
import {StructMembers} from "./interfaces/StructMembers"

//Export generator functions
export {uint8, uint16, uint32}
export {int8, int16, int32}
export {float, double}
export {c_string, c_array, end, c_struct}
export {CType, CTypeEndian, StructMembers}

export let number_types = {uint8, uint16, uint32, int8, int16, int32, float, double};

// Export interfaces and types

