import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper React components
import "swiper/css"; // Import Swiper styles
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Grid } from "@mui/material";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "../components/main/Products.module.css";
import { useMediaQuery } from '@mui/material';

export default function Main() {
  const [products, setProducts] = useState([]);
  const isMobile = useMediaQuery('(max-width: 835px)');

  useEffect(() => {
    axios.get("/data/category.json").then((datafile) => {
      setProducts(datafile.data);
      // console.log(products);

    });

  }, []);

  return (
    <Box>
      <CssBaseline />
      {/* 나중에 지울것 맵 지도 페이지 연결 */}
      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
        <Typography variant="h6" component="h2" gutterBottom>
          씨플러스 솔루션에 오신걸 환영합니다
        </Typography>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {isMobile ? <>
            {/* 모바일일 때 */}
            <SwiperSlide>
              <Grid sx={{ justifyContent: "center", display: "flex" }}>
                <img
                  src="/images/main/우수파트너인증1.jpg"
                  width="300px"
                  height="300px"
                />
              </Grid>
            </SwiperSlide>
            <SwiperSlide>
              <Grid sx={{ justifyContent: "center", display: "flex" }}>
                <img
                  src="/images/main/우수파트너인증2.jpg"
                  width="300px"
                  height="300px"
                />
              </Grid>
            </SwiperSlide>
            <SwiperSlide>
              <Grid sx={{ justifyContent: "center", display: "flex" }}>
                <img
                  src="/images/main/사무실전경1.jpg"
                  width="300px"
                  height="300px"
                />
              </Grid>
            </SwiperSlide>
            <SwiperSlide>
              <Grid sx={{ justifyContent: "center", display: "flex" }}>
                <img
                  src="/images/main/사무실전경.jpg"
                  width="300px"
                  height="300px"
                />
              </Grid>
            </SwiperSlide>
            <SwiperSlide>
              <Grid sx={{ justifyContent: "center", display: "flex" }}>
                <img
                  src="/images/main/사무실내부1.jpg"
                  width="300px"
                  height="300px"
                />
              </Grid>
            </SwiperSlide>
            <SwiperSlide>
              <Grid sx={{ justifyContent: "center", display: "flex" }}>
                <img
                  src="/images/main/사무실내부2.jpg"
                  width="300px"
                  height="300px"
                />
              </Grid>
            </SwiperSlide>
            <SwiperSlide>
              <Grid sx={{ justifyContent: "center", display: "flex" }}>
                <img
                  src="/images/main/사무실내부3.jpg"
                  width="300px"
                  height="300px"
                />
              </Grid>
            </SwiperSlide>
            <SwiperSlide>
              <Grid sx={{ justifyContent: "center", display: "flex" }}>
                <img src="/images/main/외관3.PNG" width="300px" height="300px" />
              </Grid>
            </SwiperSlide>
            <SwiperSlide>
              <Grid sx={{ justifyContent: "center", display: "flex" }}>
                <img src="/images/main/외관2.PNG" width="300px" height="300px" />
              </Grid>
            </SwiperSlide>
            <SwiperSlide>
              <Grid sx={{ justifyContent: "center", display: "flex" }}>
                <img src="/images/main/창고.jpg" width="300px" height="300px" />
              </Grid>
            </SwiperSlide></> : <>
            {/* PC환경 일 때 */}
            <SwiperSlide>
              <Grid sx={{ justifyContent: "center", display: "flex" }}>
                <img
                  src="/images/main/우수파트너인증1.jpg"
                  width="600px"
                  height="600px"
                />
              </Grid>
            </SwiperSlide>
            <SwiperSlide>
              <Grid sx={{ justifyContent: "center", display: "flex" }}>
                <img
                  src="/images/main/우수파트너인증2.jpg"
                  width="600px"
                  height="600px"
                />
              </Grid>
            </SwiperSlide>
            <SwiperSlide>
              <Grid sx={{ justifyContent: "center", display: "flex" }}>
                <img
                  src="/images/main/사무실전경.jpg"
                  width="600px"
                  height="600px"
                />
              </Grid>
            </SwiperSlide>
            <SwiperSlide>
              <Grid sx={{ justifyContent: "center", display: "flex" }}>
                <img
                  src="/images/main/사무실내부1.jpg"
                  width="600px"
                  height="600px"
                />
              </Grid>
            </SwiperSlide>
            <SwiperSlide>
              <Grid sx={{ justifyContent: "center", display: "flex" }}>
                <img
                  src="/images/main/사무실내부2.jpg"
                  width="600px"
                  height="600px"
                />
              </Grid>
            </SwiperSlide>
            <SwiperSlide>
              <Grid sx={{ justifyContent: "center", display: "flex" }}>
                <img
                  src="/images/main/사무실내부3.jpg"
                  width="600px"
                  height="600px"
                />
              </Grid>
            </SwiperSlide>
            <SwiperSlide>
              <Grid sx={{ justifyContent: "center", display: "flex" }}>
                <img src="/images/main/외관3.PNG" width="600px" height="600px" />
              </Grid>
            </SwiperSlide>
            <SwiperSlide>
              <Grid sx={{ justifyContent: "center", display: "flex" }}>
                <img src="/images/main/외관2.PNG" width="600px" height="600px" />
              </Grid>
            </SwiperSlide>
            <SwiperSlide>
              <Grid sx={{ justifyContent: "center", display: "flex" }}>
                <img src="/images/main/창고.jpg" width="600px" height="600px" />
              </Grid>
            </SwiperSlide></>}

        </Swiper>
      </Container>
      <main className={styles.flex_wrap}>
        {products &&
          products.map((product) => {
            if (!product.category) {
              return <Grid>no data</Grid>;
            } else {
              return (
                <div className={styles.product}>
                  <div class="item" data-aos="slide-up">
                    <Link to={`/category/${product.category}`}>
                      <div className={styles.product_image}>
                        <img src={product.img} alt="product" />
                      </div>
                    </Link>
                    <div className={styles.product_name}>
                      <span>{product.category}</span>
                    </div>
                  </div>
                </div>
              );
            }
          })}
      </main>
    </Box>
  );
}
