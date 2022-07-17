import { Flex, Grid, Icon, Text } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { RiArrowLeftSLine } from "react-icons/ri"


export default function Header() {
  const { asPath } = useRouter();
  const notHomePage = asPath !== "/"

  return (
    <Flex
      bg="blue.200"
      w="100%"
      as="header"
      mx="auto"
      px="1rem"
      h={["50px", "100px"]}
      align="center"
      justify="center"
    >
      <Grid
        h="100%"
        mx="auto"
        w="100%"
        maxW="1160px"
        alignItems="center"
        justifyContent="center"
        alignSelf="start"
      >

        {notHomePage && (
          <Link href="/">
            <a>
              <Icon 
              as={RiArrowLeftSLine} 
              fontSize={[20, 40]} 
              justifySelf="start" 
              color="black"
              />
            </a>
          </Link>
        )}

        <Text
          justifyContent="center"
          align="center"
          gridColumn="2"
          fontWeight="bold"
          fontSize={["1rem","2rem","3rem"]}
          color="black"
        >
            Lucas Vasconcelos de Souza
        </Text>
      </Grid>
    </Flex>
  )
}