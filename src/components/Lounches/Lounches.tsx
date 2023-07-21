import React, { useEffect, useState } from "react";
import { LaunchType } from "../../Types/launches";
import { api } from "../../api";
import { Grid } from "@mui/material";
import Launch from "../Launch/Launch";
import "./Lounches.css";

const Lounches = () => {
  const [lounches, setLounches] = useState<LaunchType[]>([]);

  useEffect(() => {
    const fetchLaunchesAndSet = async () => {
      const fetchedLaunches = await api.fetchAllLaunches();
      setLounches(fetchedLaunches);
    };

    fetchLaunchesAndSet();
  }, []);

  // console.log("Lounches", lounches);

  return (
    <div className="launches_container">
      <h2>All Our Missions</h2>

      <Grid container spacing={2}>
        {lounches.map((launch) => (
          <Launch key={launch.flight_number} launch={launch} />
        ))}
      </Grid>
    </div>
  );
};

export default Lounches;
