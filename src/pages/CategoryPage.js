import { Box, Container, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import Categoryall from "../components/category/categoryall";

const categoryNames = {
  all: "전체 제품",
  LBP: "LBP 제품",
  SFP: "SFP 제품",
  MFP: "MFP 제품",
  MiniPhotoPrinter: "Mini Photo Printer",
};

export default function CategoryPage() {
  const { category } = useParams();

  return (
    <Box component="main" sx={{ pb: { xs: 7, md: 10 } }}>
      <Container
        maxWidth="xl"
        sx={{
          maxWidth: "var(--page-max)",
          pt: { xs: 4, md: 6 },
        }}
      >
        <Typography variant="subtitle2" color="secondary.main">
          PRODUCT LIST
        </Typography>
        <Typography sx={{ mt: 1.5 }} variant="h2">
          {categoryNames[category] || category}
        </Typography>
        <Typography sx={{ mt: 1.5, maxWidth: 720 }} color="text.secondary">
          카테고리 필터, 검색, 페이지네이션을 같은 시각 언어 안에서 정리해
          제품 비교와 상세 이동이 더 자연스럽게 이어지도록 구성했습니다.
        </Typography>

        <Categoryall category={category} />
      </Container>
    </Box>
  );
}
