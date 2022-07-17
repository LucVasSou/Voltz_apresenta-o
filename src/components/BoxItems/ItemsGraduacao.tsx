import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

export default function ItemsGraduacao() {
  return (
    <>
    <Box
      borderRadius="4px"
      overflow="hidden">
      <Image
        src="/ubm.png"
        alt="UBM"
        h="170px"
        w="100%"
      />
      <Flex
        p="6"
        align="center"
        justify="space-between"
        bg="white" border="1px"
        borderColor="yellow.300"
        borderTop="0"
      >
        <Flex
          direction="column"
        >
          <Heading
            fontSize="xl"
            fontWeight="500"
          >
            Centro Universitario de Barra Mansa
          </Heading>
          <Text
            mt="3"
            fontSize="md"
            color="gray.500"
            fontWeight="500"
          >
            Engenharia de Produção
          </Text>
        </Flex>
        
      </Flex>
    </Box>
    <Box
    borderRadius="4px"
    overflow="hidden">
    <Image
      src="/estacio.png"
      alt="Estácio"
      h="170px"
      w="100%"
    />
    <Flex
      p="6"
      align="center"
      justify="space-between"
      bg="white" border="1px"
      borderColor="yellow.300"
      borderTop="0"
    >
      <Flex
        direction="column"
      >
        <Heading
          fontSize="xl"
          fontWeight="500"
        >
          Estácio de Sá
        </Heading>
        <Text
          mt="3"
          fontSize="md"
          color="gray.500"
          fontWeight="500"
        >
          Análise e Desenvolvimento de Sistemas
        </Text>
      </Flex>
    </Flex>
  </Box>
  
  </>
  )
}