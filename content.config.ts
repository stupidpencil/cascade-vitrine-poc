import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    pages: defineCollection({
      type: 'page',
      source: [
        { include: 'index.md' },
        { include: 'pages/**', prefix: '' }
      ]
    }),
    experiments: defineCollection({
      type: 'data',
      source: 'experiments/**.md',
      schema: z.object({
        organization: z.string(),
        logo: z.string().optional(),
        kind: z.string().optional(),
        quote: z.string().optional(),
        url: z.string().optional()
      })
    })
  }
})
