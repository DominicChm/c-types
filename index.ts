//Import CTypes
import exp from "constants";

import {uint8} from "./ctypes/uint8";
import {uint16} from "./ctypes/uint16";
import {uint32} from "./ctypes/uint32"

import {int8} from "./ctypes/int8";
import {int16} from "./ctypes/int16";
import {int32} from "./ctypes/int32";

import {double} from "./ctypes/double";
import {float} from "./ctypes/float";

import {c_array} from "./c_array";
import {c_string} from "./c_string";
import {end} from "./end"


//Export generator functions
export {uint8, uint16, uint32}
export {int8, int16, int32}
export {float, double}
export {c_string, c_array, end}

export let number_types = {uint8, uint16, uint32, int8, int16, int32, float, double};
