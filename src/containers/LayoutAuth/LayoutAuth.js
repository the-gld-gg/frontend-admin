import React from 'react'
import styles from "./LayoutAuth.module.css";
import { Link } from 'react-router-dom'
import { useLocation } from "react-router-dom";
import { Heading, Text } from "@chakra-ui/core";

const LayoutAuth = ({
  children,
  user,
}) => {
  let location = useLocation();
  return (
    <div className={styles.layout}>
      <div className={styles.leftSidebar}>
        <Heading>Guild Admin</Heading>
        <Text fontSize="md">(Welcome {user.name}!)</Text>
        <ul>
          <li className={location.pathname === "/" && styles.activeMenu}>
            <Link to="/">
              <button>Dashboard</button>
            </Link>
          </li>
          <li className={location.pathname === "/users" && styles.activeMenu}>
            <Link to="/users">
              <button>Users</button>
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.contentArea}>{children}</div>
    </div>
  );
}

export default LayoutAuth