import useSwr from 'swr'
import Container from '@/components/Container'
import HomePageRenderer from '@/components/Home'
import { getItems } from '@/lib/supabase'

const HomePage = () => {
  const { data } = useSwr('items', async () => (await getItems()).data)

  return (
    <Container pb={10}>
      <HomePageRenderer items={data} />
    </Container>
  )
}

export default HomePage
