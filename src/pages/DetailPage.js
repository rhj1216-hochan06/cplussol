import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Grid } from "@mui/material";

export default function DetailPage() {
  const [pagestarter, setPagestarter] = useState([]);
  const [product, setProduct] = useState([]);
  const { id } = useParams();
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
    });
  }, []);
  function createMarkup() {
    if (product.name === "PIXMA MG2490")
      return {
        __html:
          '<iframe src="/images/productsdetail/PIXMA MG2490.html" width="100%" height="700px"></iframe>',
      };
    else if (product.name === "PIXMA E4590")
      return {
        __html:
          '<iframe src="/images/productsdetail/PIXMA E4590.html" width="100%" height="700px"></iframe>',
      };
    else if (product.name === "PIXMA G2910")
      return {
        __html:
          '<iframe src="/images/productsdetail/PIXMA G2910.html" width="100%" height="700px"></iframe>',
      };
    else if (product.name === "PIXMA G2915")
      return {
        __html:
          '<iframe src="/images/productsdetail/PIXMA G2915.html" width="100%" height="700px"></iframe>',
      };
    else if (product.name === "MAXIFY GX6092")
      return {
        __html:
          '<iframe src="/images/productsdetail/MAXIFY GX6092.html" width="100%" height="700px"></iframe>',
      };
    else if (product.name === "MAXIFY GX7092")
      return {
        __html:
          '<iframe src="/images/productsdetail/MAXIFY GX7092.html" width="100%" height="700px"></iframe>',
      };
    else if (product.name === "SELPHY CP1500")
      return {
        __html:
          '<iframe src="/images/productsdetail/SELPHY CP1500.html" width="100%" height="700px"></iframe>',
      };
    else if (product.name === "SELPHY SQUARE QX10")
      return {
        __html:
          '<iframe src="/images/productsdetail/SELPHY SQUARE QX10.html" width="100%" height="700px"></iframe>',
      };
    else if (product.name === "RP-108")
      return {
        __html:
          '<iframe src="/images/productsdetail/SELPHY SQUARE QX10.html" width="100%" height="700px"></iframe>',
      };
  }

  return (
    <Box>
      <CssBaseline />
      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="large">
        <Grid sx={{ justifyContent: "center", display: "flex", mx: 9 }}>
          <Grid sx={{ maxWidth: "600px", maxHeight: "600px" }}>
            <img src={product.img} alt="product" height="600px" width="600px" />
          </Grid>
          <Grid sx={{ minWidth: 350 }}>
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

        {pagestarter.starter &&
          pagestarter.starter.map(() => {
            if (!pagestarter.starter) {
              return <Grid>no data</Grid>;
            } else {
              if (product.detailtype === "img")
                return (
                  <Grid
                    sx={{ justifyContent: "center", display: "flex", mx: 9 }}
                  >
                    <img src={product.detail} alt="" />;
                  </Grid>
                );
              else if (product.detailtype === "html") {
                return <div dangerouslySetInnerHTML={createMarkup()} />;
              }
            }
          })}
      </Container>
    </Box>
  );
}
