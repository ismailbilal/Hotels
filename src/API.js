// const API_BASE = process.env.REACT_APP_API_BASE;
const API_BASE = "http://localhost:5000";

console.log(process.env.REACT_APP_API_BASE);

export const getAdminLogin = async (email, password) => {
  const res = await fetch(API_BASE + "/admin/login", {
    method: "POST",
    mode: "cors",
    body: JSON.stringify({ email: email, password: password }),
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });
  const data = res.json();
  return data;
};

export const createAccount = async (username, email, password) => {
  const res = await fetch(API_BASE + "/user", {
    method: "POST",
    mode: "cors",
    body: JSON.stringify({
      username: username,
      email: email,
      password: password,
    }),
    headers: {
      "Content-Type": "application/json; chatset=utf-8",
    },
  });
  const data = await res.json();
  return data;
};

export const accepted = async (username, email, password) => {
  const res = await fetch(API_BASE + "/user/accepted", {
    method: "POST",
    mode: "cors",
    body: JSON.stringify({
      username: username,
      email: email,
      password: password,
    }),
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });
  const data = res.json();
  return data;
};

export const getUserLogin = async (username, password) => {
  const res = await fetch(API_BASE + "/user/login", {
    method: "POST",
    mode: "cors",
    body: JSON.stringify({ username: username, password: password }),
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });
  const data = res.json();
  return data;
};

export const getHotels = async () => {
  const res = await fetch(`${API_BASE}/hotel`);
  const data = await res.json();
  return data;
};

export const getLocation = async (hotelId) => {
  const res = await fetch(`${API_BASE}/hotel/${hotelId}/location`);
  const data = await res.json();
  return data;
};

export const getCities = async () => {
  const res = await fetch(`${API_BASE}/city`);
  const data = await res.json();
  return data;
};

export const getCityLocalities = async (cityId) => {
  const res = await fetch(`${API_BASE}/city/${cityId}/locality`);
  const data = await res.json();
  return data;
};