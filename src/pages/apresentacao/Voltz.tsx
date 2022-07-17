import { Flex } from "@chakra-ui/react";
import  Head  from "next/head";
import VoltzBanner from "../../components/Banner/voltz";
import BoxVoltz from "../../components/BoxItems/BoxVoltz";

import VoltzContent from "../../components/Content/voltz";
import Footer from "../../components/Footer";

import Header from "../../components/Header";
import SeparadorFooter from "../../components/SeparadorFooter";

export default function Continent(){
  return (
    <>
    <Head>
      <title>Apresentação | Voltz</title>
    </Head>
    <Flex direction="column">
      <Header />
      <VoltzBanner />

      <Flex
        direction="column"
        maxW="1160px"
        mx="auto"
        mb="10"
        px="1rem"
      >
        <VoltzContent />
        <BoxVoltz />
        <SeparadorFooter />
        <Footer />
      </Flex>
    </Flex>
    </>
  )
}