import React, { useCallback } from "react";
import { styled } from "@mui/material/styles";
import { Header } from "../components";

import {
  SEARCH_BY_OPTIONS,
  SEARCH_FOR_OPTIONS,
  SEARCH_X_OPTIONS,
  filterEnums,
} from "../utilities/constants";

const SearchFilterContainer = styled("div")(() => ({
  backgroundColor: "#ff742b",
}));

export default function SearchAndFilter({ inputFields, onInputFieldsChange }) {
  const getFilterProps = useCallback(() => {
    return {
      [filterEnums.SEARCH_X]: {
        items: SEARCH_X_OPTIONS,
        value: inputFields[filterEnums.SEARCH_X],
      },
      [filterEnums.SEARCH_BY]: {
        items: SEARCH_BY_OPTIONS,
        value: inputFields[filterEnums.SEARCH_BY],
      },
      [filterEnums.SEARCH_FOR]: {
        items: SEARCH_FOR_OPTIONS,
        value: inputFields[filterEnums.SEARCH_FOR],
      },
    };
  }, [inputFields]);

  const handleInputChange = (value, id) => {
    const _value = {
      [filterEnums.SEARCH_INPUT]: (value.target && value.target.value) || "",
      [filterEnums.SEARCH_X]: value,
      [filterEnums.SEARCH_BY]: value,
      [filterEnums.SEARCH_FOR]: value,
    };
    onInputFieldsChange((prev) => ({
      ...prev,
      [id]: _value[id],
    }));
  };

  const _filterProps = getFilterProps();
  return (
    <SearchFilterContainer>
      <Header
        searchProps={{
          id: filterEnums.SEARCH_INPUT,
          value: inputFields.SEARCH_INPUT,
        }}
        filterProps={_filterProps}
        onChangeHandler={handleInputChange}
      />
    </SearchFilterContainer>
  );
}
