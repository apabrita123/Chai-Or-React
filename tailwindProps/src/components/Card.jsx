import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

export default function ActionAreaCard({ model }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia component="img" height="120" image={model.img} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {model.title}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Created By : {model.author}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
