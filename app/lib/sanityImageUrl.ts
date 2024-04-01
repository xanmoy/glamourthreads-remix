import ImageUrlBuilder from "@sanity/image-url";
import { client } from "./sanity";

const builder = ImageUrlBuilder(client);
// string
export function urlFor(source: any) {
    return builder.image(source);
}