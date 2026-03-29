import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import BusinessRoundedIcon from "@mui/icons-material/BusinessRounded";
import DevicesRoundedIcon from "@mui/icons-material/DevicesRounded";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import CompanyIntroduction from "../components/introduction/CompanyIntroduction";
import MainCustomer from "../components/introduction/MainCustomer";
import { companyProfile } from "../content/companyProfile";
import MapPage from "./MapPage";

const overviewHighlights = [
  {
    icon: BusinessRoundedIcon,
    title: "산업용 복합기·복사기 전문",
    description: "기업 출력 환경에 맞춘 장비 구성과 도입 구조를 제안합니다.",
  },
  {
    icon: DevicesRoundedIcon,
    title: "납품과 렌탈 동시 운영",
    description: "대량 납품과 소형 복사기 렌탈을 함께 지원하는 B2B 체계입니다.",
  },
];

export default function IntroductionPage() {
  return (
    <Box component="main" sx={{ pb: { xs: 7, md: 10 } }}>
      <Container
        maxWidth="xl"
        sx={{
          maxWidth: "var(--page-max)",
          pt: { xs: 4, md: 6 },
        }}
      >
        <Box
          sx={{
            p: { xs: 3, md: 4 },
            borderRadius: "32px",
            border: "1px solid var(--color-line)",
            background:
              "radial-gradient(circle at top right, rgba(220, 38, 38, 0.08), transparent 26%), linear-gradient(180deg, rgba(255, 255, 255, 0.96) 0%, rgba(248, 250, 252, 0.92) 100%)",
            boxShadow: "var(--shadow-soft)",
          }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                lg: "minmax(0, 1fr) minmax(0, 0.92fr)",
              },
              gap: 3,
            }}
          >
            <Box>
              <Typography variant="subtitle2" color="secondary.main">
                ABOUT CPLUS SOLUTION
              </Typography>
              <Typography sx={{ mt: 1.5, maxWidth: 700 }} variant="h1">
                {companyProfile.overview.oneLiner}
              </Typography>
              <Typography
                sx={{
                  mt: 2,
                  maxWidth: 720,
                  fontSize: { xs: "1.02rem", md: "1.14rem" },
                  lineHeight: 1.75,
                  color: "text.primary",
                }}
              >
                {companyProfile.hero.subtitle}
              </Typography>
              <Typography sx={{ mt: 1.75, maxWidth: 700 }} color="text.secondary">
                {companyProfile.overview.paragraphs[0]}
              </Typography>
              <Typography sx={{ mt: 1.25, maxWidth: 700 }} color="text.secondary">
                {companyProfile.overview.paragraphs[1]}
              </Typography>

              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={1.5}
                sx={{ mt: 3, alignItems: { sm: "center" } }}
              >
                <Button
                  component={Link}
                  to="/map"
                  variant="contained"
                  endIcon={<ArrowForwardRoundedIcon />}
                >
                  상담 및 위치 확인
                </Button>
                <Button component={Link} to="/category/all" variant="outlined">
                  제품 카테고리 보기
                </Button>
              </Stack>
            </Box>

            <Box sx={{ display: "grid", gap: 1.5 }}>
              {companyProfile.metrics.map((metric) => (
                <Box
                  key={metric.label}
                  sx={{
                    p: { xs: 2.5, md: 3 },
                    borderRadius: "24px",
                    border: "1px solid var(--color-line)",
                    backgroundColor: "rgba(255, 255, 255, 0.88)",
                    boxShadow: "var(--shadow-soft)",
                  }}
                >
                  <Typography variant="subtitle2" color="text.secondary">
                    {metric.label}
                  </Typography>
                  <Typography sx={{ mt: 1 }} variant="h3">
                    {metric.value}
                  </Typography>
                  <Typography sx={{ mt: 1 }} color="text.secondary">
                    {metric.note}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>

          <Box
            sx={{
              mt: { xs: 3, md: 4 },
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "repeat(2, minmax(0, 1fr))" },
              gap: 2,
            }}
          >
            {overviewHighlights.map((item) => {
              const Icon = item.icon;

              return (
                <Box
                  key={item.title}
                  sx={{
                    p: 2.5,
                    borderRadius: "24px",
                    border: "1px solid var(--color-line)",
                    backgroundColor: "rgba(15, 23, 42, 0.03)",
                  }}
                >
                  <Stack direction="row" spacing={1.5} alignItems="flex-start">
                    <Box
                      sx={{
                        width: 44,
                        height: 44,
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "16px",
                        backgroundColor: "#ffffff",
                        color: "primary.main",
                        flexShrink: 0,
                      }}
                    >
                      <Icon />
                    </Box>
                    <Box>
                      <Typography variant="h6">{item.title}</Typography>
                      <Typography sx={{ mt: 0.75 }} color="text.secondary">
                        {item.description}
                      </Typography>
                    </Box>
                  </Stack>
                </Box>
              );
            })}
          </Box>
        </Box>

        <Box sx={{ mt: { xs: 4, md: 5 }, display: "grid", gap: { xs: 4, md: 5 } }}>
          <CompanyIntroduction />
          <MainCustomer />
          <MapPage embedded />
        </Box>
      </Container>
    </Box>
  );
}
