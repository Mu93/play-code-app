import { Route, Routes } from "react-router";
import "./App.css";
import { Box } from "@mui/material";
import { Navbar } from "./components/index";
import {
  ChannelDetails,
  Feed,
  SearchFeed,
  VideoDetail,
} from "./container/index";

function App() {
  return (
    <>
      <Box sx={{ backgroundColor: "#000" }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetail />} />
          <Route path="/channel/:id" element={<ChannelDetails />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </Box>
    </>
  );
}

export default App;
