import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Grid } from "@mui/material";
import { useMediaQuery } from '@mui/material';

import MAXIFY_GX6092 from "../components/detail/MAXIFY GX6092";
import MAXIFY_GX7092 from "../components/detail/MAXIFY GX7092";
import PIXMA_E4590 from "../components/detail/PIXMA E4590";
import PIXMA_G2910 from "../components/detail/PIXMA G2910";
import PIXMA_G2915 from "../components/detail/PIXMA G2915";
import PIXMA_MG2490 from "../components/detail/PIXMA MG2490";
import RP_108 from "../components/detail/RP-108";
import SELPHY_CP1500 from "../components/detail/SELPHY CP1500";
import SELPHY_SQUARE_QX10 from "../components/detail/SELPHY SQUARE QX10";


export default function DetailPage() {
  const [pagestarter, setPagestarter] = useState([]);
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  const isMobile = useMediaQuery('(max-width: 768px)');
  useEffect(() => {
    setPagestarter({
      starter: [{ id: 1 }],
    });

    axios.get("/data/products.json").then((datafile) => {
      datafile.data.map((product) => {
        if (product.id === id) {
          setProduct(product);
        }
      });
    })
      ;
  }, []);
  return (
    <Box>
      <CssBaseline />
      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="large">
        {isMobile ? <>
          {/* 모바일일 때 */}
          <Grid sx={{ justifyContent: "center", mx: 9 }}>
            <Grid sx={{ maxWidth: "180px", maxHeight: "180px" }}>
              <img src={product.img} alt="product" height="175px" width="175px" />
            </Grid>
            <Grid sx={{ maxWidth: '600px' }}>
              <Typography sx={{ fontSize: '24px' }}>
                제품명 : {product.name}
              </Typography>
              <Typography sx={{ fontSize: '20px' }}>
                {product.fromdate}
              </Typography>
              <Typography sx={{ fontSize: '20px' }}>
                {product.text1}
              </Typography>
              <Typography sx={{ fontSize: '20px' }}>
                {product.text2}
              </Typography>
              <Typography sx={{ fontSize: '20px' }}>
                {product.text3}
              </Typography>
              <Typography sx={{ fontSize: '20px' }}>
                {product.text4}
              </Typography>
              <Typography sx={{ fontSize: '20px' }} >
                {product.text5}
              </Typography>
            </Grid>
          </Grid>
        </> : <>
          {/* PC환경 일 때 */}
          <Grid sx={{ justifyContent: "center", display: "flex", mx: 9 }}>
            <Grid sx={{ maxWidth: "600px", maxHeight: "600px" }}>
              <img src={product.img} alt="product" height="500px" width="500px" />
            </Grid>
            <Grid sx={{ minWidth: 350, maxWidth: "600px" }}>
              <br /> <br /> <br /> <br />
              <Typography variant="h5" component="h2" gutterBottom>
                제품명 : {product.name}
              </Typography>
              <Typography variant="h6" component="h2" gutterBottom>
                {product.fromdate}
              </Typography>
              <Typography variant="h6" component="h2" gutterBottom>
                {product.text1}
              </Typography>
              <Typography variant="h6" component="h2" gutterBottom>
                {product.text2}
              </Typography>
              <Typography variant="h6" component="h2" gutterBottom>
                {product.text3}
              </Typography>
              <Typography variant="h6" component="h2" gutterBottom>
                {product.text4}
              </Typography>
              <Typography variant="h6" component="h2" gutterBottom>
                {product.text5}
              </Typography>
            </Grid>
          </Grid>
        </>
        }
        {pagestarter.starter &&
          pagestarter.starter.map(() => {
            if (!pagestarter.starter) {
              return <Grid>no data</Grid>
            } else {
              if (product.detailtype === "img")
                return (
                  <Grid
                    sx={{ justifyContent: "center", display: "flex", mx: 9 }}
                  >
                    <img width={'130%'} src={product.detail} alt="" />
                  </Grid>
                );
              else if (product.detailtype === "html") {
                if (product.name === "MAXIFY GX6092") {
                  return <MAXIFY_GX6092></MAXIFY_GX6092>
                }
                else if (product.name === "MAXIFY GX7092") {
                  return <MAXIFY_GX7092></MAXIFY_GX7092>
                }
                else if (product.name === "PIXMA E4590") {
                  return <PIXMA_E4590></PIXMA_E4590>
                }
                else if (product.name === "PIXMA G2910") {
                  return <PIXMA_G2910></PIXMA_G2910>
                }
                else if (product.name === "PIXMA G2915") {
                  return <PIXMA_G2915></PIXMA_G2915>
                }
                else if (product.name === "PIXMA MG2490") {
                  return <PIXMA_MG2490></PIXMA_MG2490>
                }
                else if (product.name === "RP-108") {
                  return <RP_108></RP_108>
                }
                else if (product.name === "SELPHY CP1500") {
                  return <SELPHY_CP1500></SELPHY_CP1500>
                }
                else if (product.name === "SELPHY SQUARE QX10") {
                  return <SELPHY_SQUARE_QX10></SELPHY_SQUARE_QX10>
                }
              }
            }
          })}
      </Container>
    </Box>
  );
}
