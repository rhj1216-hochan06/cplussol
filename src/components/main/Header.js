import FaxIcon from "@mui/icons-material/Fax";
import PhoneIcon from "@mui/icons-material/Phone";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import CustomAppBar from "./CustomAppBar.js";
import styles from "./Header.module.css";

export default function Header1() {
  return (
    <Box component="header" sx={{ px: { xs: 2, md: 3 }, pt: { xs: 2, md: 3 } }}>
      <Container maxWidth="xl" disableGutters>
        <div className={styles.headerShell}>
          <Link className={styles.brandLink} to="/">
            <span className={styles.partnerMark}>
              <img
                src="/images/logo/leftlogo.jpg"
                alt="Canon 파트너 로고"
              />
            </span>
            <span className={styles.brandContent}>
              <img
                className={styles.brandLogo}
                src="/images/logo/mainlogo-removebg.png"
                alt="씨플러스솔루션"
              />
              <span className={styles.brandCaption}>
                프린터, 복합기, 미니 포토프린터까지 기업 환경에 맞는 출력
                솔루션을 제안합니다.
              </span>
            </span>
          </Link>

          <div className={styles.contactPanel}>
            <a className={styles.contactItem} href="tel:02-2622-8081">
              <span className={styles.contactIcon}>
                <PhoneIcon />
              </span>
              <span>
                <Typography className={styles.contactLabel} component="span">
                  전화상담
                </Typography>
                <Typography className={styles.contactValue} component="span">
                  02-2622-8081~2
                </Typography>
              </span>
            </a>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>
                <FaxIcon />
              </span>
              <span>
                <Typography className={styles.contactLabel} component="span">
                  팩스번호
                </Typography>
                <Typography className={styles.contactValue} component="span">
                  02-2622-8083
                </Typography>
              </span>
            </div>
          </div>
        </div>
      </Container>
      <CustomAppBar />
    </Box>
  );
}
