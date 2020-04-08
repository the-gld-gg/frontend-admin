import React from 'react'
import { Box } from "@chakra-ui/core"
import styles from './ErrorMessage.module.css'
import LayoutForm from "../../containers/LayoutForm/LayoutForm";

const ErrorMessage = ({ children, color="#EE215B" }) => {
  return (
    <LayoutForm>
      <Box className={styles.errorMessage} color={color}>
        {children}
      </Box>
    </LayoutForm>
  );
}

export default ErrorMessage
