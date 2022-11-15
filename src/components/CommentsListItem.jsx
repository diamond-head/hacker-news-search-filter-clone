import React from "react";
import { styled } from "@mui/material/styles";
import { ListItemText, ListItem, Card, Box, Typography } from "@mui/material";
import { escapeHtml, timeSince } from "../utilities/utils";

const ListItemContainer = styled("div")(() => ({}));
const PrimaryNodeContainer = styled(ListItemContainer)(() => ({}));
const PrimaryNodeContent = styled("div")(() => ({
}));
const SecondaryNodeContainer = styled(ListItemContainer)(() => ({}));

const getPrimaryNode = (nodeValue) => {
  const oneliner = [`${nodeValue.points} `, 'points', ' | ', nodeValue.author, ' | ', nodeValue.posted, ' | ', 'on ', nodeValue.title].join('')
  return (
    <PrimaryNodeContainer>
       <Box sx={{ display: "flex" }}>
        <PrimaryNodeContent>
          {oneliner}
        </PrimaryNodeContent>
      </Box>
    </PrimaryNodeContainer>
  );
};

const getSecondaryNode = (nodeValue) => {
  return (
    <SecondaryNodeContainer>
      <Box sx={{ display: "flex" }}>
        <Typography
          component="p"
          variant="div"
          sx={{
            fontSize: 14,
            fontWeight: 400,
            textDecoration: "none",
            color: 'rgba(0, 0, 0)'
          }}
        >
          {escapeHtml(nodeValue.text)}
        </Typography>
      </Box>
    </SecondaryNodeContainer>
  );
};

export default function CustomListItem({
  story_title = null,
  story_url = null,
  created_at_i = new Date(),
  points = 0,
  author = null,
  title = null,
  url = null,
  comment_text = null
}) {
  return (
    <ListItemContainer>
      <ListItem>
        <Card sx={{ padding: 1 }}>
          <Box>
            <ListItemText
              primaryTypographyProps={{
                fontWeight: 400,
                fontSize: 12,
                color: "rgba(0, 0, 0, 0.65)"
              }}
              primary={getPrimaryNode({
                author,
                posted: timeSince(created_at_i),
                points: points || 0,
                title: story_title || title,
                url: story_url || url,
              })}
              secondary={getSecondaryNode({
                text: comment_text
              })}
            />
          </Box>
        </Card>
      </ListItem>
    </ListItemContainer>
  );
}
