import { createClient } from "@sanity/client";

const projectId = "qangxjp4";
const dataset = "production";
const apiVersion = "2021-03-25";

export const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: true,
});
