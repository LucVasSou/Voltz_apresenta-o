import { Flex } from "@chakra-ui/react";
import Head from "next/head";
import GraduacaoBanner from "../../components/Banner/graduacao";
import BoxGraduacao from "../../components/BoxItems/BoxGraduacao";
import GraduacaoContent from "../../components/Content/graduacao";
import Footer from "../../components/Footer";



import Header from "../../components/Header";
import SeparadorFooter from "../../components/SeparadorFooter";

export default function Continent(){
  return (
    <>
    <Head>
      <title>Apresentação | Graduação</title>
    </Head>
    <Flex direction="column">
      <Header />
      <GraduacaoBanner />

      <Flex
        direction="column"
        maxW="1160px"
        mx="auto"
        mb="10"
        px="1rem"
      >
        <GraduacaoContent />
        <BoxGraduacao />
        <SeparadorFooter />
        <Footer />
      </Flex>
    </Flex>
    </>
  )
}