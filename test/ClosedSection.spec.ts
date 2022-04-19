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
    it("下端点して3(number)が取得できる", () => {
      assert.strictEqual(cs.bottom, 3);
    });
  });
});
