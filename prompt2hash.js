import { SHAKE128 } from "https://code4fukui.github.io/SHA3/SHAKE128.js";
import { Base32 } from "https://code4fukui.github.io/Base32/Base32.js";

export const prompt2hash = (prompt) => {
  return Base32.encode(SHAKE128.digest(new TextEncoder().encode(prompt), 128));
};
