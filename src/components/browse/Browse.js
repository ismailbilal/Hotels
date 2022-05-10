import React, { useEffect, useState } from "react";
import { getHotels } from "../../API";
import { StyledBrowse } from "./StyledBrowse";
import List from "./List";
import Filtring from "./Filtring";

export default () => {
  const [hotels, setHotels] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getHotels();
      setHotels([...data]);
    };
    fetchData().catch(console.error);
  }, []);

  return (
    <StyledBrowse className="changeable">
      <Filtring setHotels={setHotels} />
      <List hotelsList={hotels?.slice(pageNumber - 1, pageNumber + 10)} />
    </StyledBrowse>
  );
};
