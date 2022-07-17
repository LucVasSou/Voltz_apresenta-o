import { Grid, Text } from "@chakra-ui/react";


export default function VoltzContent() {
  return (
    <Grid
      mx={["8", "8"]}
      my={["8", "20"]}
      justifySelf="center"
    >
      <Text
        fontSize={["lg", "xl", "xl", "2xl"]}
        color="black"
        textAlign="justify"
      >
      A Voltz é a fintech criada pelo Grupo Energisa - 
      que há mais de 117 anos fornece energia elétrica para 
      milhões de brasileiros - e que busca expandir, por meio 
      de uma conta digital gratuita, diversos produtos capazes 
      de acelerar a inclusão digital e financeira de clientes 
      em todas as cidades do Brasil.
      
      </Text>
      
    </Grid>
  )
}