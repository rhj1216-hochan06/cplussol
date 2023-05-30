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
import { Pagination } from "@mui/material";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

const Categoryall = (props) => {
  const [products, setProducts] = useState([]);
  const [select, setSelect] = useState("all");
  const [searchText, setSearchText] = useState(""); // 검색어 상태 추가
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 상태 추가
  const [itemsPerPage, setItemsPerPage] = useState(12); // 페이지당 아이템 개수 상태 추가
  const { category } = props;
  const isMobile = useMediaQuery('(max-width: 768px)');

  useEffect(() => {
    {
      isMobile ? setItemsPerPage(6) : setItemsPerPage(12)
    }
    axios.get("/data/products.json").then((datafile) => {
      setProducts(datafile.data);
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

  // 검색어 변경 이벤트 핸들러
  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
    setCurrentPage(1); // 검색어 변경 시 페이지를 1페이지로 초기화
  };

  // 페이지 변경 이벤트 핸들러
  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  // 필터링된 상품 목록을 반환하는 함수
  const getFilteredProducts = () => {
    let filteredProducts = products;

    // 검색어로 상품 필터링
    if (searchText !== "") {
      filteredProducts = filteredProducts.filter((product) =>
        product.name.toLowerCase().includes(searchText.toLowerCase()) || product.category.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    // 선택된 카테고리로 상품 필터링
    if (select !== "all") {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === select
      );
    }

    return filteredProducts;
  };

  // 페이징된 상품 목록을 반환하는 함수
  const getPagedProducts = () => {
    const filteredProducts = getFilteredProducts();

    // 페이지에 해당하는 상품 목록 반환
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredProducts.slice(startIndex, endIndex);
  };

  return (
    <Box>
      <CssBaseline />
      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="lg">


        {isMobile ? (
          <>
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
            {/* 검색 입력 필드 */}
            <TextField
              label="검색"
              variant="outlined"
              fullWidth
              onChange={handleSearchChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton>
                      <Search />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </>
        ) : (
          <>
            {/* PC환경 일 때 */}
            <div className={styles.filter}>
              <p onClick={all}>전체보기</p>
              <p onClick={LBP}>L B P</p>
              <p onClick={SFP}>S F P</p>
              <p onClick={MFP}>M F P</p>
              <p onClick={MiniPhotoPrinter}>MiniPhotoPrinter</p>
            </div>
            {/* 검색 입력 필드 */}
            <div style={{ display: "flex", justifyContent: "center", maxWidth: "80%", margin: "0 auto" }}>
              <TextField
                label="검색"
                variant="outlined"
                fullWidth
                onChange={handleSearchChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton>
                        <Search />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              /></div>
          </>
        )}

        <main className={styles.flex_wrap}>
          {getPagedProducts().length > 0 ? (
            getPagedProducts().map((product) => (
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
            ))
          ) : (
            <Grid>no data</Grid>
          )}
        </main>
        {/* 페이징 기능 */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          {
            isMobile ?
              <Pagination
                count={Math.ceil(getFilteredProducts().length / itemsPerPage)}
                page={currentPage}
                onChange={handlePageChange}
              />
              : <Pagination
                count={Math.ceil(getFilteredProducts().length / itemsPerPage)}
                page={currentPage}
                onChange={handlePageChange}
                size="large"
              />
          }
        </div>
        <Typography style={{ float: 'right' }}>현재 페이지: {currentPage}</Typography>
      </Container>
    </Box>
  );
};

export default Categoryall;
