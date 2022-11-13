import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Select from "./Select";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  color: theme.palette.common.white,
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "white",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function Header({
  searchProps = {},
  filterProps = {},
  onChangeHandler,
}) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color="transparent" position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Search Hacker News
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              value={searchProps.value}
              onChange={(event) => onChangeHandler(event, searchProps.id)}
              placeholder="Search stories by title, url or author..."
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box
            sx={{
              display: "flex",
              gap: 2,
              marginTop: "-5px",
            }}
          >
            <Select
              id="SEARCH_X"
              placeholder=""
              options={filterProps.SEARCH_X.items}
              defaultValue={filterProps.SEARCH_X.value}
              onSelectValueChange={onChangeHandler}
            />
            <Select
              id="SEARCH_BY"
              placeholder="by"
              options={filterProps.SEARCH_BY.items}
              defaultValue={filterProps.SEARCH_BY.value}
              onSelectValueChange={onChangeHandler}
            />
            <Select
              id={"SEARCH_FOR"}
              placeholder="for"
              options={filterProps.SEARCH_FOR.items}
              defaultValue={filterProps.SEARCH_FOR.value}
              onSelectValueChange={onChangeHandler}
            />
          </Box>
          <Box sx={{ flexGrow: 1 }} />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
