import { ArrowBack, Person } from "@mui/icons-material";
import { AppBar, Tab, Tabs } from "@mui/material";
import * as React from "react";
import styled from "styled-components";

import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import { Link } from "react-router-dom";

const drawerWidth = 240;
const navItems = ["홈 화면", "제품소개", "회사소개", "찾아오시는길"];

const StyledAppBar2 = styled(AppBar)`
  && {
    background-color: rgba(52, 152, 219, 0.5);
    color: rgb(0, 0, 0);
    font-size: 1rem;
    font-weight: 800;
  }
`;
const CustomAppBar = (props) => {
  const [value2, setValue2] = React.useState(0);
  const handleChange2 = (event, newValue) => {
    setValue2(newValue);
  };

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        회사 이름
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* <HomeIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
            <Box sx={{ flexGrow: 1, display: { xs: "flex", sm: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleDrawerToggle}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Box component="nav">
                <Drawer
                  container={container}
                  variant="temporary"
                  open={mobileOpen}
                  onClose={handleDrawerToggle}
                  ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                  }}
                  sx={{
                    display: { xs: "block", sm: "none" },
                    "& .MuiDrawer-paper": {
                      boxSizing: "border-box",
                      width: drawerWidth,
                    },
                  }}
                >
                  {drawer}
                </Drawer>
              </Box>
            </Box>

            {/*  */}

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", sm: "flex" },
                justifyContent: "space-evenly",
              }}
            >
              {/* 홈 화면 버튼 */}
              <Button
                key="홈 화면"
                onClick={handleOpenUserMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <Typography fontSize={20}>홈 화면</Typography>
              </Button>

              {/* 제품 소개 버튼 */}
              <Button
                key="홈 화면"
                onClick={handleOpenUserMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <Typography fontSize={20}>제품 소개</Typography>
              </Button>

              {/* 회사 소개 버튼 */}
              <Button
                key="홈 화면"
                onClick={handleOpenUserMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <Typography fontSize={20}>회사 소개</Typography>
              </Button>

              {/* 찾아오시는 길 버튼 */}
              <Button
                key="홈 화면"
                onClick={handleOpenUserMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <Link to="/map">
                  <Typography fontSize={20}>찾아오시는 길</Typography>
                </Link>
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <StyledAppBar2 position="static">
        <Tabs value={value2} onChange={handleChange2} aria-label="Main Tabs">
          <Tab label="환자 등록" icon={<ArrowBack />} />
          <Tab label="내원 등록" icon={<ArrowBack />} />
          <Tab label="환자 찾기/내원찾기" icon={<Person />} />
          <Tab label="처방 생성" icon={<Person />} />
          <Tab label="처방조회" icon={<Person />} />
          <Tab label="채혈" icon={<Person />} />
          <Tab label="검사의뢰" icon={<Person />} />
          <Tab label="검사조회" icon={<Person />} />
          <Tab label="부적합결과입력" icon={<Person />} />
        </Tabs>
      </StyledAppBar2>
    </>
  );
};
export default CustomAppBar;
