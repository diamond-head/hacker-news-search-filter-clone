import * as React from "react";
import MuiPagination from "@mui/material/Pagination";

export default function Pagination({ count = 1, page = 1, onPageChange }) {
  const [_page, setPage] = React.useState(page);
  const handleChange = (event, value) => {
    setPage(value);
    onPageChange(value);
  };

  return <MuiPagination count={count} page={_page} onChange={handleChange} />;
}
