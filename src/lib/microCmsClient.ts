import { createClient } from "microcms-js-sdk";

export const microCmsClient = createClient({
  serviceDomain: "ogotte-kudasai",
  apiKey: process.env.NEXT_PUBLIC_CMS_API_KEY || "none",
});
