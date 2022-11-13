import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import MuiSkeleton from "@mui/material/Skeleton";

export default function Skeleton() {
  return (
    <Grid container spacing={1} sx={{ justifyContent: "space-between" }}>
      {Array.from(new Array(10)).map((_, index) => (
        <Box key={index} sx={{ width: 210, marginRight: 4, my: 5 }}>
          <MuiSkeleton variant="rectangular" width={210} height={118} />
          <Box sx={{ pt: 0.5 }}>
            <MuiSkeleton />
            <MuiSkeleton width="60%" />
          </Box>
        </Box>
      ))}
    </Grid>
  );
}
