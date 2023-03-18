import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import PhoneIcon from "@mui/icons-material/Phone";
import FaxIcon from "@mui/icons-material/Fax";
import ResponsiveAppBar from "./ResponsiveAppBar.js";
import { Grid } from "@mui/material";
import { maxHeight, minWidth } from "@mui/system";
import CustomAppBar from "./CustomAppBar.js";

export default function Header1() {
  return (
    <Box>
      <Box>
        <Grid sx={{ justifyContent: "center", display: "flex", mx: 1 }}>
          <Grid item xs={1} sx={{ mx: 5 }}>
            <img src="/images/logo/leftlogo.jpg" height="100vh" />
          </Grid>
          <Grid item xs={1} sx={{ mx: 5 }}>
            <img src="/images/logo/mainlogo-removebg.png" height="80vh" />
          </Grid>
          <Grid item xs={1} sx={{ mx: 5, my: 2, minWidth: "330px" }}>
            <Grid item xs={4} sx={{ mx: 5, display: "flex" }}>
              <PhoneIcon fontSize="large" />
              <Grid sx={{ my: 1 }}>전화상담: 02-2622-8081~2</Grid>
            </Grid>
            <Grid item xs={4} sx={{ mx: 5, display: "flex" }}>
              <FaxIcon fontSize="large" />
              <Grid sx={{ my: 1 }}>팩스번호: 02-2622-8083</Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      {/* <ResponsiveAppBar></ResponsiveAppBar> */}
      <CustomAppBar />
    </Box>
  );
}
