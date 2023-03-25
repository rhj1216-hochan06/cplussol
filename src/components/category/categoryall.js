import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Grid } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Products.module.css";
import { Link } from "react-router-dom";

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
        <div className={styles.filter}>
          <p onClick={() => {}}>신상품</p>
          <p onClick={() => {}}>낮은 가격</p>
          <p onClick={() => {}}>높은 가격</p>
        </div>
        <main className={styles.flex_wrap}>
          {products &&
            products.map((product) => {
              if (!product.id) {
                return <Grid>no data</Grid>;
              } else {
                return (
                  <div className={styles.product}>
                    <div class="item" data-aos="slide-up">
                      <Link to={`/products/${product.id}`}>
                        <div className={styles.product_image}>
                          <img src={product.img} alt="product" />
                        </div>
                      </Link>
                      <div className={styles.store}>
                        <span>{product.category}</span>
                      </div>
                      <div className={styles.product_name}>
                        <span>{product.name}</span>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
        </main>
      </Container>
    </Box>
  );
};
export default Categoryall;
