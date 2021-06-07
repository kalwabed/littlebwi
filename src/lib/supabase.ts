import { createClient } from '@supabase/supabase-js'

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_KEY)

export interface Business {
  id: string
  name: string
  description: string
  area: string
  image_url: string
  socials: { instagram: string; web: string }
  created_at: string
}

export const getBusiness = async () => {
  try {
    return await supabase.from<Business[]>('business').select('*')
  } catch (err) {
    console.error(err)
  }
}
