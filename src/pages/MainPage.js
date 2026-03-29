import ApartmentRoundedIcon from "@mui/icons-material/ApartmentRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import PrintRoundedIcon from "@mui/icons-material/PrintRounded";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";
import {
  Box,
  Button,
  Chip,
  Container,
  Skeleton,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import styles from "../components/main/Products.module.css";
import {
  categorySectionCopy,
  companyProfile,
  homeSlides,
} from "../content/companyProfile";

const categoryDescriptions = {
  all: "대량 납품과 렌탈 제안에 활용하는 전체 제품군을 빠르게 비교할 수 있습니다.",
  LBP: "기업 문서 출력 환경에 적합한 레이저 프린터 제품군을 확인할 수 있습니다.",
  SFP: "출력 중심 업무에 맞춘 단일 기능 프린터 라인업을 살펴볼 수 있습니다.",
  MFP: "복사, 스캔, 네트워크 기능을 포함한 복합기 제품군을 확인할 수 있습니다.",
  MiniPhotoPrinter: "특수 목적과 소형 출력 수요에 대응하는 미니 포토프린터 제품군입니다.",
};

const categoryLabels = {
  all: "전체 제품",
  LBP: "LBP 라인업",
  SFP: "SFP 라인업",
  MFP: "MFP 라인업",
  MiniPhotoPrinter: "Mini Photo Printer",
};

const serviceIconMap = {
  delivery: ApartmentRoundedIcon,
  rental: PrintRoundedIcon,
  support: SupportAgentRoundedIcon,
};

export default function MainPage() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    let isMounted = true;

    axios
      .get("/data/category.json")
      .then((response) => {
        if (isMounted) {
          setCategories(response.data);
        }
      })
      .finally(() => {
        if (isMounted) {
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <Box component="main" sx={{ pb: { xs: 7, md: 10 } }}>
      <Container
        maxWidth="xl"
        sx={{
          maxWidth: "var(--page-max)",
          pt: { xs: 4, md: 6 },
          px: { xs: 0, md: 2 },
        }}
      >
        <Box
          sx={{
            p: { xs: 2.5, sm: 3, md: 4 },
            borderRadius: { xs: "28px", md: "36px" },
            border: "1px solid var(--color-line)",
            background:
              "radial-gradient(circle at top right, rgba(220, 38, 38, 0.10), transparent 24%), linear-gradient(180deg, rgba(255, 255, 255, 0.96) 0%, rgba(248, 250, 252, 0.92) 100%)",
            boxShadow: "var(--shadow-strong)",
          }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                lg: "minmax(0, 1.05fr) minmax(0, 0.95fr)",
              },
              gap: { xs: 3, md: 4 },
            }}
          >
            <Box
              sx={{
                p: { xs: 1, md: 2 },
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Box>
                <Chip
                  label={companyProfile.hero.eyebrow}
                  color="secondary"
                  sx={{
                    backgroundColor: "rgba(220, 38, 38, 0.08)",
                    color: "secondary.main",
                    borderColor: "rgba(220, 38, 38, 0.16)",
                  }}
                />
                <Typography sx={{ mt: 2.5, maxWidth: 620 }} variant="h1">
                  {companyProfile.hero.title}
                </Typography>
                <Typography
                  sx={{
                    mt: 2.5,
                    maxWidth: 680,
                    fontSize: { xs: "1.05rem", md: "1.2rem" },
                    lineHeight: 1.7,
                    color: "text.primary",
                  }}
                >
                  {companyProfile.hero.subtitle}
                </Typography>
                <Typography
                  sx={{
                    mt: 2,
                    maxWidth: 640,
                    color: "text.secondary",
                    fontSize: { xs: "0.98rem", md: "1.04rem" },
                  }}
                >
                  {companyProfile.hero.description}
                </Typography>
              </Box>

              <Box sx={{ mt: { xs: 4, md: 5 } }}>
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={1.5}
                  sx={{ alignItems: { sm: "center" } }}
                >
                  <Button
                    component={Link}
                    to="/introduction"
                    variant="contained"
                    endIcon={<ArrowForwardRoundedIcon />}
                  >
                    회사 소개 보기
                  </Button>
                  <Button component={Link} to="/category/all" variant="outlined">
                    제품 카테고리 보기
                  </Button>
                </Stack>

                <Stack
                  direction="row"
                  spacing={1}
                  useFlexGap
                  flexWrap="wrap"
                  sx={{ mt: 2.5 }}
                >
                  {companyProfile.serviceAreas.map((item) => (
                    <Chip
                      key={item.id}
                      label={item.title}
                      variant="outlined"
                      sx={{
                        borderColor: "rgba(15, 23, 42, 0.12)",
                        backgroundColor: "rgba(255, 255, 255, 0.72)",
                      }}
                    />
                  ))}
                </Stack>
              </Box>
            </Box>

            <Box
              sx={{
                position: "relative",
                minWidth: 0,
                p: { xs: 0, md: 1 },
              }}
            >
              <Box
                sx={{
                  overflow: "hidden",
                  borderRadius: { xs: "28px", md: "32px" },
                  border: "1px solid rgba(255, 255, 255, 0.42)",
                  boxShadow: "0 28px 60px rgba(15, 23, 42, 0.18)",
                }}
              >
                <Swiper
                  centeredSlides
                  autoplay={{
                    delay: 4200,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Autoplay, Pagination]}
                >
                  {homeSlides.map((slide) => (
                    <SwiperSlide key={slide.image}>
                      <Box
                        sx={{
                          position: "relative",
                          minHeight: { xs: 360, md: 540 },
                          display: "flex",
                          alignItems: "flex-end",
                          backgroundImage: `linear-gradient(180deg, rgba(15, 23, 42, 0.10) 0%, rgba(15, 23, 42, 0.72) 100%), url(${slide.image})`,
                          backgroundPosition: "center",
                          backgroundRepeat: "no-repeat",
                          backgroundSize: isMobile ? "cover" : "cover",
                        }}
                      >
                        <Box
                          sx={{
                            width: "100%",
                            p: { xs: 3, md: 4 },
                            color: "#ffffff",
                            backdropFilter: "blur(4px)",
                            background:
                              "linear-gradient(180deg, rgba(15, 23, 42, 0.04) 0%, rgba(15, 23, 42, 0.28) 100%)",
                          }}
                        >
                          <Chip
                            label={slide.badge}
                            sx={{
                              color: "#ffffff",
                              backgroundColor: "rgba(255, 255, 255, 0.14)",
                              border: "1px solid rgba(255, 255, 255, 0.18)",
                            }}
                          />
                          <Typography sx={{ mt: 2 }} variant="h4">
                            {slide.title}
                          </Typography>
                          <Typography
                            sx={{
                              mt: 1.5,
                              maxWidth: 520,
                              color: "rgba(255, 255, 255, 0.84)",
                            }}
                          >
                            {slide.description}
                          </Typography>
                        </Box>
                      </Box>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              mt: { xs: 3, md: 4 },
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "repeat(3, minmax(0, 1fr))" },
              gap: 2,
            }}
          >
            {companyProfile.metrics.map((metric) => (
              <Box
                key={metric.label}
                sx={{
                  p: { xs: 2.5, md: 3 },
                  borderRadius: "24px",
                  border: "1px solid var(--color-line)",
                  backgroundColor: "rgba(255, 255, 255, 0.82)",
                  boxShadow: "var(--shadow-soft)",
                }}
              >
                <Typography variant="subtitle2" color="text.secondary">
                  {metric.label}
                </Typography>
                <Typography sx={{ mt: 1.1 }} variant="h3">
                  {metric.value}
                </Typography>
                <Typography sx={{ mt: 1.1 }} color="text.secondary">
                  {metric.note}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        <Box sx={{ mt: { xs: 6, md: 8 } }}>
          <Typography variant="subtitle2" color="secondary.main">
            SERVICES
          </Typography>
          <Typography sx={{ mt: 1.5, maxWidth: 760 }} variant="h2">
            납품, 렌탈, 운영 지원을 한 흐름으로 제안하는 기업용 출력 파트너
          </Typography>
          <Typography sx={{ mt: 1.5, maxWidth: 720 }} color="text.secondary">
            단순 제품 판매보다 기업 환경에 맞는 운영 구조를 제안하는 데
            집중합니다. 대량 납품과 렌탈 운영, 유지보수 대응이 각각 따로
            분리되지 않도록 공통 기준으로 설계했습니다.
          </Typography>
        </Box>

        <Box
          sx={{
            mt: { xs: 3, md: 4 },
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, minmax(0, 1fr))" },
            gap: 2,
          }}
        >
          {companyProfile.serviceAreas.map((item) => {
            const Icon = serviceIconMap[item.id] || Inventory2OutlinedIcon;

            return (
              <Box
                key={item.id}
                sx={{
                  p: 3,
                  borderRadius: "28px",
                  border: "1px solid var(--color-line)",
                  background:
                    "linear-gradient(180deg, rgba(255, 255, 255, 0.98) 0%, rgba(248, 250, 252, 0.94) 100%)",
                  boxShadow: "var(--shadow-soft)",
                }}
              >
                <Box
                  sx={{
                    width: 52,
                    height: 52,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "18px",
                    backgroundColor: "rgba(15, 23, 42, 0.06)",
                    color: "primary.main",
                  }}
                >
                  <Icon />
                </Box>
                <Typography sx={{ mt: 2 }} variant="subtitle2" color="secondary.main">
                  {item.eyebrow}
                </Typography>
                <Typography sx={{ mt: 1 }} variant="h5">
                  {item.title}
                </Typography>
                <Typography sx={{ mt: 1.25, color: "text.secondary" }}>
                  {item.description}
                </Typography>

                <Box sx={{ mt: 2.5, display: "grid", gap: 1.25 }}>
                  {item.bullets.map((bullet) => (
                    <Stack
                      key={bullet}
                      direction="row"
                      spacing={1.2}
                      alignItems="flex-start"
                    >
                      <Box
                        sx={{
                          width: 8,
                          height: 8,
                          mt: 0.85,
                          borderRadius: "999px",
                          backgroundColor: "secondary.main",
                          flexShrink: 0,
                        }}
                      />
                      <Typography color="text.secondary">{bullet}</Typography>
                    </Stack>
                  ))}
                </Box>
              </Box>
            );
          })}
        </Box>

        <Box
          sx={{
            mt: { xs: 6, md: 8 },
            p: { xs: 3, md: 4 },
            borderRadius: "32px",
            border: "1px solid var(--color-line)",
            background:
              "linear-gradient(135deg, rgba(15, 23, 42, 0.98) 0%, rgba(30, 41, 59, 0.98) 100%)",
            boxShadow: "var(--shadow-strong)",
          }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                lg: "minmax(0, 0.92fr) minmax(0, 1.08fr)",
              },
              gap: 3,
            }}
          >
            <Box sx={{ color: "#ffffff" }}>
              <Typography variant="subtitle2" sx={{ color: "rgba(255, 255, 255, 0.68)" }}>
                TRUST & SCALE
              </Typography>
              <Typography sx={{ mt: 1.5, maxWidth: 520 }} variant="h3">
                숫자와 고객 유형이 함께 보이는 신뢰 구조
              </Typography>
              <Typography
                sx={{
                  mt: 1.5,
                  maxWidth: 520,
                  color: "rgba(255, 255, 255, 0.76)",
                }}
              >
                씨플러스솔루션은 산업체와 기업 고객 중심의 B2B 출력 환경을
                다뤄왔습니다. 대량 납품과 렌탈 운영을 동시에 수행하는 구조를
                명확한 수치와 고객 유형으로 전달합니다.
              </Typography>

              <Box sx={{ mt: 3, display: "grid", gap: 1.5 }}>
                {companyProfile.clientTypes.map((client) => (
                  <Box
                    key={client.title}
                    sx={{
                      p: 2.25,
                      borderRadius: "22px",
                      border: "1px solid rgba(255, 255, 255, 0.12)",
                      backgroundColor: "rgba(255, 255, 255, 0.06)",
                    }}
                  >
                    <Typography sx={{ color: "#ffffff" }} variant="h6">
                      {client.title}
                    </Typography>
                    <Typography sx={{ mt: 0.8, color: "rgba(255, 255, 255, 0.72)" }}>
                      {client.description}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", sm: "repeat(3, minmax(0, 1fr))" },
                gap: 2,
                alignItems: "stretch",
              }}
            >
              {companyProfile.metrics.map((metric) => (
                <Box
                  key={metric.value}
                  sx={{
                    p: { xs: 2.5, md: 3 },
                    borderRadius: "24px",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                    backgroundColor: "rgba(255, 255, 255, 0.08)",
                    color: "#ffffff",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  <Typography sx={{ color: "rgba(255, 255, 255, 0.68)" }} variant="subtitle2">
                    {metric.label}
                  </Typography>
                  <Typography sx={{ mt: 1.2 }} variant="h3">
                    {metric.value}
                  </Typography>
                  <Typography sx={{ mt: 1.2, color: "rgba(255, 255, 255, 0.72)" }}>
                    {metric.note}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>

        <Box sx={{ mt: { xs: 6, md: 8 } }}>
          <Typography variant="subtitle2" color="secondary.main">
            OPERATION FLOW
          </Typography>
          <Typography sx={{ mt: 1.5, maxWidth: 760 }} variant="h2">
            도입 방식에 따라 이해하기 쉬운 납품·렌탈 운영 구조
          </Typography>
        </Box>

        <Box
          sx={{
            mt: { xs: 3, md: 4 },
            display: "grid",
            gridTemplateColumns: { xs: "1fr", lg: "repeat(2, minmax(0, 1fr))" },
            gap: 2,
          }}
        >
          <Box
            sx={{
              p: { xs: 2.5, md: 3 },
              borderRadius: "28px",
              border: "1px solid var(--color-line)",
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              boxShadow: "var(--shadow-soft)",
            }}
          >
            <Typography variant="subtitle2" color="secondary.main">
              LARGE-SCALE DELIVERY
            </Typography>
            <Typography sx={{ mt: 1 }} variant="h4">
              대량 납품 구조
            </Typography>
            <Typography sx={{ mt: 1.25, color: "text.secondary" }}>
              산업체와 중견 이상 기업의 구축 수요에 맞춰 요구사항 파악부터
              도입 이후 운영 지원까지 이어지는 흐름입니다.
            </Typography>

            <Box sx={{ mt: 3, display: "grid", gap: 1.5 }}>
              {companyProfile.deliveryFlow.map((step, index) => (
                <Box
                  key={step.title}
                  sx={{
                    p: 2.25,
                    borderRadius: "22px",
                    border: "1px solid var(--color-line)",
                    backgroundColor: "rgba(248, 250, 252, 0.84)",
                  }}
                >
                  <Typography variant="subtitle2" color="text.secondary">
                    STEP {index + 1}
                  </Typography>
                  <Typography sx={{ mt: 0.8 }} variant="h6">
                    {step.title}
                  </Typography>
                  <Typography sx={{ mt: 0.8 }} color="text.secondary">
                    {step.description}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>

          <Box
            sx={{
              p: { xs: 2.5, md: 3 },
              borderRadius: "28px",
              border: "1px solid var(--color-line)",
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              boxShadow: "var(--shadow-soft)",
            }}
          >
            <Typography variant="subtitle2" color="secondary.main">
              RENTAL OPERATION
            </Typography>
            <Typography sx={{ mt: 1 }} variant="h4">
              렌탈 운영 구조
            </Typography>
            <Typography sx={{ mt: 1.25, color: "text.secondary" }}>
              중소기업 고객이 초기 부담을 낮추면서도 안정적으로 장비를 운영할 수
              있도록 구성한 렌탈 중심의 흐름입니다.
            </Typography>

            <Box sx={{ mt: 3, display: "grid", gap: 1.5 }}>
              {companyProfile.rentalFlow.map((step, index) => (
                <Box
                  key={step.title}
                  sx={{
                    p: 2.25,
                    borderRadius: "22px",
                    border: "1px solid var(--color-line)",
                    backgroundColor: "rgba(248, 250, 252, 0.84)",
                  }}
                >
                  <Typography variant="subtitle2" color="text.secondary">
                    STEP {index + 1}
                  </Typography>
                  <Typography sx={{ mt: 0.8 }} variant="h6">
                    {step.title}
                  </Typography>
                  <Typography sx={{ mt: 0.8 }} color="text.secondary">
                    {step.description}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>

        <Box sx={{ mt: { xs: 6, md: 8 } }}>
          <Typography variant="subtitle2" color="secondary.main">
            {categorySectionCopy.eyebrow}
          </Typography>
          <Typography sx={{ mt: 1.5 }} variant="h3">
            {categorySectionCopy.title}
          </Typography>
          <Typography sx={{ mt: 1.5, maxWidth: 720 }} color="text.secondary">
            {categorySectionCopy.description}
          </Typography>
        </Box>

        <Box sx={{ mt: { xs: 3, md: 4 } }}>
          {loading ? (
            <Box className={styles.catalogGrid}>
              {Array.from({ length: 5 }).map((_, index) => (
                <Box className={styles.categoryCard} key={index}>
                  <Skeleton
                    variant="rectangular"
                    sx={{ width: "100%", aspectRatio: "1 / 1", borderRadius: "22px" }}
                  />
                  <Box sx={{ pt: 2.5, display: "grid", gap: 1.2 }}>
                    <Skeleton variant="text" sx={{ width: "28%", height: 22 }} />
                    <Skeleton variant="text" sx={{ width: "62%", height: 34 }} />
                    <Skeleton variant="text" sx={{ width: "100%", height: 22 }} />
                    <Skeleton variant="text" sx={{ width: "82%", height: 22 }} />
                  </Box>
                </Box>
              ))}
            </Box>
          ) : (
            <main className={styles.catalogGrid}>
              {categories.map((category) => (
                <Link
                  key={category.category}
                  to={`/category/${category.category}`}
                  className={styles.categoryCard}
                >
                  <div className={styles.categoryPreview}>
                    <img
                      src={category.img}
                      alt={`${category.category} 카테고리 대표 이미지`}
                    />
                  </div>
                  <div className={styles.categoryBody}>
                    <span className={styles.categoryEyebrow}>
                      {category.category.toUpperCase()}
                    </span>
                    <div className={styles.categoryTitle}>
                      {categoryLabels[category.category] || category.category}
                    </div>
                    <div className={styles.categoryDescription}>
                      {categoryDescriptions[category.category] ||
                        "제품 라인업을 빠르게 탐색할 수 있습니다."}
                    </div>
                  </div>
                  <div className={styles.categoryMeta}>
                    <span>카테고리 보기</span>
                    <span className={styles.categoryArrow}>
                      <ArrowForwardRoundedIcon fontSize="small" />
                    </span>
                  </div>
                </Link>
              ))}
            </main>
          )}
        </Box>

        <Box
          sx={{
            mt: { xs: 6, md: 8 },
            p: { xs: 3, md: 4 },
            borderRadius: "32px",
            border: "1px solid rgba(220, 38, 38, 0.10)",
            background:
              "linear-gradient(135deg, rgba(255, 247, 237, 0.98) 0%, rgba(255, 255, 255, 0.96) 100%)",
            boxShadow: "var(--shadow-soft)",
          }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", lg: "minmax(0, 1fr) auto" },
              gap: 2.5,
              alignItems: "center",
            }}
          >
            <Box>
              <Typography variant="subtitle2" color="secondary.main">
                CONSULTING CTA
              </Typography>
              <Typography sx={{ mt: 1.25, maxWidth: 700 }} variant="h3">
                {companyProfile.cta.title}
              </Typography>
              <Typography sx={{ mt: 1.5, maxWidth: 700 }} color="text.secondary">
                {companyProfile.cta.description}
              </Typography>
            </Box>

            <Stack direction={{ xs: "column", sm: "row", lg: "column" }} spacing={1.5}>
              <Button
                component={Link}
                to="/map"
                variant="contained"
                endIcon={<ArrowForwardRoundedIcon />}
              >
                상담 및 위치 확인
              </Button>
              <Button component={Link} to="/introduction" variant="outlined">
                회사 소개 자세히 보기
              </Button>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
