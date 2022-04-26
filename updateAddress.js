import fetch from "node-fetch";

(async () => {
  const hotelRes = await fetch("http://localhost:4000/user");
  const hotels = await hotelRes.json();
  console.log(hotels);
})();
