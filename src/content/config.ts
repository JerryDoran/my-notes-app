import { defineCollection } from 'astro:content';
import z from 'zod';

const postsCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      author: z.string(),
      date: z.string(),
      image: image(),
      title: z.string(),
    }),
});

export const collections = {
  posts: postsCollection,
};
