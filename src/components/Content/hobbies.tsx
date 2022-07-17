import { Grid, Text } from "@chakra-ui/react";


export default function HobbiesContent() {
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
      Eu gosto de fazer várias coisas para relaxar, 
      geralmente eu decido o que eu vou fazer de acordo com a disponibilidade de tempo
      ou o meu humor na hora.
      </Text>
      
    </Grid>
  )
}