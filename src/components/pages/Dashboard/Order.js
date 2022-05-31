import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Loging from "../Loding/Loging";
import UserRow from "./UserRow";

const Order = () => {
  const [users, setUser, isLoading, refetch] = useState([]);
  useEffect(() => {
    fetch("https://guarded-refuge-32359.herokuapp.com/user", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);
  if (isLoading) {
    return <Loging></Loging>;
  }
  console.log(users);

  return (
    <div>
      <h1 className="text-2xl font-bold text-center">ALL USER {users.lenrh}</h1>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Users</th>
              <th>Admin</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <UserRow
                key={user._id}
                refetch={refetch}
                user={user}
                setUser={setUser}
              ></UserRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Order;
