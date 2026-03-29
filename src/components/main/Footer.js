import FaxIcon from "@mui/icons-material/Fax";
import PhoneIcon from "@mui/icons-material/Phone";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

export default function Footer1() {
  const quickLinks = [
    { label: "홈", href: "/" },
    { label: "제품 소개", href: "/category/all" },
    { label: "회사 소개", href: "/introduction" },
    { label: "찾아오시는 길", href: "/map" },
  ];

  return (
    <Box
      component="footer"
      sx={{
        px: { xs: 2, md: 3 },
        pt: { xs: 6, md: 8 },
        pb: { xs: 2, md: 3 },
        mt: "auto",
      }}
    >
      <Container maxWidth="xl" disableGutters>
        <Box
          sx={{
            maxWidth: "var(--page-max)",
            mx: "auto",
            p: { xs: 3, md: 4 },
            borderRadius: "var(--radius-lg)",
            background:
              "linear-gradient(180deg, rgba(15, 23, 42, 0.96) 0%, rgba(15, 23, 42, 0.90) 100%)",
            color: "rgba(255, 255, 255, 0.92)",
            boxShadow: "0 30px 70px rgba(15, 23, 42, 0.24)",
          }}
        >
          <Grid container spacing={4}>
            <Grid item xs={12} md={5}>
              <Typography variant="subtitle2" sx={{ color: "rgba(248, 250, 252, 0.6)" }}>
                CPLUS SOLUTION
              </Typography>
              <Typography sx={{ mt: 1.5 }} variant="h4">
                출력 환경을 더 안정적이고 간결하게.
              </Typography>
              <Typography sx={{ mt: 2, maxWidth: 420, color: "rgba(226, 232, 240, 0.78)" }}>
                씨플러스솔루션은 프린터, 복합기, 포토프린터 제품 안내와 구매
                상담을 한 곳에서 확인할 수 있도록 정보를 정리해 제공합니다.
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6">바로가기</Typography>
              <Box sx={{ mt: 2, display: "grid", gap: 1.25 }}>
                {quickLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    underline="none"
                    color="inherit"
                    sx={{
                      width: "fit-content",
                      color: "rgba(255, 255, 255, 0.78)",
                      "&:hover": {
                        color: "#ffffff",
                      },
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="h6">연락처</Typography>
              <Box sx={{ mt: 2, display: "grid", gap: 1.5 }}>
                <Box sx={{ display: "flex", gap: 1.5, alignItems: "flex-start" }}>
                  <PlaceOutlinedIcon sx={{ mt: 0.25, color: "rgba(255,255,255,0.88)" }} />
                  <Typography color="rgba(226, 232, 240, 0.78)">
                    서울특별시 금천구 가산디지털1로 30, 907호
                    <br />
                    (가산동, 에이스하이엔드타워10)
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", gap: 1.5, alignItems: "center" }}>
                  <PhoneIcon sx={{ color: "rgba(255,255,255,0.88)" }} />
                  <Link
                    href="tel:02-2622-8081"
                    underline="hover"
                    color="inherit"
                    sx={{ color: "rgba(255, 255, 255, 0.88)" }}
                  >
                    02-2622-8081~2
                  </Link>
                </Box>
                <Box sx={{ display: "flex", gap: 1.5, alignItems: "center" }}>
                  <FaxIcon sx={{ color: "rgba(255,255,255,0.88)" }} />
                  <Typography color="rgba(255, 255, 255, 0.78)">
                    02-2622-8083
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>

          <Divider sx={{ my: 3, borderColor: "rgba(255, 255, 255, 0.10)" }} />

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "space-between",
              gap: 1.5,
            }}
          >
            <Typography color="rgba(226, 232, 240, 0.72)" variant="body2">
              제품 구매 문의는 전화상담을 이용해주세요.
            </Typography>
            <Typography color="rgba(226, 232, 240, 0.72)" variant="body2">
              {"Copyright © "}
              <Link color="inherit" href="https://www.cplussol.com">
                씨플러스솔루션
              </Link>{" "}
              {new Date().getFullYear()}
              {"."}
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
