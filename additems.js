import fetch from "node-fetch";
import { data } from "./hotelsV2.js";

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
let i = 0;

const addToDB = async (hotel) => {
  let Hotel = {
    name: hotel.title,
    rating: hotel.rating,
    reviewCount: hotel.reviewCount,
    webSite: hotel.website,
    phoneNumber: hotel.phoneNumber,
    imageUrl: hotel.imgUrl,
  };
  let Location = {
    lat: hotel.latitude,
    lon: hotel.longitude,
    address: hotel.address,
    name: hotel.plusCode,
  };
  let Locality = {
    name: hotel.addressJson.locality,
  };
  let City = {
    name: hotel.addressJson.city,
  };

  const cityRes = await fetch("http://localhost:4000/node/City/", {
    method: "POST",
    body: JSON.stringify(City),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const city = await cityRes.json();
  console.log(city);

  const localityRes = await fetch("http://localhost:4000/node/Locality/", {
    method: "POST",
    body: JSON.stringify(Locality),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const locality = await localityRes.json();
  console.log(locality);

  const hotelRes = await fetch("http://localhost:4000/node/Hotel/", {
    method: "POST",
    body: JSON.stringify(Hotel),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const hotelCreated = await hotelRes.json();
  console.log(hotelCreated);

  const locationRes = await fetch("http://localhost:4000/node/Location/", {
    method: "POST",
    body: JSON.stringify(Location),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const location = await locationRes.json();
  console.log(location);

  await fetch(
    `http://localhost:4000/relationship/LOCATED_IN/Hotel/${hotelCreated._id}/Location/${location._id}`,
    {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }
  );

  await fetch(
    `http://localhost:4000/relationship/POSITIONED_IN/Location/${location._id}/Locality/${locality._id}`,
    {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }
  );

  await fetch(
    `http://localhost:4000/relationship/EXIST_IN/Locality/${locality._id}/City/${city._id}`,
    {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }
  );

  await sleep(500);
  return i++;
};

(async () => {
  for (let j = 0; j < data.length; j++) {
    const num = await addToDB(data[i]);
    console.log(num);
  }
})();
