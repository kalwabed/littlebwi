import { Flex, HStack, Skeleton, SkeletonText, VStack } from '@chakra-ui/react'

const CardSkeleton = () => (
  <HStack align="start" spacing={4} w="full">
    <Skeleton boxSize="150px" />
    <Flex direction="column" w="full">
      <Skeleton h="20px" w="30%" />
      <Skeleton h="18px" w="10%" my={2} />
      <SkeletonText noOfLines={2} h={12} mt={3} />

      <HStack mt={1}>
        <Skeleton h="20px" w={10} />
        <Skeleton h="20px" w={10} />
      </HStack>
    </Flex>
  </HStack>
)

const ItemsSkeleton = () => {
  return (
    <VStack w="full" align="start">
      {[1, 2, 3].map(i => (
        <CardSkeleton key={i} />
      ))}
    </VStack>
  )
}

export default ItemsSkeleton
