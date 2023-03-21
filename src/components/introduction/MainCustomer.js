import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Grid } from "@mui/material";

const MainCustomer = () => {
  return (
    <Box>
      <CssBaseline />
      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="lg">
        <Grid sx={{ justifyContent: "center", display: "flex", mx: 9 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            주요 고객
          </Typography>
        </Grid>
        <Typography variant="h5" component="h2" gutterBottom></Typography>
        <Grid
          sx={{
            justifyContent: "center",
            display: "flex",
            maxHeight: "700px",
            maxWidth: "100vh",
            mx: 10,
          }}
        >
          <img src="/images/custmerlogo/custmerlogo.png" width="130%" />
        </Grid>
      </Container>
    </Box>
  );
};
export default MainCustomer;
