# Nodejs Sleep

As we all know that nodejs is a single threaded async language and you need to have `async` wrapper to execute your own sleep function. But sometimes it is required to have a synchronous sleep to make things simple and easy to understand.

This package use foreign function interface technique to call `sleep` and `usleep` functions from `libc.so` library.

> **NOTE** Libc is guaranteed in macOS and Linux operating systems but not in windows. Therefore windows is not supported yet

**Read More:**

- https://en.wikipedia.org/wiki/Foreign_function_interface
- https://en.wikipedia.org/wiki/C_standard_library

## Installation

```
npm i @tbhaxor/node-sleep

yarn add @tbhaxor/node-sleep
```

## Usage

```js
// es6
import { sleep, usleep } from "@tbhaxor/node-sleep";

// commonjs
const { sleep, usleep } = require("@tbhaxor/node-sleep");

sleep(3); // sleep for 3 seconds
usleep(1000); // sleep for 1000 micro seconds
```

## Licence

The project is licened under MIT License
