import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Grid } from "@mui/material";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "../components/main/Products.module.css";

const mainSlideImages = [
  "/images/main/%EC%9A%B0%EC%88%98%ED%8C%8C%ED%8A%B8%EB%84%88%EC%9D%B8%EC%A6%9D1.jpg",
  "/images/main/%EC%9A%B0%EC%88%98%ED%8C%8C%ED%8A%B8%EB%84%88%EC%9D%B8%EC%A6%9D2.jpg",
  "/images/main/%EC%82%AC%EB%AC%B4%EC%8B%A4%EC%A0%84%EA%B2%BD.jpg",
  "/images/main/%EC%82%AC%EB%AC%B4%EC%8B%A4%EC%A0%84%EA%B2%BD1.jpg",
  "/images/main/%EC%82%AC%EB%AC%B4%EC%8B%A4%EB%82%B4%EB%B6%801.jpg",
  "/images/main/%EC%82%AC%EB%AC%B4%EC%8B%A4%EB%82%B4%EB%B6%802.jpg",
  "/images/main/%EC%82%AC%EB%AC%B4%EC%8B%A4%EB%82%B4%EB%B6%803.jpg",
  "/images/main/%EC%99%B8%EA%B4%803.PNG",
  "/images/main/%EC%99%B8%EA%B4%802.PNG",
  "/images/main/%EC%B0%BD%EA%B3%A0.jpg",
  "/images/main/%EC%B0%BD%EA%B3%A02.jpg",
  "/images/main/%EC%B0%BD%EA%B3%A03.jpg",
  "/images/main/%EC%B0%BD%EA%B3%A04.jpg",
  "/images/main/%EC%B0%BD%EA%B3%A05.jpg",
];

export default function Main() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("/data/category.json").then((datafile) => {
      setProducts(datafile.data);
    });
  }, []);

  return (
    <Box>
      <CssBaseline />
      <Container
        component="main"
        maxWidth={false}
        sx={{ mt: 8, mb: 2, width: "min(100%, 980px)", px: { xs: 2, sm: 3 } }}
      >
        <Box sx={{ width: "min(100%, 760px)", mx: "auto" }}>
          <Typography
            variant="h6"
            component="h2"
            gutterBottom
            sx={{ textAlign: "left" }}
          >
          씨플러스솔루션에 오신 것을 환영합니다.
          </Typography>
        </Box>
        <div className={styles.mainSlider}>
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
            className={styles.mainSwiper}
          >
            {mainSlideImages.map((imageSrc, index) => (
              <SwiperSlide key={imageSrc}>
                <div className={styles.mainSlide}>
                  <div className={styles.mainSlideFrame}>
                    <img
                      className={styles.mainSlideImage}
                      src={imageSrc}
                      alt={`씨플러스솔루션 메인 이미지 ${index + 1}`}
                      decoding="async"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
      <main className={styles.flex_wrap}>
        {products &&
          products.map((product) => {
            if (!product.category) {
              return <Grid key="no-data">no data</Grid>;
            }

            return (
              <div className={styles.product} key={product.category}>
                <div className="item" data-aos="slide-up">
                  <Link to={`/category/${product.category}`}>
                    <div className={styles.product_image}>
                      <img src={product.img} alt={`${product.category} 카테고리`} />
                    </div>
                  </Link>
                  <div className={styles.product_name}>
                    <span>{product.category}</span>
                  </div>
                </div>
              </div>
            );
          })}
      </main>
    </Box>
  );
}
