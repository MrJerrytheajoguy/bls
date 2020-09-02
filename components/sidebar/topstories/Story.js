import React, { useState } from "react";
import styled from "styled-components";
//import Img from '/Nestle.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";
import ShareModal from "./ShareModal";

const StoryImg = styled.div`
  .left {
    position: absolute;
    left: 5px;
    top: 5px;
    cursor: pointer;
  }
  .right {
    position: absolute;
    right: 5px;
    top: 5px;
    cursor: pointer;
  }
  position: relative;
  min-height: 30vh;
  color: white;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
  a:hover {
    color: white;
  }
`;
const Div = styled.div`
  padding: 20px 0;
  border-bottom: 3px dashed #eee;
`;
export const Story = ({ blog }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const url = "https://blog.betterlifesavings.com/blog/" + blog.id;
  return (
    <Div>
      <ShareModal show={show} handleClose={handleClose} url={url} />
      <StoryImg className="shadow">
        <p>
          <small>
            {new Date(blog.date).toDateString()}{" "}
            {new Date(blog.date).toLocaleTimeString()}
          </small>
        </p>
        <p>{blog.title}</p>
        <p style={{ float: "right", width: "fit-content" }}>
          <small>By {blog.author}</small>
        </p>

        <div className="right" onClick={handleShow}>
          <FontAwesomeIcon icon="share-alt" size="lg" color="#00b0ff" />
        </div>
        <div className="left">
          <FontAwesomeIcon icon="ellipsis-v" size="lg" color="#00b0ff" />
        </div>
        <Button variant="info" size="sm">
          <a href="https://blog.betterlifesavings.com/" target="_blank">
            Read
          </a>
        </Button>
      </StoryImg>
    </Div>
  );
};
