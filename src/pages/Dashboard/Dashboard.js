import React from 'react'
import LayoutAuth from '../../containers/LayoutAuth/LayoutAuth'
import { Text } from "@chakra-ui/core"

const Dashboard = ({
    children,
    user,
}) => (
        <LayoutAuth user={user}>
            <Text as="h3" fontSize="4xl" color="brand.800">Dashboard</Text>
            Dashboard
        </LayoutAuth>
    )

export default Dashboard