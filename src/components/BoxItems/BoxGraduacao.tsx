import { Grid } from "@chakra-ui/react";
import ItemsGraduacao from "./ItemsGraduacao";


export default function BoxGraduacao() {
  return (
    <>
      <Grid
        templateColumns={["1ft", "1fr 1 fr", "repeat(3, 1fr)", "repeat(4, 1fr)"]}
        gap={["20px", "45px"]}
        alignItems="center"
        justifyContent="center"
        px={["30px", "0"]}
        mb="50px"
      >
        <ItemsGraduacao />
      </Grid>
    </>
  )
}