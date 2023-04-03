import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Map from "../components/map/Map";
import Typography from "@mui/material/Typography";
import PhoneIcon from "@mui/icons-material/Phone";
import FaxIcon from "@mui/icons-material/Fax";
import { Grid } from "@mui/material";

export default function MapPage() {
  return (
    <Box>
      <CssBaseline />
      <Typography variant="h4" component="h2" gutterBottom>
        <p />
        <Grid sx={{ justifyContent: "center", display: "flex", mx: 9 }}>
          <Grid item xs={4} sx={{ minWidth: "190px",mx: 5 }}>
            찾아오시는 길
          </Grid>
        </Grid>
      </Typography>
      <Box sx={{ justifyContent: "center", display: "flex" }}>
        <Map />
      </Box>
      <Typography variant="h6" component="h2" gutterBottom>
        <p />
        <Grid sx={{ minWidth: "350px",justifyContent: "center", display: "flex", mx: 9 }}>
          <Grid item xs={4} sx={{ mx: 5 }}>
            서울특별시 금천구 가산디지털 1로30, 907호
            (가산동,에이스하이엔드타워10)
          </Grid>
        </Grid>
        <p />

        <Grid sx={{ justifyContent: "center", display: "flex", mx: 9 }}>
          <Grid item xs={4} sx={{ minWidth: "140px", mx: 5 }}>
            <PhoneIcon />
            전화상담: 02-2622-8081~2
          </Grid>
          <Grid item xs={4} sx={{minWidth: "130px", mx: 5 }}>
            <FaxIcon />
            팩스번호: 02-2622-8083
          </Grid>
        </Grid>
      </Typography>
      <p />
    </Box>
  );
}
