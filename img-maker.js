import { fetchWeb } from "https://code4fukui.github.io/wsutil/fetchWeb.js";
import { fetchImage } from "https://code4fukui.github.io/txt2img/fetchImage.js";
import { prompt2hash } from "./prompt2hash.js";

await Deno.mkdir("static/img", { recursive: true });

const fetchImageWithCache = async (prompt) => {
  const fn = "./static/" + prompt2hash(prompt);
  try {
    return await Deno.readFile(fn);
  } catch (e) {
    await Deno.writeFile(fn, new Uint8Array([]));
    const png = await fetchImage(prompt);
    await Deno.writeFile(fn, png);
    return png;
  }
};

export default fetchWeb(async (param, req, path, conninfo) => {
  param ||= {};
  const prompt = param.prompt ?? "ランダムな画像";
  const png = await fetchImageWithCache(prompt);
  return new Response(png, { headers: { "Content-Type": "image/png" } });
});
