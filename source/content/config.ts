import { defineCollection, z } from "astro:content";

const worksCollection = defineCollection({
  type: "content", // "data" для импорта yml и json, "content" для MDX и MARDOC
  schema: z.object({
    title: z.string(),
    // language:z.enum(['en', 'ru']),

    // author: z.string(),
    // date: z.date()
  }),
});

const categoriesCollection = defineCollection({
  type: "content", // "data" для импорта yml и json, "content" для MDX и MARDOC
  schema: z.object({
    title: z.string(),
    // language:z.enum(['en', 'ru']),

    // author: z.string(),
    // date: z.date()
  }),
});

const pagesCollection = defineCollection({
  type: "content", // "data" для импорта yml и json, "content" для MDX и MARDOC
  schema: z.object({
    title: z.string(),
    // language:z.enum(['en', 'ru']),

    // author: z.string(),
    // date: z.date()
  }),
});

export const collections = {
  'works': worksCollection,
  'categories': categoriesCollection,
  'pages': pagesCollection,

};
