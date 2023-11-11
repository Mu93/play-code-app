import { CheckCircle } from "@mui/icons-material";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import {
  demoChannelTitle,
  demoVideoTitle,
  demoChannelUrl,
  demoVideoUrl,
  demoThumbnailUrl,
} from "../constants";

function VideoCard({
  video: {
    id: { videoId },
    snippet,
  },
}) {
  const {
    channelId,
    channelTitle,
    title,
    thumbnails: {
      high: { url },
    },
  } = snippet;
  return (
    <Card sx={{ width: { xs: "100%", md: "320px" } }}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={url}
          alt={title ? title : demoVideoTitle}
          sx={{ width: 360, height: 180 }}
        />

        <CardContent sx={{ backgroundColor: "#1e1e1e", height: 106 }}>
          <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <Typography sx={{ color: "#fff", fontWeight: "bold" }}>
              {title ? title.slice(0, 50) : demoVideoTitle.slice(0, 50)}
            </Typography>
          </Link>
          <Link to={channelId ? `/channel/${channelId}` : demoChannelUrl}>
            <Typography
              variant="subtitle2"
              sx={{ color: "gray", fontWeight: "bold" }}
            >
              {channelTitle.slice(0, 50) || demoChannelTitle.slice(0, 50)}
              <CheckCircle sx={{ fontSize: 12, color: "#5685F5", ml: "5px" }} />
            </Typography>
          </Link>
        </CardContent>
      </Link>
    </Card>
  );
}

export default VideoCard;
