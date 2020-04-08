import React, { useState, useEffect } from "react";
import LayoutAuth from "../../containers/LayoutAuth/LayoutAuth";
import { Text, Spinner, Badge } from "@chakra-ui/core";
import axios from "axios";

const Users = ({ children, user }) => {
  const [apiResponse, setApiResponse] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios
      .get("https://guild.ehsangazar.com/api/user/list", {
        headers: {
          Authorization: `Bearer ${user.api_token}`,
        },
      })
      .then((response) => {
        setLoading(false);
        setApiResponse(response.data);
      })
      .catch((error) => {});
  });

  return (
    <LayoutAuth user={user}>
      <Text as="h3" fontSize="4xl" color="brand.800">
        Users {loading && <Spinner color="red.500" />}
      </Text>

      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        {apiResponse.data && (
          <tbody>
            {apiResponse.data.map((item) => (
              <tr>
                <td>{item.name}</td>
                <td>{item.email}</td>
              </tr>
            ))}
          </tbody>
        )}
        <div>
          {apiResponse.data && (
            <Badge>Total {apiResponse.data.length} users</Badge>
          )}
        </div>
      </table>
    </LayoutAuth>
  );
};

export default Users;
