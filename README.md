# c-type-util

c-types is a utility library to help with encoding and decoding data in Node.js's
[Buffers](https://nodejs.org/api/buffer.html). It provides a standard interface to read/write different types, making it
useful for creating dynamic parsers.

## Installing

``npm install c-type-util``

## Usage

```typescript
import {uint32, c_array, c_string, end} from "./index";

//Big buffer for testing purposes
let buf = Buffer.alloc(128);

//Basic write/read
uint32.writeLE(123, buf);
console.log(uint32.readLE(buf));

// Arrays
const array_type = c_array(uint32, 3);
array_type.writeLE([1, 2, 3], buf);

const string_type = c_string(10);
string_type.writeLE("test", buf);

// Offsets
uint32.writeLE(123, buf, 4);
uint32.readLE(buf, 4);

// end(ian) helper function 
// isolates either LE or BE r/w functions
const simpler_ctype = end(uint32, "little");
simpler_ctype.write(123, buf);
simpler_ctype.read(buf);

```
