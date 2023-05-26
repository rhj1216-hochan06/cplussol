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
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';

const CompanyIntroduction = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const theme = useTheme();
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
        sx={{ mt: 8, mb: 2 }}
        maxWidth="lg"
      >
        {isMobile ?
          <>
            {/* 모바일일 때 */}
            <Grid sx={{ justifyContent: "center", display: "flex", mx: 9, minWidth: '128px' }}>
              <Typography variant="h4" component="h1" gutterBottom>
                회사 소개
              </Typography>
            </Grid>
            <Typography variant="h5" component="h2"   >
              <Grid container sx={{ justifyContent: "center", mx: 9, display: 'inline-block', margin: 'auto' }}>
                <Grid item xs={3} sx={{ mx: 3, minWidth: '220px', margin: 'auto' }}>
                  1. 최고의 서비스 응대
                </Grid>
                <Grid item xs={3} sx={{ mx: 3, minWidth: '220px', margin: 'auto' }}>
                  2. 최상의 품질 공급
                </Grid>
                <Grid item xs={3} sx={{ mx: 3, minWidth: '220px', margin: 'auto' }}>
                  3. 다양한 유통망 확충
                </Grid>
              </Grid>
            </Typography>
            <Grid
              sx={{
                justifyContent: "center",
                maxWidth: "95%",
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
                  <img src={`${item.img}`} width={'100%'} alt={item.title} loading="lazy" />
                </Grid>
              ))}
            </Grid>

          </> : <>
            {/* PC환경 일 때 */}
            <Grid sx={{ justifyContent: "center", display: "flex", minWidth: '128px' }}>
              <Typography variant="h4" component="h1" gutterBottom>
                회사 소개
              </Typography>
            </Grid>
            <Typography variant="h5" component="h2" gutterBottom>
              <Grid container sx={{ justifyContent: "center", display: "flex" }}>
                <Grid item xs={3} sx={{ mx: 3, minWidth: '180px' }}>
                  최고의 서비스 응대
                </Grid>
                <Grid item xs={3} sx={{ mx: 3, minWidth: '180px' }}>
                  최상의 품질 공급
                </Grid>
                <Grid item xs={3} sx={{ mx: 3, minWidth: '180px' }}>
                  다양한 유통망 확충
                </Grid>
              </Grid>
            </Typography>
            <Grid
              sx={{
                justifyContent: "center",
                maxWidth: "100%",
                overflowY: "scroll",
              }}
            >
              {itemData.map((item) => (
                <Grid
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    textAlign: "center",

                  }}
                >
                  <img src={`${item.img}`} alt={item.title} loading="lazy" />
                </Grid>
              ))}
            </Grid>
          </>}

      </Container>
    </Box>
  );
};
export default CompanyIntroduction;
