import React from "react";
import { styled } from "@mui/material/styles";
import { ListItemText, ListItem, Card, Box, Typography } from "@mui/material";
import { timeSince } from "../utilities/utils";

const ListItemContainer = styled("div")(() => ({}));
const PrimaryNodeContainer = styled(ListItemContainer)(() => ({}));
const SecondaryNodeContainer = styled(ListItemContainer)(() => ({}));
const LineSepartor = styled("div")(() => ({
  marginTop: 4,
  marginBottom: 4,
  width: "100%",
  height: "1px",
  backgroundColor: "rgba(0, 0, 0)",
  opacity: 0.12,
}));
const SecondaryNodeContent = styled("div")(({ ignore, fs }) => ({
  fontSize: fs || 12,
  span: {
    fontSize: !ignore ? "16px" : "inherit",
    color: !ignore ? "rgba(0, 0, 0, 0.65)" : "inherit",
    fontWeight: 400,
  },
}));

const getPrimaryNode = (nodeValue) => {
  return (
    <PrimaryNodeContainer>
      <Typography
        href={nodeValue.href}
        component="a"
        variant="div"
        sx={{
          fontSize: 18,
          fontWeight: 700,
          textDecoration: "none",
          color: "rgba(0, 0, 0, 0.65)",
        }}
      >
        {nodeValue.text}
      </Typography>
    </PrimaryNodeContainer>
  );
};

const getSecondaryNode = (nodeValue) => {
  return (
    <SecondaryNodeContainer>
      <Box sx={{ display: "flex", gap: 2 }}>
        <SecondaryNodeContent>
          Points <span>{nodeValue.points}</span>
        </SecondaryNodeContent>
        <SecondaryNodeContent>
          Comments <span>{nodeValue.comments}</span>
        </SecondaryNodeContent>
      </Box>
      <LineSepartor />
      <Box sx={{ display: "flex", gap: 2 }}>
        {nodeValue.author && (
          <SecondaryNodeContent ignore fs={10}>
            By <span>{nodeValue.author}</span>
          </SecondaryNodeContent>
        )}
        <SecondaryNodeContent ignore fs={10}>
          Posted <span>{nodeValue.posted}</span>
        </SecondaryNodeContent>
      </Box>
    </SecondaryNodeContainer>
  );
};

export default function CustomListItem({
  story_title = null,
  story_url = null,
  created_at_i = new Date(),
  author = null,
  title = null,
  url = null,
  points = 0,
  num_comments = 0,
}) {
  return (
    <ListItemContainer>
      <ListItem>
        <Card sx={{ maxWidth: 230, padding: 1 }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <ListItemText
              primary={getPrimaryNode({
                text: story_title || title,
                href: story_url || url,
              })}
              secondary={getSecondaryNode({
                comments: num_comments,
                posted: timeSince(created_at_i),
                points: points,
                author,
              })}
            />
          </Box>
        </Card>
      </ListItem>
    </ListItemContainer>
  );
}
