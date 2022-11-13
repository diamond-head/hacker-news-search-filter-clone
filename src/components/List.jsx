import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Grid from "@mui/material/Grid";
import ListItem from "./ListItem";

function generate(element, list) {
  return list.map((value, index) => (
    <Grid item>
      {React.cloneElement(element, {
        key: index,
        ...value,
      })}
    </Grid>
  ));
}

const ListContainer = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export default function CustomList({ dataList }) {
  return (
    <Box sx={{}}>
      <ListContainer>
        <List>
          <Grid sx={{ justifyContent: "space-between" }} container spacing={1}>
            {generate(<ListItem />, dataList)}
          </Grid>
        </List>
      </ListContainer>
    </Box>
  );
}
