import fetch from "node-fetch";

(async () => {
  const res = await fetch("http://localhost:4000/Hotel/7TPUfAId");
  const localitys = await res.json();

  //   localitys.map((locality) => {});
  console.log(localitys);
})();
