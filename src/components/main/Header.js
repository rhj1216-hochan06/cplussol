import FaxIcon from "@mui/icons-material/Fax";
import PhoneIcon from "@mui/icons-material/Phone";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import CustomAppBar from "./CustomAppBar.js";
import styles from "./Header.module.css";
export default function Header1() {
  return (
    <Box>
      <Box sx={{}}>
        <div className={styles.container1}>
          <div className={styles.item1} >
            <Grid item xs={1} sx={{ mx: 5 }}>
              <a href="/">
                <img src="/images/logo/leftlogo.jpg" height="100vh" />
              </a>
            </Grid>
          </div>
          <div className={styles.item2} >
            <Grid item xs={1} sx={{ mx: 5 }}>
              <a href="/">
                <img src="/images/logo/mainlogo-removebg.png" height="80vh" />
              </a>
            </Grid>
          </div>
          <div className={styles.item3} >
            <Grid item xs={1} sx={{ mx: 5, my: 2, minWidth: "330px" }}>
              <a href="tel:02-2622-8081">
                <Grid item xs={4} sx={{ mx: 5, display: "flex" }}>
                  <PhoneIcon fontSize="large" />
                  <Grid sx={{ my: 1 }}>전화상담: 02-2622-8081~2</Grid>
                </Grid>
                <Grid item xs={4} sx={{ mx: 5, display: "flex" }}>
                  <FaxIcon fontSize="large" />
                  <Grid sx={{ my: 1 }}>팩스번호: 02-2622-8083</Grid>
                </Grid>
              </a>
            </Grid>
          </div>

        </div>
      </Box>
      {/* <ResponsiveAppBar></ResponsiveAppBar> */}
      <CustomAppBar />
    </Box>
  );
}
