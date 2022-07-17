import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

export default function ItemsVoltz() {
  return (
    <>
    <Box
      borderRadius="4px"
      overflow="hidden">
      <Image
        src="/great.png"
        alt="Great Place to Word"
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
            GPTW
          </Heading>
          <Text
            mt="3"
            fontSize="md"
            color="gray.500"
            fontWeight="500"
          >
            Great Place to Word
          </Text>
        </Flex>
        
      </Flex>
    </Box>
    <Box
    borderRadius="4px"
    overflow="hidden">
    <Image
      src="/inovador.png"
      alt="Inovador"
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
          Inovador
        </Heading>
        <Text
          mt="3"
          fontSize="md"
          color="gray.500"
          fontWeight="500"
        >
          Solução para o seu problema
        </Text>
      </Flex>
    </Flex>
  </Box>
  <Box
    borderRadius="4px"
    overflow="hidden">
    <Image
      src="/desafio.png"
      alt="Desafio"
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
          Desafios
        </Heading>
        <Text
          mt="3"
          fontSize="md"
          color="gray.500"
          fontWeight="500"
        >
          Te faz ir além
        </Text>
      </Flex>
    </Flex>
  </Box>
  <Box
    borderRadius="4px"
    overflow="hidden">
    <Image
      src="/crescimento.png"
      alt="Crescimento"
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
          Crescimento
        </Heading>
        <Text
          mt="3"
          fontSize="md"
          color="gray.500"
          fontWeight="500"
        >
          Aprimoração profissional
        </Text>
      </Flex>
    </Flex>
  </Box>
  
  </>
  )
}