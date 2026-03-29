import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import {
  Box,
  Button,
  InputAdornment,
  Pagination,
  Skeleton,
  TextField,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./Products.module.css";
import { useMediaQuery } from "@mui/material";

const categoryLabels = {
  all: "전체",
  LBP: "LBP",
  SFP: "SFP",
  MFP: "MFP",
  MiniPhotoPrinter: "MPP",
};

const categoryDescriptions = {
  all: "전체 제품군을 한 번에 비교할 수 있습니다.",
  LBP: "레이저 프린터 제품군을 빠르게 탐색할 수 있습니다.",
  SFP: "단일 기능 프린터 제품을 중심으로 살펴볼 수 있습니다.",
  MFP: "복합 기능이 필요한 환경에 맞는 제품군입니다.",
  MiniPhotoPrinter: "미니 포토프린터와 관련 액세서리를 안내합니다.",
};

const Categoryall = ({ category }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [select, setSelect] = useState(category || "all");
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(9);
  const [loading, setLoading] = useState(true);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    setItemsPerPage(isMobile ? 6 : 9);
    setCurrentPage(1);
  }, [isMobile]);

  useEffect(() => {
    let isMounted = true;

    setLoading(true);
    setCurrentPage(1);
    setSelect(category || "all");

    Promise.all([
      axios.get("/data/products.json"),
      axios.get("/data/category.json"),
    ])
      .then(([productsResponse, categoriesResponse]) => {
        if (!isMounted) {
          return;
        }

        setProducts(productsResponse.data);
        setCategories(categoriesResponse.data);
      })
      .finally(() => {
        if (isMounted) {
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [category]);

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
    setCurrentPage(1);
  };

  const handleCategoryChange = (nextCategory) => {
    setSelect(nextCategory);
    setCurrentPage(1);
  };

  const filteredProducts = products.filter((product) => {
    const normalizedQuery = searchText.trim().toLowerCase();
    const matchesSearch =
      normalizedQuery === "" ||
      product.name.toLowerCase().includes(normalizedQuery) ||
      product.category.toLowerCase().includes(normalizedQuery);

    const matchesCategory = select === "all" || product.category === select;

    return matchesSearch && matchesCategory;
  });

  const pagedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const activeCategory = categories.find((item) => item.category === select);
  const pageCount = Math.ceil(filteredProducts.length / itemsPerPage);

  return (
    <Box sx={{ mt: { xs: 4, md: 5 } }}>
      <Box
        sx={{
          p: { xs: 2.5, md: 3 },
          borderRadius: "28px",
          border: "1px solid var(--color-line)",
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 0.94) 0%, rgba(255, 255, 255, 0.86) 100%)",
          boxShadow: "var(--shadow-soft)",
        }}
      >
        <Typography variant="subtitle2" color="secondary.main">
          FILTER & SEARCH
        </Typography>
        <Typography sx={{ mt: 1.25 }} variant="h5">
          {categoryDescriptions[select] ||
            "카테고리와 검색어로 원하는 제품을 빠르게 찾을 수 있습니다."}
        </Typography>
        <Typography sx={{ mt: 1, color: "text.secondary" }} variant="body2">
          현재{" "}
          <Box component="span" sx={{ color: "primary.main", fontWeight: 800 }}>
            {filteredProducts.length}
          </Box>
          개의 제품이 표시되고 있습니다.
        </Typography>

        <Box
          sx={{
            mt: 3,
            display: "flex",
            flexWrap: "wrap",
            gap: 1,
          }}
        >
          {categories.map((item) => {
            const active = select === item.category;

            return (
              <Button
                key={item.category}
                onClick={() => handleCategoryChange(item.category)}
                variant={active ? "contained" : "text"}
                color={active ? "primary" : "inherit"}
                sx={{
                  px: 2,
                  color: active ? undefined : "text.secondary",
                  backgroundColor: active
                    ? undefined
                    : "rgba(255, 255, 255, 0.72)",
                  "&:hover": {
                    backgroundColor: active
                      ? undefined
                      : "rgba(15, 23, 42, 0.05)",
                  },
                }}
              >
                {categoryLabels[item.category] || item.category}
              </Button>
            );
          })}
        </Box>

        <TextField
          label="제품명 또는 카테고리 검색"
          value={searchText}
          onChange={handleSearchChange}
          fullWidth
          sx={{ mt: 3 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchRoundedIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      <Box sx={{ mt: 3.5 }}>
        {loading ? (
          <main className={styles.catalogGrid}>
            {Array.from({ length: itemsPerPage }).map((_, index) => (
              <Box key={index} className={styles.productCard}>
                <Skeleton
                  variant="rectangular"
                  sx={{ width: "100%", aspectRatio: "1 / 1", borderRadius: "24px" }}
                />
                <Box sx={{ pt: 2.5, display: "grid", gap: 1.2 }}>
                  <Skeleton variant="text" sx={{ width: "28%", height: 22 }} />
                  <Skeleton variant="text" sx={{ width: "72%", height: 34 }} />
                  <Skeleton variant="text" sx={{ width: "100%", height: 22 }} />
                  <Skeleton variant="text" sx={{ width: "88%", height: 22 }} />
                </Box>
              </Box>
            ))}
          </main>
        ) : filteredProducts.length > 0 ? (
          <main className={styles.catalogGrid}>
            {pagedProducts.map((product) => {
              const previewLines = [product.text1, product.text2]
                .filter(Boolean)
                .slice(0, isMobile ? 1 : 2);

              return (
                <Link
                  key={product.id}
                  className={styles.productCard}
                  to={`/products/${product.id}`}
                >
                  <div className={styles.productImageWrap}>
                    <img
                      className={styles.productImage}
                      src={product.img}
                      alt={`${product.name} 제품 이미지`}
                    />
                  </div>

                  <div className={styles.productContent}>
                    <div className={styles.productBadgeRow}>
                      <span className={styles.productBadge}>
                        {categoryLabels[product.category] || product.category}
                      </span>
                      {activeCategory && select !== "all" ? (
                        <span className={styles.productHint}>추천 라인업</span>
                      ) : null}
                    </div>

                    <div className={styles.productName}>{product.name}</div>
                    <div className={styles.productDate}>
                      {product.fromdate || "상세 페이지에서 출시 정보를 확인하세요."}
                    </div>

                    <div className={styles.productSpecs}>
                      {previewLines.map((line) => (
                        <span key={line}>{line}</span>
                      ))}
                    </div>
                  </div>

                  <div className={styles.productMeta}>
                    <span>상세 보기</span>
                    <span className={styles.productArrow}>
                      <ArrowForwardRoundedIcon fontSize="small" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </main>
        ) : (
          <Box className={styles.emptyState}>
            <Typography variant="h5">검색 결과가 없습니다.</Typography>
            <Typography sx={{ mt: 1.5, maxWidth: 460 }} color="text.secondary">
              ‘{searchText || categoryLabels[select] || select}’에 맞는 제품을
              찾지 못했습니다. 검색어를 바꾸거나 다른 카테고리를 선택해 주세요.
            </Typography>
            <Button
              sx={{ mt: 2.5 }}
              variant="outlined"
              onClick={() => {
                setSearchText("");
                handleCategoryChange("all");
              }}
            >
              필터 초기화
            </Button>
          </Box>
        )}
      </Box>

      {!loading && pageCount > 1 ? (
        <Box sx={{ mt: 4, display: "flex", justifyContent: "center" }}>
          <Pagination
            count={pageCount}
            page={currentPage}
            onChange={(_, page) => setCurrentPage(page)}
            size={isMobile ? "medium" : "large"}
          />
        </Box>
      ) : null}
    </Box>
  );
};

export default Categoryall;
