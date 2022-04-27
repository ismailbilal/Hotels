const API_BASE = process.env.REACT_APP_API_BASE;

console.log(API_BASE);

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

export const getUsers = async () => {
  const response = await fetch(API_BASE + "/user");
  const data = await response.json();
  return data;
};
