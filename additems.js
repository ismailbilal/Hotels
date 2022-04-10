import fetch from "node-fetch";
import { data } from "./hotelsV2.js";

(async () => {
  data.map((hotel) => {
    let Hotel = {
      title: hotel.title,
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
      plusCode: hotel.plusCode,
    };
    let Locality = {
      name: hotel.addressJson.locality,
    };
    let City = {
      name: hotel.addressJson.city,
    };
    console.log(Locality);
  });
})();
