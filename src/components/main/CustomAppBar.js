import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import * as React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const drawerWidth = 320;

const navItems = [
  {
    label: "홈",
    path: "/",
    match: (pathname) => pathname === "/" || pathname === "/home",
  },
  {
    label: "제품 소개",
    path: "/category/all",
    match: (pathname) =>
      pathname.startsWith("/category") || pathname.startsWith("/products"),
  },
  {
    label: "회사 소개",
    path: "/introduction",
    match: (pathname) => pathname.startsWith("/introduction"),
  },
  {
    label: "찾아오시는 길",
    path: "/map",
    match: (pathname) => pathname.startsWith("/map"),
  },
];

const CustomAppBar = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const handleNavigate = (path) => {
    navigate(path);
    setMobileOpen(false);
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      sx={{
        display: "flex",
        height: "100%",
        flexDirection: "column",
        px: 2,
        py: 3,
      }}
    >
      <Typography variant="subtitle2" color="secondary.main">
        CPLUS SOLUTION
      </Typography>
      <Typography sx={{ mt: 1, mb: 2 }} variant="h5">
        기업용 출력 환경을 더 간결하게 안내합니다.
      </Typography>
      <Typography variant="body2" color="text.secondary">
        제품 소개, 회사 정보, 연락처를 모바일에서도 같은 흐름으로 확인할 수
        있도록 메뉴를 정리했습니다.
      </Typography>
      <Divider sx={{ my: 3 }} />
      <List sx={{ px: 0, py: 0 }}>
        {navItems.map((item) => {
          const active = item.match(location.pathname);

          return (
            <ListItem key={item.label} disablePadding sx={{ mb: 1 }}>
              <ListItemButton
                selected={active}
                onClick={() => handleNavigate(item.path)}
                sx={{
                  px: 2,
                  py: 1.5,
                  "&.Mui-selected": {
                    backgroundColor: alpha("#0f172a", 0.06),
                  },
                }}
              >
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontWeight: active ? 800 : 700,
                    color: active ? "primary.main" : "text.primary",
                  }}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
      <Box
        sx={{
          mt: "auto",
          borderRadius: "var(--radius-md)",
          border: "1px solid var(--color-line)",
          backgroundColor: alpha("#ffffff", 0.82),
          p: 2,
        }}
      >
        <Typography variant="subtitle2" color="text.secondary">
          제품 문의
        </Typography>
        <Typography sx={{ mt: 0.5 }} variant="h6">
          02-2622-8081~2
        </Typography>
        <Typography variant="body2" color="text.secondary">
          평일 상담 및 구매 문의를 도와드립니다.
        </Typography>
      </Box>
    </Box>
  );

  return (
    <AppBar
      position="sticky"
      color="transparent"
      sx={{
        top: 0,
        mt: 2,
        backgroundColor: "transparent",
      }}
    >
      <Container maxWidth="xl" disableGutters>
        <Toolbar
          disableGutters
          sx={{
            minHeight: 72,
            justifyContent: "space-between",
            gap: 2,
            borderRadius: "var(--radius-lg)",
            border: `1px solid ${alpha("#ffffff", 0.12)}`,
            background:
              "linear-gradient(180deg, rgba(15, 23, 42, 0.92), rgba(15, 23, 42, 0.88))",
            px: { xs: 1.5, sm: 2.5 },
            py: 1,
            boxShadow: "0 20px 50px rgba(15, 23, 42, 0.18)",
            backdropFilter: "blur(16px)",
          }}
        >
          <Box sx={{ display: { xs: "flex", md: "none" }, alignItems: "center" }}>
            <IconButton
              size="large"
              edge="start"
              aria-label="메뉴 열기"
              onClick={handleDrawerToggle}
              sx={{
                color: "#ffffff",
                borderRadius: 3,
                border: `1px solid ${alpha("#ffffff", 0.12)}`,
              }}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              container={container}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true,
              }}
              sx={{
                display: { xs: "block", md: "none" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                },
              }}
            >
              {drawer}
            </Drawer>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 1,
            }}
          >
            {navItems.map((item) => {
              const active = item.match(location.pathname);

              return (
                <Button
                  key={item.label}
                  onClick={() => handleNavigate(item.path)}
                  aria-current={active ? "page" : undefined}
                  sx={{
                    px: 2.25,
                    py: 1.2,
                    borderRadius: 999,
                    color: active ? "primary.main" : "rgba(255, 255, 255, 0.86)",
                    backgroundColor: active
                      ? "rgba(255, 255, 255, 0.96)"
                      : "transparent",
                    "&:hover": {
                      backgroundColor: active
                        ? "rgba(255, 255, 255, 1)"
                        : "rgba(255, 255, 255, 0.08)",
                    },
                  }}
                >
                  {item.label}
                </Button>
              );
            })}
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.25,
              color: "rgba(255, 255, 255, 0.88)",
            }}
          >
            <Typography
              sx={{ display: { xs: "none", sm: "block" } }}
              variant="body2"
            >
              Canon 출력 솔루션 파트너
            </Typography>
            <Button
              color="inherit"
              variant="outlined"
              href="tel:02-2622-8081"
              sx={{
                borderColor: alpha("#ffffff", 0.22),
                color: "#ffffff",
                px: { xs: 1.8, sm: 2.5 },
                "&:hover": {
                  borderColor: alpha("#ffffff", 0.36),
                  backgroundColor: alpha("#ffffff", 0.08),
                },
              }}
            >
              문의하기
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default CustomAppBar;
