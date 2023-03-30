import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Grid } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { minWidth, textAlign } from "@mui/system";
import styles from "./CI.module.css";
const CompanyIntroduction = () => {
  const itemData = [
    {
      img: "/images/intrduction/intrduction1.png",
      title: "intrduction1",
    },
    {
      img: "/images/intrduction/intrduction2.png",
      title: "intrduction2",
    },
    {
      img: "/images/intrduction/intrduction3.png",
      title: "intrduction3",
    },
    {
      img: "/images/intrduction/intrduction4.png",
      title: "intrduction4",
    },
    {
      img: "/images/intrduction/intrduction5.png",
      title: "intrduction5",
    },
  ];

  return (
    <Box>
      <CssBaseline />
      <Container
        component="main"
        sx={{ mt: 8, mb: 2}}
        maxWidth="lg"
      >
        <Grid sx={{ justifyContent: "center", display: "flex", mx: 9 ,minWidth:'128px'}}>
          <Typography variant="h4" component="h1" gutterBottom>
            회사 소개
          </Typography>
        </Grid>
        <Typography variant="h5" component="h2" gutterBottom>
          <Grid sx={{ justifyContent: "center", display: "flex", mx: 9 }}>
            <Grid item xs={4} sx={{ mx: 5 , minWidth:'180px'}}>
              최고의 서비스 응대
            </Grid>
            <Grid item xs={4} sx={{ mx: 5 , minWidth:'180px'}}>
              최상의 품질 공급
            </Grid>
            <Grid item xs={4} sx={{ mx: 5 , minWidth:'180px'}}>
              다양한 유통망 확충
            </Grid>
          </Grid>
        </Typography>
        <Grid
          sx={{
            justifyContent: "center",
            maxHeight: "700px",
            overflowY: "scroll",
          }}
        >
          {itemData.map((item) => (
            <Grid
              sx={{
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
                mx: 9,
              }}
            >
              <img src={`${item.img}`} alt={item.title} loading="lazy" />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
export default CompanyIntroduction;
