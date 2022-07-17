import { Grid, GridItem } from "@chakra-ui/react";
import CaracteristicList from "./caracteristic";




export default function Caracteristic() {
  
  return (
    <Grid
      templateColumns={["1fr 1fr", "1fr 1fr", "1fr 1fr", "repeat(4, 1fr)"]}
      w="100%"
      justifyContent="space-between"
      alignItems="center"
      mt={["10","32"]}
      mx="auto"
      maxW="1160px"
      gap={[1, 5]}
    >
      <GridItem> 
        <CaracteristicList icon="pessoa" text="Lucas"/>
      </GridItem>
      <GridItem>
        <CaracteristicList icon="lifestyle" text="Hobbies"/>
      </GridItem>
      <GridItem>
        <CaracteristicList icon="openbook" text="Graduação"/>
      </GridItem>
      <GridItem>
        <CaracteristicList icon="companhia" text="Voltz"/>
      </GridItem>
    </Grid>
  )
}