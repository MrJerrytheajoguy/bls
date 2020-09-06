import React from "react";
import { Form } from "react-bootstrap";
import PropTypes from "prop-types";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const styles = {
  root: {
    position: "relative",
    textAlign: 'left',
    margin: '20px 0'
  },
  control: {
    border: "none",
  },
  icon: {
    position: "absolute",
    top: "0px",
    right: "20px",
    cursor: "pointer",
    padding: "7px",
    background: "transparent",
  },
};

export const EmailAndPhone = ({ formik }) => {
  const emailInput = React.useRef();
  const focusEmail = () => emailInput.current.focus();
  const { getFieldProps, touched, errors } = formik;
  return (
    <>
      <Form.Group md="4" controlId="Formik03" style={styles.root}>
        <Form.Label >Email</Form.Label>
        <Form.Control
          ref={emailInput}
          type="email"
          name="email"
          placeholder="Email"
          {...getFieldProps("email")}
        />
      </Form.Group>
      <Form.Group md="4" controlId="Formik04" style={styles.root}>
        <Form.Label>Phone</Form.Label>
        <Form.Control
          disabled
          type="tel"
          name="phoneNumber"
          placeholder="Phone"
          {...getFieldProps("phoneNumber")}
          isValid={touched.phoneNumber && !errors.phoneNumber}
          isInvalid={touched.phoneNumber && !!errors.phoneNumber}
        />
        <Form.Control.Feedback type="invalid">
          {errors.phoneNumber}
        </Form.Control.Feedback>
      </Form.Group>
    </>
  );
};
EmailAndPhone.propTypes = {
  formik: PropTypes.object,
};
