import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import ResponsiveAppBar from "./ResponsiveAppBar.js";

export default function Header1() {
  return (
    <Box
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
      }}
    >
      <Box>
        <h1>그림 그림 그림 그림</h1>
      </Box>
      <ResponsiveAppBar></ResponsiveAppBar>
    </Box>
  );
}
