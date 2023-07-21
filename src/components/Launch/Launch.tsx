import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { LaunchType } from "../../Types/launches";

type LaunchPropc = {
  launch: LaunchType;
};

const Launch: React.FC<LaunchPropc> = ({ launch }) => {
  console.log(launch);

  return (
    <Card sx={{ maxWidth: "220px", margin: 2.3 }}>
      <CardMedia
        sx={{ height: 140, width: "100%", backgroundSize: "contain" }}
        image={launch.links.mission_patch}
        title={launch.mission_name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {launch.mission_name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {launch.launch_year}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
        <Button size="small">Share</Button>
      </CardActions>
    </Card>
  );
};
export default Launch;
