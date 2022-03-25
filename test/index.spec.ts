import { sleep, usleep } from "../lib";
import faker from "@faker-js/faker";

describe("@tbhaxor/node-sleep testing", () => {
  let sec, msec;
  beforeAll(() => {
    for (let i = 3; i > 0; i--) {
      sec = faker.datatype.number({ min: 1, max: 5 });
      msec = faker.datatype.number({ min: 1e6, max: 4e6 });
    }
  });

  describe("sleep()", () => {
    it("should throw error if no parameter is passed", () => {
      expect(() => sleep(undefined)).toThrow(SyntaxError);
    });

    it("should throw error non-number is passed", () => {
      // @ts-ignore
      expect(() => sleep("number")).toThrow(SyntaxError);
      // @ts-ignore
      expect(() => sleep(true)).toThrow(SyntaxError);
      // @ts-ignore
      expect(() => sleep({})).toThrow(SyntaxError);
      // @ts-ignore
      expect(() => sleep([])).toThrow(SyntaxError);
    });

    it("should throw error when number less than 1 is provided", () => {
      expect(() => sleep(-10)).toThrow(RangeError);
    });

    it(`should successfully wait for some positive seconds`, () => {
      const start = Date.now();
      sleep(sec);
      const end = Date.now();

      expect(end - start).toBeGreaterThanOrEqual(sec * 1000);
    });
  });

  describe("usleep()", () => {
    it("should throw error if no parameter is passed", () => {
      expect(() => usleep(undefined)).toThrow(SyntaxError);
    });

    it("should throw error non-number is passed", () => {
      // @ts-ignore
      expect(() => usleep("number")).toThrow(SyntaxError);
      // @ts-ignore
      expect(() => usleep(true)).toThrow(SyntaxError);
      // @ts-ignore
      expect(() => usleep({})).toThrow(SyntaxError);
      // @ts-ignore
      expect(() => usleep([])).toThrow(SyntaxError);
    });

    it("should throw error when number less than 1 is provided", () => {
      expect(() => usleep(-10)).toThrow(RangeError);
    });

    it(`should successfully wait for some positive microseconds`, () => {
      const start = Date.now();
      usleep(msec);
      const end = Date.now();

      expect(end - start).toBeGreaterThanOrEqual(+(msec / 1000).toFixed(0));
    });
  });
});
