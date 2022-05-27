import React, { useEffect, useState } from "react";
import Hotel from "./Hotel";
import Search from "./Search";
import { StyledList } from "./StyledBrowse";

export default ({ hotelsList }) => {
  const [list, setList] = useState(null);

  useEffect(() => {
    setList(hotelsList);
    return () => {};
  }, [hotelsList]);

  return (
    <StyledList>
      <Search setList={setList} />
      {list?.map((hotel) => (
        <Hotel key={hotel._id} hotel={hotel} />
      ))}
    </StyledList>
  );
};
