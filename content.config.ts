import { defineContentConfig, defineCollection } from '@nuxt/content'
import { z } from 'zod'

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: 'page',
      source: 'blog/*.md',
      schema: z.object({
        title: z.string(),
        date: z.string(),
        description: z.string().optional(),
        tags: z.array(z.string()).optional(),
        draft: z.boolean().default(false),
        layout: z.string().optional(),
        category: z.string().optional(),
        head: z.object({
          image: z.string().optional()
        }).optional(),
        alt: z.string().optional()
      })
    }),
    portfolio: defineCollection({
      type: 'page',
      source: 'portfolio/*.md',
      schema: z.object({
        title: z.string(),
        date: z.string(),
        draft: z.boolean().default(false),
        layout: z.string().optional(),
        category: z.string().optional(),
        head: z.object({
          image: z.string().optional()
        }).optional()
      })
    }),
    siriShortcuts: defineCollection({
      type: 'page',
      source: 'siri-shortcuts/*.md',
      schema: z.object({
        title: z.string(),
        date: z.string().optional(),
        category: z.string().optional()
      })
    })
  }
})
