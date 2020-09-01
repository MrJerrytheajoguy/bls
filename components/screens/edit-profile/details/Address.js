import React from "react";
import { Form } from "react-bootstrap";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from 'styled-components'

const styles = {
  root: {
    position: "relative",
  },
  control: {
    border: "none",
  },
};
const Icon = styled.div`
position: absolute;
top: 0px;
right: 20px;
cursor: pointer;
padding: 7px;
background: transparent;
@media(max-width: 400px){
  display: none;
}
`
export const Address = ({ formik }) => {
  const address1 = React.useRef();
  const address2 = React.useRef();
  const focusAddress1 = () => address1.current.focus();
  const { getFieldProps, touched, errors } = formik;
  return (
    <>
      <Form.Group md="4" controlId="Formik05" style={styles.root}>
        <Form.Label srOnly>Address Line 1</Form.Label>
        <Form.Control
          style={styles.control}
          ref={address1}
          type="text"
          name="address1"
          placeholder="Address"
          {...getFieldProps("address1")}
          isValid={touched.address1 && !errors.address1}
          isInvalid={touched.address1 && !!errors.address1}
        />
        <Form.Control.Feedback type="invalid">
          {errors.address1}
        </Form.Control.Feedback>
        <Icon onClick={focusAddress1}>
          <FontAwesomeIcon icon="pencil-alt" color='grey'/>
        </Icon>
      </Form.Group>
    </>
  );
};
Address.propTypes = {
  formik: PropTypes.object,
};
