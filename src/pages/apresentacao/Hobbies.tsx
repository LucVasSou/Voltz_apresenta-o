import { Flex } from "@chakra-ui/react";
import Head from "next/head";
import HobbiesBanner from "../../components/Banner/hobbies";
import BoxHobbies from "../../components/BoxItems/BoxHobbies";

import HobbiesContent from "../../components/Content/hobbies";
import Footer from "../../components/Footer";


import Header from "../../components/Header";
import SeparadorFooter from "../../components/SeparadorFooter";

export default function Continent(){
  return (
    <>
    <Head>
      <title>Apresentação | Hobbies</title>
    </Head>
    <Flex direction="column">
      <Header />
      <HobbiesBanner />

      <Flex
        direction="column"
        maxW="1160px"
        mx="auto"
        mb="10"
        px="1rem"
      >
        <HobbiesContent />
        <BoxHobbies />
        <SeparadorFooter />
        <Footer />
      </Flex>
    </Flex>
    </>
  )
}