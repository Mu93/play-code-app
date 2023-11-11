import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { ChannelCard, Videos } from "../components";
import { fetchFromAPI } from "../constants/fetchFromAPI";

function ChannelDetails() {
  const { id } = useParams();
  const [channelInfo, setChannelInfo] = useState(null);
  const [videos, setVideos] = useState(null);

  console.log(channelInfo);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetchFromAPI(`channels?part=snippet&id=${id}`);
        setChannelInfo(res?.items[0]);

        const videosData = await fetchFromAPI(
          `search?channelId=${id}&part=snippet&order=date`
        );

        setVideos(videosData?.items);
      } catch (error) {
        console.error("Error:", error.message);
      }
    };

    fetchData();
  }, [id]);

  return (
    <>
      <Box minHeight="95vh">
        <Box>
          <div
            style={{
              height: "300px",
              background:
                "linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)",
              zIndex: 10,
            }}
          />
          <ChannelCard channelInfo={channelInfo} marginTop="-93px" />
        </Box>
        <Box p={2} display="flex">
          <Box sx={{ mr: { sm: "100px" } }} />
          <Videos videos={videos} />
        </Box>
      </Box>
    </>
  );
}

export default ChannelDetails;
