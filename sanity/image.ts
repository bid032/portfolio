import imageUrlBuilder from "@sanity/image-url";
import { client } from "./client";

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  const isLive = process.env.NODE_ENV==="production"
  return builder.image(source);
}
