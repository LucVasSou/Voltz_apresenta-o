import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

export default function ItemsHobbies() {
  return (
    <>
    <Box
      borderRadius="4px"
      overflow="hidden">
      <Image
        src="/paciente.png"
        alt="Pessoa Paciente"
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
            Paciente
          </Heading>
          <Text
            mt="3"
            fontSize="md"
            color="gray.500"
            fontWeight="500"
          >
            Calmo
          </Text>
        </Flex>
        
      </Flex>
    </Box>
    <Box
    borderRadius="4px"
    overflow="hidden">
    <Image
      src="/esforcado.png"
      alt="Esforçado"
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
          Esforçado
        </Heading>
        <Text
          mt="3"
          fontSize="md"
          color="gray.500"
          fontWeight="500"
        >
          Dá o seu melhor
        </Text>
      </Flex>
    </Flex>
  </Box>
  <Box
    borderRadius="4px"
    overflow="hidden">
    <Image
      src="/criativo.png"
      alt="Criativo"
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
          Criativo
        </Heading>
        <Text
          mt="3"
          fontSize="md"
          color="gray.500"
          fontWeight="500"
        >
          Tenta fazer coisas novas
        </Text>
      </Flex>
    </Flex>
  </Box>
  <Box
    borderRadius="4px"
    overflow="hidden">
    <Image
      src="/equipe.png"
      alt="Equipe"
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
          Trabalho em Equipe
        </Heading>
        <Text
          mt="3"
          fontSize="md"
          color="gray.500"
          fontWeight="500"
        >
          Torna as coisas mais fáceis
        </Text>
      </Flex>
    </Flex>
  </Box>
  
  </>
  )
}