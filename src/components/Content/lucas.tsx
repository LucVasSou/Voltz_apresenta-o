import { Grid, Text } from "@chakra-ui/react";


export default function LucasContent() {
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
      Eu sou uma pessoa que sempre foca em dar o melhor de si, 
      sem medo de aprender coisas novas. 
      
      </Text>
      
    </Grid>
  )
}