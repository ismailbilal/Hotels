import React, { useEffect, useState } from "react";
import { getAllAdmins, getAllUsers } from "../../API";
import List from "./List";
import { StyledUsers } from "./StyledUsers";

export default () => {
  const [users, setUsers] = useState(null);
  const [admins, setAdmins] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      const fetchedUsers = await getAllUsers();
      setUsers([...fetchedUsers]);
      const fetchedAdmins = await getAllAdmins();
      setAdmins([...fetchedAdmins]);
    };
    fetchUsers().catch(console.error);
  }, []);
  return (
    <StyledUsers>
      <h4>Admins list</h4>
      <List list={admins} isAdmin={true} />
      <h4>Users list</h4>
      <List list={users} />
    </StyledUsers>
  );
};
