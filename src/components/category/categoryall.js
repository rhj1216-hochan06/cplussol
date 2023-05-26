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
import { useMediaQuery } from '@mui/material';


const Categoryall = (props) => {
  const [products, setProducts] = useState([]);
  const [select, setSelect] = useState("all");
  const { category } = props;
  const isMobile = useMediaQuery('(max-width: 768px)');

  useEffect(() => {
    axios.get("/data/products.json").then((datafile) => {
      setProducts(datafile.data);
      //console.log(products);
      setSelect(category);
    });
  }, []);
  const all = () => {
    setSelect("all");
  };
  const LBP = () => {
    setSelect("LBP");
  };

  const SFP = () => {
    setSelect("SFP");
  };
  const MFP = () => {
    setSelect("MFP");
  };
  const MiniPhotoPrinter = () => {
    setSelect("MiniPhotoPrinter");
  };

  return (
    <Box>
      <CssBaseline />
      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="lg">
        {isMobile ? <>
          {/* 모바일일 때 */}
          <div className={styles.filter}>
            <p style={{ justifyContent: "center", minWidth: '90px' }} onClick={all}>전체보기</p>
            <div>
              <p style={{ justifyContent: "center", minWidth: '90px' }} onClick={LBP}>L B P</p>
              <p style={{ justifyContent: "center", minWidth: '90px' }} onClick={SFP}>S F P</p>
              <p style={{ justifyContent: "center", minWidth: '90px' }} onClick={MFP}>M F P</p>
              <p style={{ justifyContent: "center", minWidth: '90px' }} onClick={MiniPhotoPrinter}>M P P</p>
            </div>

          </div>
        </> : <>
          {/* PC환경 일 때 */}
          <div className={styles.filter}>
            <p onClick={all}>전체보기</p>
            <p onClick={LBP}>L B P</p>
            <p onClick={SFP}>S F P</p>
            <p onClick={MFP}>M F P</p>
            <p onClick={MiniPhotoPrinter}>MiniPhotoPrinter</p>
          </div>
        </>}


        <main className={styles.flex_wrap}>
          {products &&
            products.map((product) => {
              if (!product.id) {
                return <Grid>no data</Grid>;
              } else {
                if (select === "all" || product.category === select)
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
