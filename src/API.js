const API_BASE = process.env.REACT_APP_API_BASE;
// const API_BASE = "http://localhost:5000";

export const getAllUsers = async () => {
  const res = await fetch(`${API_BASE}/user`);
  const data = await res.json();
  return data;
};

export const deleteUserFromDB = async (userId) => {
  const res = await fetch(`${API_BASE}/user/${userId}`, {
    method: "DELETE",
    mode: "cors",
    body: JSON.stringify({}),
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });
  const data = res.json();
  return data;
};

export const deleteAdminFromDB = async (userId) => {
  const res = await fetch(`${API_BASE}/admin/${userId}`, {
    method: "DELETE",
    mode: "cors",
    body: JSON.stringify({}),
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });
  const data = res.json();
  return data;
};

export const getAllAdmins = async () => {
  const res = await fetch(`${API_BASE}/admin`);
  const data = await res.json();
  return data;
};

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

export const addAdmin = async (email, password) => {
  const res = await fetch(API_BASE + "/admin", {
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

export const getHotel = async (hotelId) => {
  const res = await fetch(`${API_BASE}/hotel/${hotelId}`);
  const data = await res.json();
  return data;
};

export const getHotels = async (
  sortingType = "name",
  order = "asc",
  name = ""
) => {
  const res = await fetch(
    `${API_BASE}/hotel?sortingType=${sortingType}&order=${order}&name=${name}`
  );
  const data = await res.json();
  return data;
};

export const getLocation = async (hotelId) => {
  const res = await fetch(`${API_BASE}/hotel/${hotelId}/location`);
  const data = await res.json();
  return data;
};

export const getLocations = async () => {
  const res = await fetch(`${API_BASE}/location`);
  const data = await res.json();
  return data;
};

export const getCities = async () => {
  const res = await fetch(`${API_BASE}/city`);
  const data = await res.json();
  return data;
};

export const getHotelByLocation = async (locationId) => {
  const res = await fetch(`${API_BASE}/location/${locationId}/hotel`);
  const data = await res.json();
  return data;
};

export const getCityLocalities = async (cityId) => {
  const res = await fetch(`${API_BASE}/city/${cityId}/locality`);
  const data = await res.json();
  return data;
};

export const getLocalityHotels = async (localityId) => {
  const res = await fetch(`${API_BASE}/locality/${localityId}/hotel`);
  const data = await res.json();
  return data;
};

export const sendReview = async (userId, hotelId, rating, comment) => {
  const res = await fetch(`${API_BASE}/user/${userId}/rate/hotel/${hotelId}`, {
    method: "POST",
    mode: "cors",
    body: JSON.stringify({ rating: rating, comment: comment }),
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });
  const data = res.json();
  return data;
};

export const getUserId = async (username) => {
  const res = await fetch(`${API_BASE}/user/${username}/id`);
  const data = await res.json();
  return data;
};

export const getReviews = async (hotelId) => {
  const res = await fetch(`${API_BASE}/hotel/${hotelId}/reviews`);
  const data = await res.json();
  return data;
};

export const addHotel = async (hotel) => {
  const res = await fetch(`${API_BASE}/hotel`, {
    method: "POST",
    mode: "cors",
    body: JSON.stringify(hotel),
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });
  const data = res.json();
  return data;
};

export const addLocation = async (location) => {
  const res = await fetch(`${API_BASE}/location`, {
    method: "POST",
    mode: "cors",
    body: JSON.stringify(location),
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });
  const data = res.json();
  return data;
};

export const addLocationToHotel = async (hotelId, locationId) => {
  const res = await fetch(
    `${API_BASE}/hotel/${hotelId}/Location/${locationId}`,
    {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }
  );
  const data = await res.json();
  return data;
};

export const deleteReviewFromDB = async (reviewId) => {
  const res = await fetch(`${API_BASE}/admin/review/${reviewId}`, {
    method: "DELETE",
    mode: "cors",
    body: JSON.stringify({}),
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });
  const data = res.json();
  return data;
};
