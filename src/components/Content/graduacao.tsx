import { Grid, Text } from "@chakra-ui/react";


export default function GraduacaoContent() {
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
      Eu estou em transição de carreira, vindo da área de engenharia de produção,
      estou estudando na área de tecnologia da informação a pouco menos de um ano.
      Estou focando na área do front-end, mas eu aberto para aprender conteúdo 
      de outras áreas.
      </Text>
      
    </Grid>
  )
}