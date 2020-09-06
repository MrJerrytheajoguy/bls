import React from "react";
import PropTypes from "prop-types";
import { ListGroup, Col } from "react-bootstrap";
import styled from "styled-components";

const Details = styled(ListGroup)`
  padding: 15px 30px;
  background: #b9f6ca;
  margin-bottom: 20px;
  display: ${(props) => (props.text ? "none" : "block")};
`;
const Span = styled.span`
  font-weight: bold;
  padding-left: 20px;
`;

const Owner = ({ data, text }) => {
  return (
    <Details className="shadow-sm" text={text}>
      <ListGroup.Item className="row">
        Fullname: <Span>{data.displayName}</Span>
      </ListGroup.Item>
      <ListGroup.Item className="row">
        Phone Number: <Span>{data.phoneNumber}</Span>
      </ListGroup.Item>
      <ListGroup.Item className="row">
        Address: <Span>{data.address1}</Span>
      </ListGroup.Item>
      <ListGroup.Item className="row">
        City: <Span>{`${data.city} ${data.state}`}</Span>
      </ListGroup.Item>
    </Details>
  );
};
Owner.propTypes = {
  data: PropTypes.object,
};
export default Owner;
