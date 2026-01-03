import {
  defineConfig,
  defineDocs,
  frontmatterSchema,
  metaSchema,
} from "fumadocs-mdx/config";
import { z } from "zod";

const extendedSchema = frontmatterSchema.extend({
  authors: z
    .array(
      z.object({
        name: z.string(),
        url: z.string().url().optional(),
      }),
    )
    .optional(),
});

export const docs = defineDocs({
  dir: "content/docs",
  docs: {
    schema: extendedSchema,
    postprocess: {
      includeProcessedMarkdown: true,
    },
  },
  meta: {
    schema: metaSchema,
  },
});

export default defineConfig({
  mdxOptions: {
    rehypeCodeOptions: {
      langs: ["java"],
      themes: {
        light: "light-plus",
        dark: "github-dark",
      },
    },
  },
});
