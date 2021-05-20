# c-type-util

c-type-util is a utility library to help with encoding and decoding data in Node.js's
[Buffers](https://nodejs.org/api/buffer.html). It provides a standard interface to read/write different types, making it
useful for creating dynamic parsers.

## Installing

``npm install c-type-util``

## Usage

```typescript
import {uint32, uint16, c_array, cString, end, cStruct} from "c-type-util";

//Big buffer for testing purposes
let buf = Buffer.alloc(128);

//Basic write/read
uint32.writeLE(123, buf);
console.log(uint32.readLE(buf));

// Arrays
const array_type = cArray(uint32, 3);
array_type.writeLE([1, 2, 3], buf);

const string_type = cString(10);
string_type.writeLE("test", buf);

// Offsets
uint32.writeLE(123, buf, 4);
uint32.readLE(buf, 4);

// end(ian) helper function
// isolates either LE or BE r/w functions
const simpler_ctype = end(uint32, "little");
simpler_ctype.write(123, buf);
simpler_ctype.alloc(1234);
simpler_ctype.read(buf);

// Example Struct
interface struct_t {
    example_member32: number;
    example_member_array: number[];
    example_string: string;
}

const struct = cStruct<struct_t>({
    example_member32: uint32,
    example_member_array: c_array(uint16, 4),
    example_string: c_string(32)
})

struct.writeLE({
    example_member32: 1,
    example_member_array: [1, 2, 3, 4],
    example_string: "test string"
}, buf)

console.log(struct.readLE(buf))

//Any ctype has `allocLE` and `allocBE` functions that return a written buffer.
const buffer = uint32.allocLE(1234);
console.log(buffer);

```
