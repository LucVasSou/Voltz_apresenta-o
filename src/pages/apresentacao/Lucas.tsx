import { Flex } from "@chakra-ui/react";
import Head from "next/head";
import LucasBanner from "../../components/Banner/lucas";
import BoxLucas from "../../components/BoxItems/BoxLucas";

import LucasContent from "../../components/Content/lucas";
import Footer from "../../components/Footer";


import Header from "../../components/Header";
import SeparadorFooter from "../../components/SeparadorFooter";

export default function Continent(){
  return (
    <>
    <Head>
      <title>Apresentação | Lucas</title>
    </Head>
    <Flex direction="column">
      <Header />
      <LucasBanner />

      <Flex
        direction="column"
        maxW="1160px"
        mx="auto"
        mb="10"
        px="1rem"
      >
        <LucasContent />
        <BoxLucas />
        <SeparadorFooter />
        <Footer />
      </Flex>
    </Flex>
    </>
  )
}