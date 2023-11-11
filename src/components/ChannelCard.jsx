import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { demoProfilePicture } from "../constants";

function ChannelCard({ channelInfo, marginTop }) {
  console.log("channelInfo => ", channelInfo);
  return (
    <Box
      sx={{
        boxShadow: "none",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: { xs: "100%", md: "320px" },
        height: "100%",
        marginTop,
      }}
    >
      <Link to={`/channel/${channelInfo?.id?.channelId}`}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            color: "#fff",
          }}
        >
          <CardMedia
            image={
              channelInfo?.snippet?.thumbnails?.high?.url || demoProfilePicture
            }
            alt={channelInfo?.snippet?.title}
            sx={{
              width: 180,
              height: 180,
              mb: 2,
              border: "1px solid #e3e3e3",
              borderRadius: "50%",
            }}
          />

          <Link to={`/channel/${channelInfo?.id?.channelId}`}>
            <Typography variant="h6" sx={{ color: "#fff", fontWeight: "bold" }}>
              {channelInfo?.snippet?.title.slice(0, 50)}
              <CheckCircle
                sx={{
                  width: 20,
                  height: 20,
                  fontSize: 12,
                  color: "#5685F5",
                  ml: "5px",
                }}
              />
            </Typography>
            {channelInfo?.statistics?.subscriberCount && (
              <Typography variant="">
                {parseInt(
                  channelInfo?.statistics?.subscriberCount
                ).toLocaleString()}{" "}
                Subscribers
              </Typography>
            )}
          </Link>
        </CardContent>
      </Link>
    </Box>
  );
}

export default ChannelCard;
