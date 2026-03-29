import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function RedirectPage() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/", { replace: true });
    }, 1000);
  }, [navigate]);

  return (
    <Container
      maxWidth="sm"
      sx={{
        pt: { xs: 10, md: 14 },
        pb: { xs: 8, md: 10 },
      }}
    >
      <Box
        sx={{
          p: { xs: 3, md: 4 },
          borderRadius: "32px",
          border: "1px solid var(--color-line)",
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 0.94) 0%, rgba(255, 255, 255, 0.84) 100%)",
          boxShadow: "var(--shadow-soft)",
          textAlign: "center",
        }}
      >
        <Typography variant="subtitle2" color="secondary.main">
          REDIRECT
        </Typography>
        <Typography sx={{ mt: 1.5 }} variant="h4">
          잘못된 요청입니다.
        </Typography>
        <Typography sx={{ mt: 1.25 }} color="text.secondary">
          잠시 후 홈 화면으로 이동합니다. 입력한 주소를 다시 확인해 주세요.
        </Typography>
        <LinearProgress sx={{ mt: 3, borderRadius: 999, height: 8 }} />
      </Box>
    </Container>
  );
}
