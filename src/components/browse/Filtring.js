import { useEffect, useState } from "react";
import { getCities, getCityLocalities } from "../../API";
import { StyledFiltring } from "./StyledBrowse";

export default () => {
  const [cities, setCities] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [localities, setLocalities] = useState(null);

  const handleChange = () => {
    console.log("hello");
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCities();
      setCities([...data]);
      setSelectedCity(data[0]._id);
    };
    fetchData().catch(console.error);
    return () => {};
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCityLocalities(selectedCity);
      setLocalities([...data]);
    };
    if (selectedCity) {
      fetchData().catch(console.error);
    }
    return () => {};
  }, [selectedCity]);

  return (
    <StyledFiltring onChange={handleChange} className="changeable">
      <label htmlFor="sortBy">Sort By</label>
      <select name="sortBy" id="sortBy">
        <option value="name">Name</option>
        <option value="rating">Rating</option>
      </select>
      <div className="orderInputs">
        <input type="radio" name="sortingOrder" id="asc" value="DESC" />
        <label htmlFor="acs">
          ASC
          <i className="fas fa-sort-amount-down-alt"></i>
        </label>
        <input type="radio" name="sortingOrder" id="desc" value="" />
        <label htmlFor="desc">
          DESC
          <i className="fas fa-sort-amount-down"></i>
        </label>
      </div>
      <label htmlFor="city">City</label>
      <select name="city" id="city">
        {cities?.map((city) => (
          <option key={city?._id} value={city?._id}>
            {city?.name}
          </option>
        ))}
      </select>
      <label htmlFor="locality">Locality</label>
      <select name="locality" id="locality">
        {localities?.map((locality) => (
          <option key={locality?._id} value={locality?._id}>
            {locality?.name}
          </option>
        ))}
      </select>
    </StyledFiltring>
  );
};
