import { Flex, Heading } from "@chakra-ui/react";

export default function HobbiesBanner() {
  return (
    <Flex
    w="100%"
    h={["150px", "380px", "500px"]}
    px={["0", "0", "36"]}
    pt={["0", "0", "72"]}
    bgImage="url(/hobbies.png)"
    bgPosition="center"
    bgRepeat="no-repeat"
    bgSize="cover"
    align="center"
    justify={["center", "center", "flex-start"]}
    >
    </Flex>
  )
}