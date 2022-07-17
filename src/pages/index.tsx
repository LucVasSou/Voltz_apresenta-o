import { Flex, Heading } from "@chakra-ui/react";
import Head from "next/head";
import Banner from "../components/Banner";
import Caracteristic from "../components/Caracteristics";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Separador from "../components/Separador";
import SeparadorFooter from "../components/SeparadorFooter";


import Slider from "../components/Slider";


export default function Home() {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/apresentacao.png" type="image/png" />
        <title>Apresentação | Home</title>
      </Head>
      <Flex direction="column">
        <Header />
        <Banner />
        <Heading
          textAlign="center"
          fontWeight="500"
          mt={["5", "14"]}
          fontSize={["lg", "3xl", "4xl"]}
          color="black"
        >
          Vamos nessa? <br /> Escolha o quer saber.
        </Heading>
        <Caracteristic />
        <Separador />
        <Slider />
        <SeparadorFooter />
        <Footer />
      </Flex>
    </>
  )
}
