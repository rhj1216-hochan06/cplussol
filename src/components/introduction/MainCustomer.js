import { Box, Typography } from "@mui/material";
import { companyProfile } from "../../content/companyProfile";

const MainCustomer = () => {
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
      <Typography variant="subtitle2" color="secondary.main">
        DELIVERY & RENTAL STRUCTURE
      </Typography>
      <Typography sx={{ mt: 1.25 }} variant="h3">
        납품 구조와 렌탈 운영이 함께 설명되는 회사 소개
      </Typography>
      <Typography sx={{ mt: 1.25, maxWidth: 720 }} color="text.secondary">
        씨플러스솔루션의 강점은 제품 판매에 그치지 않고, 고객 규모에 따라 다른
        운영 방식을 제안하는 데 있습니다. 대량 납품과 렌탈 운영을 각각 이해하기
        쉽도록 구조화했습니다.
      </Typography>

      <Box
        sx={{
          mt: 3,
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
            backgroundColor: "#ffffff",
          }}
        >
          <Typography variant="subtitle2" color="secondary.main">
            LARGE-SCALE DELIVERY
          </Typography>
          <Typography sx={{ mt: 1 }} variant="h4">
            대량 납품 구조
          </Typography>
          <Typography sx={{ mt: 1.25 }} color="text.secondary">
            중견 이상 기업과 산업체 고객이 요구하는 복합기·복사기 구축 수요에
            맞춰 프로젝트 단위로 대응합니다.
          </Typography>

          <Box sx={{ mt: 2.5, display: "grid", gap: 1.5 }}>
            {companyProfile.deliveryFlow.map((step, index) => (
              <Box
                key={step.title}
                sx={{
                  p: 2.25,
                  borderRadius: "22px",
                  border: "1px solid var(--color-line)",
                  backgroundColor: "rgba(248, 250, 252, 0.86)",
                }}
              >
                <Typography variant="subtitle2" color="text.secondary">
                  STEP {index + 1}
                </Typography>
                <Typography sx={{ mt: 0.75 }} variant="h6">
                  {step.title}
                </Typography>
                <Typography sx={{ mt: 0.75 }} color="text.secondary">
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
            backgroundColor: "#ffffff",
          }}
        >
          <Typography variant="subtitle2" color="secondary.main">
            RENTAL OPERATION
          </Typography>
          <Typography sx={{ mt: 1 }} variant="h4">
            렌탈 운영 구조
          </Typography>
          <Typography sx={{ mt: 1.25 }} color="text.secondary">
            중소기업 고객이 초기 도입 부담을 낮추고 안정적으로 장비를 운영할 수
            있도록 소형 복사기 렌탈 체계를 제공합니다.
          </Typography>

          <Box sx={{ mt: 2.5, display: "grid", gap: 1.5 }}>
            {companyProfile.rentalFlow.map((step, index) => (
              <Box
                key={step.title}
                sx={{
                  p: 2.25,
                  borderRadius: "22px",
                  border: "1px solid var(--color-line)",
                  backgroundColor: "rgba(248, 250, 252, 0.86)",
                }}
              >
                <Typography variant="subtitle2" color="text.secondary">
                  STEP {index + 1}
                </Typography>
                <Typography sx={{ mt: 0.75 }} variant="h6">
                  {step.title}
                </Typography>
                <Typography sx={{ mt: 0.75 }} color="text.secondary">
                  {step.description}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      <Box sx={{ mt: { xs: 4, md: 5 } }}>
        <Typography variant="subtitle2" color="secondary.main">
          CLIENT TYPES
        </Typography>
        <Typography sx={{ mt: 1.25 }} variant="h4">
          주요 고객 유형
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
        {companyProfile.clientTypes.map((client) => (
          <Box
            key={client.title}
            sx={{
              p: 2.5,
              borderRadius: "24px",
              border: "1px solid var(--color-line)",
              backgroundColor: "rgba(255, 255, 255, 0.88)",
            }}
          >
            <Typography variant="h6">{client.title}</Typography>
            <Typography sx={{ mt: 1 }} color="text.secondary">
              {client.description}
            </Typography>
          </Box>
        ))}
      </Box>

      <Box
        sx={{
          mt: { xs: 4, md: 5 },
          p: { xs: 2, md: 3 },
          borderRadius: "28px",
          border: "1px solid var(--color-line)",
          backgroundColor: "#ffffff",
          boxShadow: "0 14px 30px rgba(15, 23, 42, 0.06)",
        }}
      >
        <Typography variant="subtitle2" color="secondary.main">
          TRUST SIGNAL
        </Typography>
        <Typography sx={{ mt: 1.25 }} variant="h4">
          기업 고객 중심의 신뢰 요소
        </Typography>
        <Typography sx={{ mt: 1.25, maxWidth: 720 }} color="text.secondary">
          실제 협업 이력을 보여주는 고객사 로고 영역은 회사의 규모감과 신뢰를
          전달하는 요소이므로, 소개 흐름 안에서 자연스럽게 이어지도록 다시
          배치했습니다.
        </Typography>

        <Box
          sx={{
            mt: 3,
            overflow: "hidden",
            borderRadius: "24px",
            border: "1px solid var(--color-line)",
            backgroundColor: "rgba(248, 250, 252, 0.9)",
          }}
        >
          <Box
            component="img"
            src="/images/custmerlogo/custmerlogo.png"
            alt="씨플러스솔루션 주요 고객사 로고"
            sx={{
              width: "100%",
              height: "auto",
              display: "block",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default MainCustomer;
