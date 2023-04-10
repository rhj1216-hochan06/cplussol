import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import PhoneIcon from "@mui/icons-material/Phone";
import { Grid } from "@mui/material";

export default function Footer1() {
  return (
    <Box
      sx={{
        py: 3,
        px: 2,
        mt: "auto",
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="body1">
          제품 구매 문의는 전화상담을 이용해주세요. <a href="tel:02-2622-8081"> 02-2622-8081 </a>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {"Copyright © "}
          <Link color="inherit" href="https://www.cplussol.com">
            씨플러스솔루션
          </Link>{" "}
          {new Date().getFullYear()}
          {"."}
        </Typography>
      </Container>
    </Box>
  );
}
