import { useBreakpointValue } from "@chakra-ui/media-query";
import { Flex, Text } from "@chakra-ui/layout"
import { Image } from "@chakra-ui/image"
import Link from "next/link";

interface CaracteristicListProps {
  icon: string;
  text: string;
  url: string;
}

export default function CaracteristicList({icon, text, url}: CaracteristicListProps) {
  const isMobile = useBreakpointValue({
    base: false,
    sm: true,
  })


  return (
    <Link href={`/apresentacao/${url}`}>
    <Flex
      direction={["row", "column"]}
      align="center"
      justify="center"
      cursor="pointer"
    >
      {isMobile ?
        <Image
          src={`/icons/${icon}.png`}
          alt="•"
          w="85px"
          h="85px"
          mb="6"
        /> :
        <Text
          color="yellow.400"
          fontSize="4xl"
          mr="2"
        >
          •
        </Text>}
      <Text
        fontWeight="600"
        color="black"
        fontSize={["md", "xl", "2xl"]}
        
      >
        {text}
      </Text>
    </Flex>
    </Link>
  )
}