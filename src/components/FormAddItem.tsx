import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  HStack,
  Input,
  Select,
  Textarea,
  VStack
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'

import { addNewItem, supabase } from '@/lib/supabase'

interface FormFields {
  name: string
  category: string
  area: string
  description: string
  instagram: string
  website: string
  logo: File[]
}

// TODO: 1. validating the input field with combination rhf and chakra
// TODO: 2. to provide image: grab Key from supabase storage and store into image_key field
// TODO: 3. send all to supabase and save
const FormAddItem = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormFields>()

  const formHandler = async (data: FormFields) => {
    const imgName = new Date().getTime().toString()
    const imgExt = data.logo[0].type === 'image/jpeg' ? '.jpg' : '.png'

    const { data: imgResult } = await supabase.storage.from('logos').upload(imgName.concat(imgExt), data.logo[0])

    const { error } = await addNewItem({
      name: data.name,
      area: data.area,
      description: data.description,
      category: data.category,
      socials: { instagram: data.instagram, web: data.website },
      image_key: imgResult.Key
    })

    if (error.message) console.error('[addNewItem]', error.message)
  }

  return (
    <VStack spacing={6} as="form" align="start" onSubmit={handleSubmit(formHandler)}>
      <FormControl id="nama" isInvalid={!!errors.name} isRequired>
        <FormLabel>Nama</FormLabel>
        <Input placeholder="contoh: Kopi Konco" {...register('name', { required: true })} />
        <FormHelperText>Nama produk atau tempat usaha Anda</FormHelperText>
      </FormControl>

      <FormControl id="kategori" isInvalid={!!errors.category} isRequired>
        <FormLabel>Kategori</FormLabel>
        <Select placeholder="Pilih kategori" {...register('category', { required: true })}>
          <option>Kafe</option>
          <option>Working space</option>
        </Select>
        <FormHelperText>Pilih kategori yang paling efektif mendeskripsikan bisnis Anda</FormHelperText>
      </FormControl>

      <FormControl id="lokasi" isInvalid={!!errors.area} isRequired>
        <FormLabel>Lokasi</FormLabel>
        <Input placeholder="contoh: Genteng" {...register('area', { required: true })} />
        <FormHelperText>Pakai nama desa/kecamatan</FormHelperText>
      </FormControl>

      <FormControl id="deskripsi" isInvalid={!!errors.description} isRequired>
        <FormLabel>Deskripsi</FormLabel>
        <Textarea
          placeholder="Mawar itu merah, violet itu biru; cintaku padamu bagaikan debu"
          {...register('description', { required: true })}
        />
        <FormHelperText>Deskripsi singkat tentang bisnis Anda</FormHelperText>
      </FormControl>

      <HStack>
        <FormControl id="instagram">
          <FormLabel>Instagram</FormLabel>
          <Input placeholder="Opsional" {...register('instagram')} />
          <FormHelperText>Username akun Instagram</FormHelperText>
        </FormControl>

        <FormControl id="website">
          <FormLabel>Website</FormLabel>
          <Input placeholder="Opsional" {...register('website')} />
          <FormHelperText>Alamat lengkap website</FormHelperText>
        </FormControl>
      </HStack>

      <FormControl id="logo" isInvalid={!!errors.logo} isRequired>
        <FormLabel>Logo</FormLabel>
        <Input type="file" {...register('logo', { required: true })} />
        <FormHelperText>Format: .jpg, .png, .jpeg</FormHelperText>
      </FormControl>

      <Button type="submit" colorScheme="yellow">
        Submit
      </Button>
    </VStack>
  )
}

export default FormAddItem
