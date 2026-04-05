import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Products.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useMediaQuery } from '@mui/material';
import { Pagination } from "@mui/material";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

const Categoryall = (props) => {
  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState(""); // 검색어 상태 추가
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 상태 추가
  const [itemsPerPage, setItemsPerPage] = useState(12); // 페이지당 아이템 개수 상태 추가
  const { category } = props;
  const isMobile = useMediaQuery('(max-width: 768px)');
  const navigate = useNavigate();
  const selectedCategory = category || "all";
  const priorityProductNames = ["iRC3326", "MAXIFY GX7192"];

  useEffect(() => {
    setItemsPerPage(isMobile ? 6 : 12);
  }, [isMobile]);

  useEffect(() => {
    axios.get("/data/products.json").then((datafile) => {
      setProducts(datafile.data);
    });
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory]);

  const changeCategory = (nextCategory) => {
    if (nextCategory === selectedCategory) {
      setCurrentPage(1);
      return;
    }

    navigate(`/category/${nextCategory}`);
  };

  const all = () => {
    changeCategory("all");
  };

  const LBP = () => {
    changeCategory("LBP");
  };

  const SFP = () => {
    changeCategory("SFP");
  };

  const MFP = () => {
    changeCategory("MFP");
  };

  const IR = () => {
    changeCategory("IR");
  };

  const MiniPhotoPrinter = () => {
    changeCategory("MiniPhotoPrinter");
  };

  const getFilterClassName = (categoryName) =>
    selectedCategory === categoryName ? styles.filterSelected : "";

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
    if (selectedCategory !== "all") {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === selectedCategory
      );
    }

    if (selectedCategory === "all") {
      filteredProducts = [...filteredProducts].sort((a, b) => {
        const aPriority = priorityProductNames.indexOf(a.name);
        const bPriority = priorityProductNames.indexOf(b.name);

        if (aPriority === -1 && bPriority === -1) return 0;
        if (aPriority === -1) return 1;
        if (bPriority === -1) return -1;
        return aPriority - bPriority;
      });
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
              <p className={getFilterClassName("all")} style={{ justifyContent: "center", minWidth: '45px' }} onClick={all}>전체</p>
              <p className={getFilterClassName("IR")} style={{ justifyContent: "center", minWidth: '45px' }} onClick={IR}>IR</p>
              <p className={getFilterClassName("LBP")} style={{ justifyContent: "center", minWidth: '45px' }} onClick={LBP}>LBP</p>
              <p className={getFilterClassName("SFP")} style={{ justifyContent: "center", minWidth: '45px' }} onClick={SFP}>SFP</p>
              <p className={getFilterClassName("MFP")} style={{ justifyContent: "center", minWidth: '45px' }} onClick={MFP}>MFP</p>
              <p className={getFilterClassName("MiniPhotoPrinter")} style={{ justifyContent: "center", minWidth: '45px' }} onClick={MiniPhotoPrinter}>MPP</p>

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
              <p className={getFilterClassName("all")} onClick={all}>전체보기</p>
              <p className={getFilterClassName("IR")} onClick={IR}>I R</p>
              <p className={getFilterClassName("LBP")} onClick={LBP}>L B P</p>
              <p className={getFilterClassName("SFP")} onClick={SFP}>S F P</p>
              <p className={getFilterClassName("MFP")} onClick={MFP}>M F P</p>
              <p className={getFilterClassName("MiniPhotoPrinter")} onClick={MiniPhotoPrinter}>MiniPhotoPrinter</p>
            </div>
            {/* 검색 입력 필드 */}
            <div style={{ display: "flex", justifyContent: "center", maxWidth: "85%", margin: "0 auto" }}>
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
          ) :
            (
              isMobile ?
                <div className={styles.search_no_results}>
                  <div style={{ minWidth: '150px' }}>
                    <h3>‘{searchText}’ 검색 결과가 없습니다.</h3>

                  </div>
                </div>
                : <div className={styles.search_no_results}>
                  <div style={{ minWidth: '500px' }}>
                    <h3>‘{searchText}’ 검색 결과가 없습니다.</h3>
                    검색어를 다시 한번 확인해주세요.
                  </div>
                </div>
            )
          }
        </main>
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
      </Container>
    </Box >
  );
};

export default Categoryall;
