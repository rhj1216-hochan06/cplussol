import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Grid } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
const Categoryall = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("/data/products.json").then((datafile) => {
      setProducts(datafile.data);
      console.log(products);
    });
  }, []);

  return (
    <Box>
      <CssBaseline />
      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="lg">
        카테고리all
        {products &&
          products.map((product) => {
            if (!product.id) {
              return <Grid>no data</Grid>;
            } else {
              return (
                <>
                  <Grid>
                    <img src={product.img} />
                  </Grid>
                  <Grid>{product.name}</Grid>
                </>
              );
            }
          })}
      </Container>
    </Box>
  );
};
export default Categoryall;
