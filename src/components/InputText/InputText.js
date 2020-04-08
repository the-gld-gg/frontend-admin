import React from 'react'
import { useField } from "formik";
import { FormControl, Input } from "@chakra-ui/core"
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import LayoutForm from '../../containers/LayoutForm/LayoutForm'

const InputText = ({ label, color = "brand.900", ...props }) => {
  const [field, meta] = useField(props);

  return (
    <LayoutForm>
      <FormControl>
        <Input {...field} {...props} />
        {meta.touched && meta.error ? (
          <ErrorMessage color={color}>{meta.error}</ErrorMessage>
        ) : null}
      </FormControl>
    </LayoutForm>
  );
};

export default InputText