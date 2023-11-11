import { Box, Stack } from "@mui/material";
import { VideoCard, ChannelCard } from "./";

Box;

function Videos({ videos }) {
  console.log("videos =>", videos);
  return (
    <Stack direction={"row"} flexWrap={"wrap"} justifyContent={"start"} gap={2}>
      {videos?.map((vid) => (
        <Box key={vid.id.videoId}>
          {vid.id.channelId && <ChannelCard channelInfo={vid} />}
          {vid.id.videoId && <VideoCard video={vid} />}
        </Box>
      ))}
    </Stack>
  );
}

export default Videos;
