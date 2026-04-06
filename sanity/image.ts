// import imageUrlBuilder from "@sanity/image-url";
// import { client } from "./client";

// const builder = imageUrlBuilder(client);

// export function urlFor(source: any) {
//   const isLive = process.env.NODE_ENV==="production"
//   return builder.image(isLive?`https://bid032-portfolio.netlify.app/${source}`:source);
// }
// ...existing code...
import imageUrlBuilder from "@sanity/image-url";
import { client } from "./client";

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
    const isLive = process.env.NODE_ENV === "production";

    // If source is a string path, return a plain absolute URL in production.
    if (typeof source === "string") {
        // If already absolute, return as-is.
        if (/^https?:\/\//i.test(source)) return source;
        // Preserve the leading slash on the source (will produce the double-slash after the domain if source starts with '/').
        return isLive ? `https://bid032-portfolio.netlify.app/${source}` : source;
    }

    // For Sanity image objects/references, use the builder and return the generated URL.
    return builder.image(source).url();
}
// ...existing code...