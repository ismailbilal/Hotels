import { useEffect, useState } from "react";
import {
  getCities,
  getCityLocalities,
  getHotels,
  getLocalityHotels,
} from "../../API";
import { StyledFiltring } from "./StyledBrowse";

export default ({ setHotels }) => {
  const [cities, setCities] = useState(null);
  const [localities, setLocalities] = useState(null);
  const [filtering, setFiltering] = useState({
    sortBy: "name",
    city: "all",
    locality: "all",
    sortingOrder: "asc",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFiltering({
      ...filtering,
      [name]: value,
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCities();
      setCities([...data]);
      // setFiltering({ ...filtering, city: data[0]._id });
    };
    fetchData().catch(console.error);
    return () => {};
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setFiltering({ ...filtering, locality: "all" });
      if (filtering.city == "all") {
        setLocalities([]);
      } else {
        const data = await getCityLocalities(filtering.city);
        setLocalities([...data]);
      }
    };
    if (filtering.city) {
      fetchData().catch(console.error);
    }
    return () => {};
  }, [filtering.city, filtering.sortBy, filtering.sortingOrder]);

  useEffect(() => {
    const fetchData = async () => {
      let data;
      if (filtering.locality == "all") {
        data = await getHotels(filtering.sortBy, filtering.sortingOrder);
      } else {
        data = await getLocalityHotels(filtering.locality);
      }
      setHotels([...data]);
    };
    fetchData().catch(console.error);
    return () => {};
  }, [filtering.locality, filtering.sortBy, filtering.sortingOrder]);

  return (
    <StyledFiltring onChange={handleChange} className="changeable">
      <label htmlFor="sortBy">Sort By</label>
      <div className="select">
        <select name="sortBy" id="sortBy">
          <option value="name">Name</option>
          <option value="rating">Rating</option>
        </select>
        <span class="focus"></span>
      </div>
      <div className="orderInput">
        <div className="input">
          <input type="radio" name="sortingOrder" id="asc" value="asc" />
          <label htmlFor="asc">
            ASC
            <i className="fas fa-sort-amount-down-alt"></i>
          </label>
        </div>
        <div className="input">
          <input type="radio" name="sortingOrder" id="desc" value="desc" />
          <label htmlFor="desc">
            DESC
            <i className="fas fa-sort-amount-down"></i>
          </label>
        </div>
      </div>
      <label htmlFor="city">City</label>
      <div className="select">
        <select name="city" id="city">
          <option value="all">All</option>
          {cities?.map((city) => (
            <option key={city?._id} value={city?._id}>
              {city?.name}
            </option>
          ))}
        </select>
        <span class="focus"></span>
      </div>
      <label htmlFor="locality">Locality</label>
      <div className="select">
        <select name="locality" id="locality">
          <option value="all">All</option>
          {localities?.map((locality) => (
            <option key={locality?._id} value={locality?._id}>
              {locality?.name}
            </option>
          ))}
        </select>
        <span class="focus"></span>
      </div>
    </StyledFiltring>
  );
};
