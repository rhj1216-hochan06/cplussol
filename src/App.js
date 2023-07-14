import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/MainPage";
import Header1 from "./components/main/Header";
import Box from "@mui/material/Box";
import Footer1 from "./components/main/Footer";
import RedirectPage from "./pages/RedirectPage";
import MapPage from "./pages/MapPage";
import IntroductionPage from "./pages/IntroductionPage";
import DetailPage from "./pages/DetailPage";
import CategoryPage from "./pages/CategoryPage";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/robots.txt"
            element={
              <pre>
                {`# https://www.robotstxt.org/robotstxt.html
User-agent: *
Disallow:

Sitemap: https://rhj1216-1216.github.io/sitemap.xml
`}
              </pre>
            }
          />
          <Route
            element={
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  minHeight: "100vh",
                }}
              >
                <Header1 />
                <Route path="/" element={<Main />} />
                <Route path="introduction" element={<IntroductionPage />} />
                <Route path="map" element={<MapPage />} />
                <Route path="/products/:id" element={<DetailPage />} />
                <Route path="/category/:category" element={<CategoryPage />} />
                <Footer1 />
              </Box>
            }
          />
          <Route path="*" element={<RedirectPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
