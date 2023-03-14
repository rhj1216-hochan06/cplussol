import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/MainPage";
import Header1 from "./components/main/Header";
import Box from "@mui/material/Box";
import Footer1 from "./components/main/Footer";
import RedirectPage from "./pages/RedirectPage";
import MapPage from "./pages/MapPage";
const App = () => {
  return (
    <div className="App">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <BrowserRouter>
          <Header1 />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="*" element={<RedirectPage />} />
            <Route path="map" element={<MapPage />} />
          </Routes>
          <Footer1 />
        </BrowserRouter>
      </Box>
    </div>
  );
};

export default App;
