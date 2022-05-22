import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getCities,
  getCityLocalities,
  addHotel,
  addLocation,
  addLocationToHotel,
} from "../../API";
import { StyledFormAddHotel, StyledForm } from "./StyledForm";

export default () => {
  const navigate = useNavigate();

  const [cities, setCities] = useState(null);
  const [localies, setLocalies] = useState(null);
  const [hotelInfo, setHotelInfo] = useState({
    name: "",
    imageUrl: "",
    phoneNumber: "",
    webSite: "",
    address: "",
    lat: 0.0,
    lon: 0.0,
    plusCode: "",
    cityId: "",
    localityId: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHotelInfo({ ...hotelInfo, [name]: value });
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    const hotel = await addHotel({
      name: hotelInfo.name,
      rating: 0,
      reviewCount: 0,
      imageUrl: hotelInfo.imageUrl,
      phoneNumber: hotelInfo.phoneNumber,
      webSite: hotelInfo.webSite,
    });
    const location = await addLocation({
      name: hotelInfo.plusCode,
      address: hotelInfo.address,
      lon: hotelInfo.lon,
      lat: hotelInfo.lat,
    });
    const relation = await addLocationToHotel(hotel._id, location._id);
    if (relation) {
      navigate(`/browse/hotel/${hotel._id}`);
    }
  };

  useEffect(() => {
    const fetchCities = async () => {
      const fetchedCities = await getCities();
      setCities([...fetchedCities]);
    };
    fetchCities().catch(console.error);
  }, []);

  useEffect(() => {
    setLocalies([]);
    const fetchLocalities = async () => {
      const fetchedLocalities = await getCityLocalities(hotelInfo.cityId);
      setLocalies([...fetchedLocalities]);
    };
    if (hotelInfo.cityId != "") {
      fetchLocalities().catch(console.error);
    }
  }, [hotelInfo.cityId]);

  return (
    <StyledFormAddHotel>
      <StyledForm onChange={handleChange} onSubmit={handelSubmit}>
        <div className="info">
          <div className="name">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="website">
            <label htmlFor="webSite">Web Site</label>
            <input type="text" name="webSite" id="webSite" />
          </div>
          <div className="imageUrl">
            <label htmlFor="imageUrl">Image Url</label>
            <input type="text" name="imageUrl" id="imageUrl" />
          </div>
          <div className="phoneNumber">
            <label htmlFor="phone">Phone Number</label>
            <input type="text" name="phoneNumber" id="phone" />
          </div>
        </div>
        <div className="hotelAddress">
          <div className="address">
            <label htmlFor="address">Adress</label>
            <input type="text" name="address" id="address" />
          </div>
          <div className="plusCode">
            <label htmlFor="plusCode">Plus Code</label>
            <input type="text" name="plusCode" id="plusCode" />
          </div>
          <div className="cityLocality">
            <div className="inlineDiv">
              <label htmlFor="city">City</label>
              <select className="smallInput" name="cityId" id="city">
                <option value="">---</option>
                {cities?.map((city) => (
                  <option key={city._id} value={city._id}>
                    {city.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="inlineDiv">
              <label htmlFor="locality">Locality</label>
              <select className="smallInput" name="localityId" id="locality">
                {localies?.map((locality) => (
                  <option key={locality._id} value={locality._id}>
                    {locality.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="location">
            <div className="inlineDiv">
              <label htmlFor="lon">Longitude</label>
              <input className="smallInput" type="text" name="lon" id="lon" />
            </div>
            <div className="inlineDiv">
              <label htmlFor="lat">Latitude</label>
              <input className="smallInput" type="text" name="lat" id="lat" />
            </div>
          </div>
        </div>
        <button type="submit">save</button>
      </StyledForm>
    </StyledFormAddHotel>
  );
};
