import FaxIcon from "@mui/icons-material/Fax";
import PhoneIcon from "@mui/icons-material/Phone";
import Box from "@mui/material/Box";
import CustomAppBar from "./CustomAppBar.js";
import styles from "./Header.module.css";

export default function Header1() {
  return (
    <Box>
      <Box>
        <div className={styles.container1}>
          <div className={styles.item1}>
            <div className={styles.logoBox}>
              <a href="/">
                <img
                  className={styles.leftLogo}
                  src="/images/logo/leftlogo.jpg"
                  alt="씨플러스솔루션 심볼 로고"
                />
              </a>
            </div>
          </div>

          <div className={styles.item2}>
            <div className={styles.logoBox}>
              <a href="/">
                <img
                  className={styles.mainLogo}
                  src="/images/logo/mainlogo-removebg.png"
                  alt="씨플러스솔루션 메인 로고"
                />
              </a>
            </div>
          </div>

          <div className={styles.item3}>
            <div className={styles.contactCard}>
              <a className={styles.contactRow} href="tel:02-2622-8081">
                <span className={styles.contactIcon}>
                  <PhoneIcon fontSize="small" />
                </span>
                <span className={styles.contactText}>
                  <span className={styles.contactLabel}>전화 상담</span>
                  <span className={styles.contactValue}>02-2622-8081~2</span>
                </span>
              </a>
              <div className={styles.contactDivider} />
              <div className={styles.contactRowStatic}>
                <span className={styles.contactIcon}>
                  <FaxIcon fontSize="small" />
                </span>
                <span className={styles.contactText}>
                  <span className={styles.contactLabel}>팩스 번호</span>
                  <span className={styles.contactValue}>02-2622-8083</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </Box>
      <CustomAppBar />
    </Box>
  );
}
