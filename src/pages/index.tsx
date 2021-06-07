import Container from '@/components/Container'
import HomePageRenderer from '@/components/Home'
import { getBusiness } from '@/lib/supabase'
import { useEffect } from 'react'

const HomePage = () => {
  useEffect(() => {
    ;(async () => {
      const { data } = await getBusiness()
      console.log(data)
    })()
  }, [])

  return (
    <Container pb={10}>
      <HomePageRenderer />
    </Container>
  )
}

export default HomePage
