import { z } from 'zod'

export const documentCreationSchema = z.object({
  name: z
    .string()
    .min(1, { message: 'Name is required' })
    .max(100, { message: 'Name cannot be longer than 100 characters' }),
})
