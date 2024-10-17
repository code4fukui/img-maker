import * as t from "https://deno.land/std/testing/asserts.ts";
import { prompt2hash } from "./prompt2hash.js";

Deno.test("simple", () => {
  t.assertEquals(prompt2hash("テスト"), "CH7C_NUGR_AN8J_LYEW_VD72_8AGH_VD");
});
