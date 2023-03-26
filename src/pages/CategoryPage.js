import * as React from "react";
import { useState, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useParams } from "react-router-dom";
import { Grid } from "@mui/material";
import Categoryall from "../components/category/categoryall";

export default function CategoryPage() {
  const [pagestarter, setPagestarter] = useState([]);
  const { category } = useParams();
  useEffect(() => {
    setPagestarter({
      starter: [{ id: 1 }],
    });
  }, []);

  //all,
  return (
    <Box>
      <CssBaseline />
      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="large">
        {pagestarter.starter &&
          pagestarter.starter.map(() => {
            if (!pagestarter.starter) {
              return <Grid>no data</Grid>;
            } else {
                return (
                  <Grid>
                    <Categoryall category={category} />
                  </Grid>
                );
            }
          })}
      </Container>
    </Box>
  );
}
