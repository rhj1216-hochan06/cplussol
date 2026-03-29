import ApartmentRoundedIcon from "@mui/icons-material/ApartmentRounded";
import HandshakeRoundedIcon from "@mui/icons-material/HandshakeRounded";
import StorefrontRoundedIcon from "@mui/icons-material/StorefrontRounded";
import { Box, Stack, Typography } from "@mui/material";
import { companyProfile } from "../../content/companyProfile";

const serviceIconMap = {
  delivery: ApartmentRoundedIcon,
  rental: StorefrontRoundedIcon,
  support: HandshakeRoundedIcon,
};

const CompanyIntroduction = () => {
  return (
    <Box
      sx={{
        p: { xs: 2.5, md: 4 },
        borderRadius: "32px",
        border: "1px solid var(--color-line)",
        background:
          "linear-gradient(180deg, rgba(255, 255, 255, 0.96) 0%, rgba(248, 250, 252, 0.9) 100%)",
        boxShadow: "var(--shadow-soft)",
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            lg: "minmax(0, 1fr) minmax(320px, 0.9fr)",
          },
          gap: 3,
          alignItems: "stretch",
        }}
      >
        <Box>
          <Typography variant="subtitle2" color="secondary.main">
            COMPANY OVERVIEW
          </Typography>
          <Typography sx={{ mt: 1.25 }} variant="h3">
            기업 환경에 맞춘 복합기 도입과 운영 구조를 설계합니다.
          </Typography>
          <Typography sx={{ mt: 1.5, maxWidth: 680 }} color="text.secondary">
            {companyProfile.overview.paragraphs[0]}
          </Typography>
          <Typography sx={{ mt: 1.25, maxWidth: 680 }} color="text.secondary">
            {companyProfile.overview.paragraphs[1]}
          </Typography>

          <Box
            sx={{
              mt: 3,
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "repeat(3, minmax(0, 1fr))" },
              gap: 1.5,
            }}
          >
            {companyProfile.strengths.map((strength) => (
              <Box
                key={strength.title}
                sx={{
                  p: 2.25,
                  borderRadius: "22px",
                  border: "1px solid var(--color-line)",
                  backgroundColor: "rgba(255, 255, 255, 0.88)",
                }}
              >
                <Typography variant="h6">{strength.title}</Typography>
                <Typography sx={{ mt: 1 }} color="text.secondary">
                  {strength.description}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        <Box
          sx={{
            overflow: "hidden",
            borderRadius: "28px",
            border: "1px solid var(--color-line)",
            backgroundColor: "#ffffff",
            boxShadow: "0 18px 36px rgba(15, 23, 42, 0.08)",
          }}
        >
          <Box
            sx={{
              minHeight: { xs: 260, md: 320 },
              backgroundImage:
                "linear-gradient(180deg, rgba(15, 23, 42, 0.10) 0%, rgba(15, 23, 42, 0.40) 100%), url(/images/main/사무실내부3.jpg)",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          />
          <Box sx={{ p: { xs: 2.5, md: 3 } }}>
            <Typography variant="subtitle2" color="secondary.main">
              BUSINESS POSITIONING
            </Typography>
            <Typography sx={{ mt: 1 }} variant="h5">
              산업체 납품과 기업 렌탈을 함께 다루는 B2B 출력 파트너
            </Typography>
            <Typography sx={{ mt: 1.25 }} color="text.secondary">
              납품 규모와 사용 목적, 운영 형태가 다른 고객을 각각 이해하고 그에
              맞는 도입 방식을 제안하는 것이 씨플러스솔루션의 핵심입니다.
            </Typography>
            <Stack
              direction="row"
              spacing={1}
              useFlexGap
              flexWrap="wrap"
              sx={{ mt: 2 }}
            >
              <Box
                sx={{
                  px: 1.5,
                  py: 0.9,
                  borderRadius: "999px",
                  backgroundColor: "rgba(15, 23, 42, 0.06)",
                }}
              >
                <Typography variant="subtitle2">대량 납품 대응</Typography>
              </Box>
              <Box
                sx={{
                  px: 1.5,
                  py: 0.9,
                  borderRadius: "999px",
                  backgroundColor: "rgba(15, 23, 42, 0.06)",
                }}
              >
                <Typography variant="subtitle2">약 200여 대 렌탈 운영</Typography>
              </Box>
              <Box
                sx={{
                  px: 1.5,
                  py: 0.9,
                  borderRadius: "999px",
                  backgroundColor: "rgba(15, 23, 42, 0.06)",
                }}
              >
                <Typography variant="subtitle2">유지보수 연계</Typography>
              </Box>
            </Stack>
          </Box>
        </Box>
      </Box>

      <Box sx={{ mt: { xs: 4, md: 5 } }}>
        <Typography variant="subtitle2" color="secondary.main">
          BUSINESS AREAS
        </Typography>
        <Typography sx={{ mt: 1.25 }} variant="h4">
          사업 영역
        </Typography>
      </Box>

      <Box
        sx={{
          mt: 3,
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "repeat(3, minmax(0, 1fr))" },
          gap: 2,
        }}
      >
        {companyProfile.serviceAreas.map((area) => {
          const Icon = serviceIconMap[area.id] || ApartmentRoundedIcon;

          return (
            <Box
              key={area.id}
              sx={{
                p: 3,
                borderRadius: "26px",
                border: "1px solid var(--color-line)",
                backgroundColor: "rgba(255, 255, 255, 0.92)",
              }}
            >
              <Box
                sx={{
                  width: 48,
                  height: 48,
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
                {area.eyebrow}
              </Typography>
              <Typography sx={{ mt: 1 }} variant="h5">
                {area.title}
              </Typography>
              <Typography sx={{ mt: 1.25 }} color="text.secondary">
                {area.description}
              </Typography>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default CompanyIntroduction;
