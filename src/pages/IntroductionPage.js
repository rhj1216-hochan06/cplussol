import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import MapPage from "./MapPage";
import CompanyIntroduction from "../components/introduction/CompanyIntroduction";
import MainCustomer from "../components/introduction/MainCustomer";

export default function IntroductionPage() {
  return (
    <Box>
      <CssBaseline />
      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="large">
        <CompanyIntroduction />
      </Container>
      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="large">
        <MainCustomer />
      </Container>
      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="large">
        <MapPage />
      </Container>
    </Box>
  );
}
