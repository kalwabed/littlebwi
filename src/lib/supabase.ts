import { createClient } from '@supabase/supabase-js'

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_KEY)

export interface Item {
  id?: string
  name: string
  description: string
  category: string
  area: string
  image_key: string
  socials: { instagram: string; web: string }
  created_at?: string
}

export const getItems = async () => {
  try {
    return await supabase.from<Item>('items').select('*')
  } catch (err) {
    console.error(err)
  }
}

export const addNewItem = async (props: Item) => {
  try {
    return await supabase.from<Item>('items').insert({ ...props }, { returning: 'minimal' })
  } catch (err) {
    console.error(err)
  }
}

export const addToStorage = async (fileName: string, file: File, storageName = 'logos') => {
  try {
    return await supabase.storage.from(storageName).upload(fileName, file)
  } catch (err) {
    console.error(err)
  }
}
