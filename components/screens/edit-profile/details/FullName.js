import React from "react";
import { Form } from "react-bootstrap";
import PropTypes from 'prop-types'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import styled from 'styled-components';

const styles = {
  root: {
    position: "relative",
    textAlign: 'left',
    margin: '20px 0'
  },
  control: {
    border: 'none',
  },
  icon: {
    position: 'absolute',
    top: '0px',
    right: '20px',
    cursor: 'pointer',
    padding: '7px',
    background: 'transparent'
  }
}
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
export const Name = ({ formik }) => {
  const input = React.useRef()
  const focusInput = () => input.current.focus()
  const { getFieldProps, touched, errors } = formik;
  return (
    <>
      <Form.Group md="4" controlId="Formik13" style={styles.root}>
        <Form.Label >Full Name</Form.Label>
        <Form.Control
        ref={input}
          type="text"
          name="displayName"
          placeholder='Full Name'
          {...getFieldProps("displayName")}
          isValid={touched.displayName && !errors.displayName}
          isInvalid={touched.displayName && !!errors.displayName}
        />
        <Form.Control.Feedback type="invalid">
          {errors.displayName}
        </Form.Control.Feedback>
      </Form.Group>
    </>
  );
};
Name.propTypes = {
  formik: PropTypes.object
};
