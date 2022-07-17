import { Flex, Heading } from "@chakra-ui/react";

export default function VoltzBanner() {
  return (
    <Flex
    w="100%"
    h={["150px", "380px", "500px"]}
    px={["0", "0", "36"]}
    pt={["0", "0", "72"]}
    bgImage="url(/voltz.png)"
    bgPosition="center"
    bgRepeat="no-repeat"
    bgSize="cover"
    align="center"
    justify={["center", "center", "flex-start"]}
    >
    </Flex>
  )
}