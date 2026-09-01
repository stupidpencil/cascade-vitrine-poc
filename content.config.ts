import { defineCollection, defineContentConfig, z } from '@nuxt/content'

const experimentsSchema = z.object({
  organization: z.string(),
  logo: z.string().optional(),
  kind: z.string().optional(),
  quote: z.string().optional(),
  url: z.string().optional()
})

export default defineContentConfig({
  collections: {
    pages_fr: defineCollection({
      type: 'page',
      source: { include: 'fr/pages/**', prefix: '' }
    }),
    pages_en: defineCollection({
      type: 'page',
      source: { include: 'en/pages/**', prefix: '' }
    }),
    experiments_fr: defineCollection({
      type: 'data',
      source: 'fr/experiments/**.md',
      schema: experimentsSchema
    }),
    experiments_en: defineCollection({
      type: 'data',
      source: 'en/experiments/**.md',
      schema: experimentsSchema
    })
  }
})
