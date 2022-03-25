import { Library } from "ffi-napi";

const libc = new Library("libc", {
  sleep: ["void", ["int"]],
  usleep: ["void", ["int"]],
});

/**
 * Sleep for seconds. If the number is floating, it will be ceiled
 *
 * @param seconds Number of seconds to sleep
 */
export function sleep(seconds: number): void {
  if (typeof seconds !== "number") {
    throw new SyntaxError("Expected number type");
  }

  seconds = Math.ceil(seconds);

  if (seconds < 1) {
    throw new RangeError("Seconds must be greater than 0");
  }

  libc.sleep(seconds);
}

/**
 * Sleep for microsecs. If the number is floating, it will be ceiled
 *
 * @param microsecs Number of microsecs to sleep
 */
export function usleep(microsecs: number): void {
  if (typeof microsecs !== "number") {
    throw new SyntaxError("Expected number type");
  }

  microsecs = Math.ceil(microsecs);

  if (microsecs < 1) {
    throw new RangeError("Milli seconds must be greater than 0");
  }

  libc.usleep(microsecs);
}
