import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export default function Main() {
  return (
    <Box>
      <CssBaseline />
      {/* 나중에 지울것 맵 지도 페이지 연결 */}
      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
        <Typography variant="h2" component="h1" gutterBottom>
          메인페이지
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          이곳에 설명이 들어가고 제품이 보일곳
        </Typography>
      </Container>
    </Box>
  );
}
