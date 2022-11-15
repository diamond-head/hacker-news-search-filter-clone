import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Grid from "@mui/material/Grid";
import ListItem from "./ListItem";
import CommentsListItem from "./CommentsListItem";

function generate(element, list) {
  return list.map((value, index) => {
    if (value.story_title || value.title) {
      return (
        <Grid item>
          {React.cloneElement(element, {
            key: index,
            ...value,
          })}
        </Grid>
      )
    }
    return null
  })
}

const ListContainer = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export default function CustomList({ dataList, searchX }) {
  const isCommentView = searchX === 'comment'
  return (
    <Box sx={{ padding: '16px 0' }}>
      <ListContainer>
        <List>
          <Grid sx={{ justifyContent: "space-between" }} container spacing={1}>
            {generate(isCommentView ? <CommentsListItem /> : <ListItem />, dataList)}
          </Grid>
        </List>
      </ListContainer>
    </Box>
  );
}
