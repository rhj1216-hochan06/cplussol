import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Grid } from "@mui/material";
import { useMediaQuery } from '@mui/material';


const MainCustomer = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
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
          {isMobile ? <>
            {/* 모바일 일 때 */}
            <img src="/images/custmerlogo/custmerlogo.png" width="150%" />

          </> : <>
            {/* pc환경 일 때  */}
            <img src="/images/custmerlogo/custmerlogo.png" width="100%" />

          </>}


        </Grid>
      </Container>
    </Box>
  );
};
export default MainCustomer;
