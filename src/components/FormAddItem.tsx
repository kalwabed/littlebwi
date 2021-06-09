import { useState } from 'react'
import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  HStack,
  Input,
  Select,
  Textarea,
  useToast,
  VStack
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'

import { addNewItem, addToStorage } from '@/lib/supabase'

interface FormFields {
  name: string
  category: string
  area: string
  description: string
  instagram: string
  website: string
  logo: File[]
}

const categories = ['Kafe', 'Komunitas', 'Working space', 'Startup', 'Kuliner', 'Media', 'Jasa']

const FormAddItem = () => {
  const [isLoading, setIsLoading] = useState(false)
  const toast = useToast()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormFields>()

  const formHandler = async (data: FormFields) => {
    setIsLoading(true)
    const logo = data.logo[0]
    const imgName = new Date().getTime().toString()
    const imgExt = logo.type === 'image/jpeg' ? '.jpg' : '.png'

    const { data: imgResult } = await addToStorage(imgName.concat(imgExt), logo)

    const { error } = await addNewItem({
      name: data.name,
      area: data.area,
      description: data.description,
      category: data.category,
      socials: { instagram: data.instagram, web: data.website },
      image_key: imgResult.Key
    })

    setIsLoading(false)
    if (error?.message) return console.error('[addNewItem]', error.message)

    toast({
      description: 'Item berhasil ditambahkan',
      title: 'Sukses!',
      isClosable: true,
      position: 'top',
      status: 'success'
    })
  }

  return (
    <VStack spacing={6} as="form" align="start" onSubmit={handleSubmit(formHandler)}>
      <FormControl id="nama" isInvalid={!!errors.name} isRequired>
        <FormLabel>Nama</FormLabel>
        <Input placeholder="contoh: Kopi Konco" {...register('name', { required: true })} />
        <FormHelperText>Suatu hal yang baik biasanya mempunyai nama</FormHelperText>
      </FormControl>

      <FormControl id="kategori" isInvalid={!!errors.category} isRequired>
        <FormLabel>Kategori</FormLabel>
        <Select placeholder="Pilih kategori" {...register('category', { required: true })}>
          {categories.map(category => (
            <option key={category}>{category}</option>
          ))}
        </Select>
        <FormHelperText>Pilih kategori yang paling cocok</FormHelperText>
      </FormControl>

      <FormControl id="lokasi" isInvalid={!!errors.area} isRequired>
        <FormLabel>Lokasi</FormLabel>
        <Input placeholder="contoh: Genteng" {...register('area', { required: true })} />
        <FormHelperText>Nama desa/kecamatan</FormHelperText>
      </FormControl>

      <FormControl id="deskripsi" isInvalid={!!errors.description} isRequired>
        <FormLabel>Deskripsi</FormLabel>
        <Textarea
          placeholder="Mawar itu merah, violet itu biru; cintaku padamu bagaikan debu"
          {...register('description', { required: true })}
        />
        <FormHelperText>Deskripsi singkat tentang hal apa yang Anda tambahkan</FormHelperText>
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

      <Button type="submit" colorScheme="yellow" isLoading={isLoading}>
        Kirim
      </Button>
    </VStack>
  )
}

export default FormAddItem
