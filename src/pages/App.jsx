import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import SearchAndFilter from "./SearchAndFilter";
import { List, Pagination, Skeleton } from "../components";
import {
  DAY_IN_SECONDS,
  defaultFilterValues,
  filterEnums,
} from "../utilities/constants";
import { requestNewsByDate, requestNewsByPopularity } from "../services";
import { debounce } from "../utilities/utils";

const AppContainer = styled("div")(() => ({}));
const RequestNewsBy = {
  DATE: requestNewsByDate,
  POP: requestNewsByPopularity,
};

export default function App() {
  const [requestInProgress, setRequestInProgress] = React.useState(false);
  const [paginationData, setPaginationData] = React.useState({
    page: 1,
    count: 1,
  });
  const [customDate, setCustomDate] = React.useState({
    start: new Date(),
    end: new Date(new Date().getTime() + DAY_IN_SECONDS * 1000),
  });

  const [inputFields, setInputFields] = React.useState({
    [filterEnums.SEARCH_INPUT]: defaultFilterValues[filterEnums.SEARCH_INPUT],
    [filterEnums.SEARCH_X]: defaultFilterValues[filterEnums.SEARCH_X],
    [filterEnums.SEARCH_BY]: defaultFilterValues[filterEnums.SEARCH_BY],
    [filterEnums.SEARCH_FOR]: defaultFilterValues[filterEnums.SEARCH_FOR],
  });
  const [currentNews, setCurrentNews] = React.useState([]);

  React.useEffect(() => {
    fetchNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    debouncedMethod();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    paginationData.page,
    inputFields.SEARCH_INPUT,
    inputFields.SEARCH_X,
    inputFields.SEARCH_FOR,
    inputFields.SEARCH_BY,
  ]);

  const debouncedMethod = debounce(function () {
    fetchNews();
  }, 300);

  const handlePageChange = (page) => {
    setPaginationData((prev) => ({ ...prev, page }));
  };

  const handleCustomDateChange = ({ target: { name, value } }) => {
    setCustomDate((prev) => ({
      ...prev,
      [name]: new Date(value).getTime(),
    }));
  };

  const fetchNews = async () => {
    setRequestInProgress(true);
    try {
      const payload = {
        page: paginationData.page,
        query: inputFields.SEARCH_INPUT,
        filters: {
          tags: inputFields.SEARCH_X,
          numericFilters:
            inputFields.SEARCH_FOR !== "CUSTOM" &&
            inputFields.SEARCH_FOR !== "ALL"
              ? "created_at_i>" + inputFields.SEARCH_FOR
              : inputFields.SEARCH_FOR === "CUSTOM"
              ? `created_at_i>${customDate.start},created_at_i<${customDate.end}`
              : "",
        },
      };
      const response = await RequestNewsBy[inputFields.SEARCH_BY](payload);
      const validHits = (response.hits || []).filter(
        (i) => i.story_title || i.title
      );
      setCurrentNews(validHits);
      setPaginationData((prev) => ({ ...prev, count: response.nbPages }));
    } catch (e) {
      console.error(e);
    } finally {
      setRequestInProgress(false);
    }
  };

  return (
    <AppContainer>
      <SearchAndFilter
        inputFields={inputFields}
        onInputFieldsChange={setInputFields}
      />
      {requestInProgress ? <Skeleton /> : <List searchX={inputFields.SEARCH_X} dataList={currentNews} />}
      <Box sx={{ paddingBottom: 2, margin: "auto", display: "flex", justifyContent: "center" }}>
        <Pagination
          count={paginationData.count}
          page={paginationData.page}
          onPageChange={handlePageChange}
        />
      </Box>
    </AppContainer>
  );
}
