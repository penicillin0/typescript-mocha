import { ClosedSection } from "../src/closedSection";

import * as assert from "assert";

describe("上端点と下端点を持つことができる", () => {
  let cs: ClosedSection;

  describe("1, 3 を渡すとそれぞれ上端点と下端点にもつことができる", () => {
    beforeEach(() => {
      cs = new ClosedSection(1, 3);
    });
    it("上端点として 1 (number)が取得できる", () => {
      assert.strictEqual(cs.top, 1);
    });
    it("下端点して 3 (number)が取得できる", () => {
      assert.strictEqual(cs.bottom, 3);
    });
  });

  describe("[1, 3] の閉区間を文字列に変換できる", () => {
    cs = new ClosedSection(1, 3);
    it(" 1, 3 を渡すと`[1,3]`にできる", () => {
      assert.strictEqual(cs.getSectionString(), "[1,3]");
    });
  });

  describe("[1, 3] の閉区間で指定した整数を含むのか判定できる", () => {
    beforeEach(() => {
      cs = new ClosedSection(1, 3);
    });

    it("4 -> false を得る", () => {
      assert.strictEqual(cs.has(4), false);
    });

    it("1 -> true を得る", () => {
      assert.strictEqual(cs.has(1), true);
    });

    it("2 -> false を得る", () => {
      assert.strictEqual(cs.has(2), true);
    });
  });
});
