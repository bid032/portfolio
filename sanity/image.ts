// import imageUrlBuilder from "@sanity/image-url";
// import { client } from "./client";

// const builder = imageUrlBuilder(client);

// export function urlFor(source: any) {
//   const isLive = process.env.NODE_ENV==="production"
//   return builder.image(isLive?`https://bid032-portfolio.netlify.app/${source}`:source);
// }
import imageUrlBuilder from "@sanity/image-url";
import { client } from "./client";

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
    const isLive = process.env.NODE_ENV === "production";

    // If source is a string, only prefix in production and only when it's not already an absolute URL.
    if (typeof source === "string") {
        const normalized = source.replace(/^\/+/, ""); // remove leading slashes
        const src = isLive && !/^https?:\/\//i.test(normalized)
            ? `https://bid032-portfolio.netlify.app/${normalized}`
            : normalized;
        return builder.image(src as any);
    }

    // For Sanity image objects/references, pass through unchanged.
    return builder.image(source);
}