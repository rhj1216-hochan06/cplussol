import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import {
  Box,
  Button,
  Chip,
  Container,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

import MAXIFY_GX6092 from "../components/detail/MAXIFY GX6092";
import MAXIFY_GX7092 from "../components/detail/MAXIFY GX7092";
import PIXMA_E4590 from "../components/detail/PIXMA E4590";
import PIXMA_G2910 from "../components/detail/PIXMA G2910";
import PIXMA_G2915 from "../components/detail/PIXMA G2915";
import PIXMA_MG2490 from "../components/detail/PIXMA MG2490";
import RP_108 from "../components/detail/RP-108";
import SELPHY_CP1500 from "../components/detail/SELPHY CP1500";
import SELPHY_SQUARE_QX10 from "../components/detail/SELPHY SQUARE QX10";

const detailComponents = {
  "MAXIFY GX6092": MAXIFY_GX6092,
  "MAXIFY GX7092": MAXIFY_GX7092,
  "PIXMA E4590": PIXMA_E4590,
  "PIXMA G2910": PIXMA_G2910,
  "PIXMA G2915": PIXMA_G2915,
  "PIXMA MG2490": PIXMA_MG2490,
  "RP-108": RP_108,
  "SELPHY CP1500": SELPHY_CP1500,
  "SELPHY SQUARE QX10": SELPHY_SQUARE_QX10,
};

export default function DetailPage() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    let isMounted = true;

    setLoading(true);

    axios
      .get("/data/products.json")
      .then((response) => {
        if (!isMounted) {
          return;
        }

        const foundProduct = response.data.find((item) => item.id === id) || null;
        setProduct(foundProduct);
      })
      .finally(() => {
        if (isMounted) {
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [id]);

  const DetailComponent = product ? detailComponents[product.name] : null;
  const detailLines = product
    ? [product.text1, product.text2, product.text3, product.text4, product.text5].filter(
        Boolean
      )
    : [];

  return (
    <Box component="main" sx={{ pb: { xs: 7, md: 10 } }}>
      <Container
        maxWidth="xl"
        sx={{
          maxWidth: "var(--page-max)",
          pt: { xs: 4, md: 6 },
        }}
      >
        <Button
          component={Link}
          to={product ? `/category/${product.category}` : "/category/all"}
          color="primary"
          startIcon={<ArrowBackRoundedIcon />}
          sx={{ px: 0, mb: 2 }}
        >
          카테고리로 돌아가기
        </Button>

        {loading ? (
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "minmax(0, 0.92fr) minmax(0, 1.08fr)" },
              gap: 3,
            }}
          >
            <Skeleton variant="rectangular" sx={{ minHeight: 420, borderRadius: "32px" }} />
            <Skeleton variant="rectangular" sx={{ minHeight: 420, borderRadius: "32px" }} />
            <Skeleton
              variant="rectangular"
              sx={{ gridColumn: "1 / -1", minHeight: 520, borderRadius: "32px" }}
            />
          </Box>
        ) : !product ? (
          <Box
            sx={{
              p: { xs: 3, md: 4 },
              borderRadius: "32px",
              border: "1px dashed var(--color-line-strong)",
              backgroundColor: "rgba(255, 255, 255, 0.84)",
              textAlign: "center",
            }}
          >
            <Typography variant="h4">제품 정보를 찾을 수 없습니다.</Typography>
            <Typography sx={{ mt: 1.5 }} color="text.secondary">
              요청하신 제품이 목록에 없거나 주소가 변경되었습니다.
            </Typography>
            <Button
              component={Link}
              to="/category/all"
              variant="outlined"
              sx={{ mt: 2.5 }}
            >
              전체 제품 보기
            </Button>
          </Box>
        ) : (
          <>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  md: "minmax(0, 0.92fr) minmax(0, 1.08fr)",
                },
                gap: 3,
              }}
            >
              <Box
                sx={{
                  p: { xs: 2.5, md: 3 },
                  borderRadius: "32px",
                  border: "1px solid var(--color-line)",
                  background:
                    "linear-gradient(180deg, rgba(255, 255, 255, 0.96) 0%, rgba(255, 255, 255, 0.86) 100%)",
                  boxShadow: "var(--shadow-soft)",
                }}
              >
                <Box
                  sx={{
                    borderRadius: "28px",
                    overflow: "hidden",
                    background:
                      "linear-gradient(180deg, rgba(15, 23, 42, 0.03) 0%, rgba(15, 23, 42, 0.08) 100%)",
                  }}
                >
                  <Box
                    component="img"
                    src={product.img}
                    alt={`${product.name} 제품 이미지`}
                    sx={{
                      width: "100%",
                      height: { xs: 320, md: 520 },
                      objectFit: "contain",
                      p: { xs: 2, md: 3 },
                    }}
                  />
                </Box>
              </Box>

              <Box
                sx={{
                  p: { xs: 3, md: 4 },
                  borderRadius: "32px",
                  border: "1px solid var(--color-line)",
                  background:
                    "linear-gradient(180deg, rgba(255, 255, 255, 0.96) 0%, rgba(255, 255, 255, 0.86) 100%)",
                  boxShadow: "var(--shadow-soft)",
                }}
              >
                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                  <Chip label={product.category} color="secondary" />
                  <Chip
                    label={product.detailtype === "html" ? "상세 콘텐츠" : "상세 이미지"}
                  />
                </Stack>

                <Typography sx={{ mt: 2.5 }} variant="h2">
                  {product.name}
                </Typography>
                <Typography sx={{ mt: 1.25 }} color="text.secondary">
                  {product.fromdate || "상세 출시 정보는 제품 본문에서 확인할 수 있습니다."}
                </Typography>

                <Box
                  sx={{
                    mt: 3,
                    display: "grid",
                    gap: 1.25,
                  }}
                >
                  {detailLines.map((line) => (
                    <Box
                      key={line}
                      sx={{
                        display: "flex",
                        gap: 1.25,
                        alignItems: "flex-start",
                        p: 1.5,
                        borderRadius: "18px",
                        backgroundColor: "rgba(15, 23, 42, 0.04)",
                      }}
                    >
                      <Inventory2OutlinedIcon
                        sx={{ mt: 0.15, color: "primary.main", fontSize: 20 }}
                      />
                      <Typography color="text.primary">{line}</Typography>
                    </Box>
                  ))}
                </Box>

                <Box
                  sx={{
                    mt: 3,
                    display: "grid",
                    gridTemplateColumns: { xs: "1fr", sm: "repeat(2, minmax(0, 1fr))" },
                    gap: 1.5,
                  }}
                >
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: "22px",
                      border: "1px solid var(--color-line)",
                    }}
                  >
                    <Typography variant="subtitle2" color="text.secondary">
                      제품 문의
                    </Typography>
                    <Typography sx={{ mt: 0.75 }} variant="h6">
                      02-2622-8081~2
                    </Typography>
                    <Typography sx={{ mt: 0.5 }} color="text.secondary" variant="body2">
                      구매 및 도입 상담은 전화 문의가 가장 빠릅니다.
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: "22px",
                      border: "1px solid var(--color-line)",
                    }}
                  >
                    <Typography variant="subtitle2" color="text.secondary">
                      상세 유형
                    </Typography>
                    <Typography sx={{ mt: 0.75 }} variant="h6">
                      {product.detailtype === "html" ? "콘텐츠형 안내" : "이미지형 안내"}
                    </Typography>
                    <Typography sx={{ mt: 0.5 }} color="text.secondary" variant="body2">
                      제품 특징을 본문 섹션에서 이어서 확인할 수 있습니다.
                    </Typography>
                  </Box>
                </Box>

                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={1.5}
                  sx={{ mt: 3 }}
                >
                  <Button
                    href="tel:02-2622-8081"
                    variant="contained"
                    endIcon={<LocalShippingOutlinedIcon />}
                  >
                    상담 문의하기
                  </Button>
                  <Button
                    component={Link}
                    to={`/category/${product.category}`}
                    variant="outlined"
                    endIcon={<ArrowForwardRoundedIcon />}
                  >
                    같은 카테고리 보기
                  </Button>
                </Stack>
              </Box>
            </Box>

            <Box
              sx={{
                mt: 4,
                p: { xs: 2.5, md: 4 },
                borderRadius: "32px",
                border: "1px solid var(--color-line)",
                background:
                  "linear-gradient(180deg, rgba(255, 255, 255, 0.96) 0%, rgba(255, 255, 255, 0.86) 100%)",
                boxShadow: "var(--shadow-soft)",
              }}
            >
              <Typography variant="subtitle2" color="secondary.main">
                PRODUCT DETAIL
              </Typography>
              <Typography sx={{ mt: 1.25 }} variant="h4">
                상세 정보
              </Typography>
              <Typography sx={{ mt: 1, color: "text.secondary" }}>
                제품 특징과 상세 이미지를 한 화면에서 확인할 수 있도록 정리했습니다.
              </Typography>

              <Box
                sx={{
                  mt: 3,
                  "& img": {
                    width: "100%",
                    maxWidth: "100%",
                    height: "auto",
                    display: "block",
                    marginInline: "auto",
                    borderRadius: product.detailtype === "img" ? "24px" : 0,
                  },
                  "& iframe": {
                    width: "100%",
                    border: 0,
                    borderRadius: "24px",
                    display: "block",
                    backgroundColor: "#000000",
                  },
                  "& p": {
                    marginTop: 0,
                    marginBottom: 20,
                    color: "text.secondary",
                  },
                }}
              >
                {product.detailtype === "img" ? (
                  <Box
                    sx={{
                      overflow: "hidden",
                      borderRadius: "28px",
                      border: "1px solid var(--color-line)",
                    }}
                  >
                    <img src={product.detail} alt={`${product.name} 상세 정보`} />
                  </Box>
                ) : DetailComponent ? (
                  <DetailComponent />
                ) : (
                  <Typography color="text.secondary">
                    상세 콘텐츠를 준비 중입니다.
                  </Typography>
                )}
              </Box>
            </Box>
          </>
        )}
      </Container>
    </Box>
  );
}
