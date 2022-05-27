import React, { useState, useEffect } from "react";
import { getHotels } from "../../API";
import { StyledSearch } from "./StyledBrowse";

export default ({ setList }) => {
  const fetchHotels = async (title) => {
    const fetchedHotels = await getHotels("name", "asc", title);
    setList([...fetchedHotels]);
  };

  const handleChange = (e) => {
    const { value } = e.target;
    fetchHotels(value);
  };

  return (
    <StyledSearch
      type="search"
      placeholder="Search for hotel ..."
      onChange={handleChange}
    />
  );
};
