import FaxIcon from "@mui/icons-material/Fax";
import NearMeOutlinedIcon from "@mui/icons-material/NearMeOutlined";
import PhoneIcon from "@mui/icons-material/Phone";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Map from "../components/map/Map";

export default function MapPage({ embedded = false }) {
  const content = (
    <Box
      sx={{
        p: { xs: 2.5, md: 4 },
        borderRadius: "32px",
        border: "1px solid var(--color-line)",
        background:
          "linear-gradient(180deg, rgba(255, 255, 255, 0.94) 0%, rgba(255, 255, 255, 0.84) 100%)",
        boxShadow: "var(--shadow-soft)",
      }}
    >
      <Typography variant="subtitle2" color="secondary.main">
        LOCATION
      </Typography>
      <Typography sx={{ mt: 1.25 }} variant="h3">
        찾아오시는 길
      </Typography>
      <Typography sx={{ mt: 1.25, maxWidth: 680 }} color="text.secondary">
        지도, 주소, 연락처를 한 번에 확인할 수 있도록 정보 위계를 다시
        구성했습니다. 소개 페이지 안에서도, 단독 페이지에서도 같은 패턴으로
        읽힙니다.
      </Typography>

      <Box
        sx={{
          mt: 3,
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "minmax(0, 1.1fr) minmax(0, 0.9fr)" },
          gap: 3,
        }}
      >
        <Box
          sx={{
            overflow: "hidden",
            borderRadius: "28px",
            border: "1px solid var(--color-line)",
            backgroundColor: "#ffffff",
            boxShadow: "0 14px 30px rgba(15, 23, 42, 0.06)",
          }}
        >
          <Map />
        </Box>

        <Box
          sx={{
            display: "grid",
            gap: 1.5,
          }}
        >
          <Box
            sx={{
              p: 2.5,
              borderRadius: "24px",
              border: "1px solid var(--color-line)",
              backgroundColor: "rgba(255, 255, 255, 0.86)",
            }}
          >
            <Stack direction="row" spacing={1.5} alignItems="flex-start">
              <PlaceOutlinedIcon sx={{ mt: 0.25, color: "primary.main" }} />
              <Box>
                <Typography variant="subtitle2" color="text.secondary">
                  주소
                </Typography>
                <Typography sx={{ mt: 0.75 }}>
                  서울특별시 금천구 가산디지털1로 30, 907호
                  <br />
                  (가산동, 에이스하이엔드타워10)
                </Typography>
              </Box>
            </Stack>
          </Box>

          <Box
            sx={{
              p: 2.5,
              borderRadius: "24px",
              border: "1px solid var(--color-line)",
              backgroundColor: "rgba(255, 255, 255, 0.86)",
            }}
          >
            <Stack direction="row" spacing={1.5} alignItems="center">
              <PhoneIcon sx={{ color: "primary.main" }} />
              <Box>
                <Typography variant="subtitle2" color="text.secondary">
                  전화상담
                </Typography>
                <Typography sx={{ mt: 0.75 }}>02-2622-8081~2</Typography>
              </Box>
            </Stack>
          </Box>

          <Box
            sx={{
              p: 2.5,
              borderRadius: "24px",
              border: "1px solid var(--color-line)",
              backgroundColor: "rgba(255, 255, 255, 0.86)",
            }}
          >
            <Stack direction="row" spacing={1.5} alignItems="center">
              <FaxIcon sx={{ color: "primary.main" }} />
              <Box>
                <Typography variant="subtitle2" color="text.secondary">
                  팩스번호
                </Typography>
                <Typography sx={{ mt: 0.75 }}>02-2622-8083</Typography>
              </Box>
            </Stack>
          </Box>

          <Stack direction={{ xs: "column", sm: "row", md: "column" }} spacing={1.25}>
            <Button
              href="https://kko.to/XBX0AplYXh"
              target="_blank"
              rel="noreferrer"
              variant="contained"
              endIcon={<NearMeOutlinedIcon />}
            >
              카카오맵에서 보기
            </Button>
            <Button href="tel:02-2622-8081" variant="outlined">
              전화 문의하기
            </Button>
          </Stack>
        </Box>
      </Box>
    </Box>
  );

  if (embedded) {
    return content;
  }

  return (
    <Box component="main" sx={{ pb: { xs: 7, md: 10 } }}>
      <Container
        maxWidth="xl"
        sx={{
          maxWidth: "var(--page-max)",
          pt: { xs: 4, md: 6 },
        }}
      >
        {content}
      </Container>
    </Box>
  );
}
