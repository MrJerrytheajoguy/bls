import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { Button } from "react-bootstrap";

const buttons = {
  margin: 10,
};
const SideNav = styled.div`
  height: 100%;
  text-align: center;
  width: ${(props) => props.width};
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
  .nav-link {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 25px;
    color: #818181;
    display: block;
    transition: 0.3s;
  }

  .nav-link:hover {
    color: #f1f1f1;
  }

  .closebtn {
    position: absolute;
    top: 0;
    right: 25px;
    font-size: 36px;
    margin-left: 50px;
  }

  #main {
    transition: margin-left 0.5s;
    padding: 16px;
  }

  @media screen and (max-height: 450px) {
    padding-top: 15px;
    .nav-link {
      font-size: 18px;
    }
  }
`;
const Span = styled.span`
  color: white;
  font-size: 50px;
  opacity: 0.8;
  cursor: pointer;
`;
const Wallet = styled.div`
  height: 50px;
  }
`;
const SignIn = styled(Button)`
  color: white;
  border-radius: 15px;
  margin-left: 10px;
`;

export const MobileView = ({ width, close, data, userDetails }) => {
  return (
    <SideNav id="mySidenav" width={width}>
      <Span className="closebtn" onClick={close}>
        &times;
      </Span>
      <div onClick={close}>
        <Link href="/">
          <a className="nav-link">Home</a>
        </Link>
      </div>
      <div onClick={close}>
        {" "}
        <Link href="/about">
          <a className="nav-link"> About Us</a>
        </Link>
      </div>
      <div onClick={close}>
        <Link href="/contact">
          <a className="nav-link"> Contact</a>
        </Link>
      </div>
      <div onClick={close}>
        {" "}
        <Link href="/blog">
          <a className="nav-link"> Blog</a>
        </Link>
      </div>
      <div onClick={close}>
        {" "}
        <Link href="/support">
          <a className="nav-link">Support</a>
        </Link>
      </div>
      {data && userDetails && (
        <Wallet className="nav-link" onClick={close}>
          {userDetails.username ? (
            <Link href="/account">
              <a style={buttons}>
                <img src='/wallet.png' height="100%" alt="wallet" />
                <SignIn variant="outline-success" size="sm">
                  <strong>{userDetails.username}</strong>
                </SignIn>
              </a>
            </Link>
          ) : data.phoneNumber ? (
            <Link
              href={'/settings/edit-profile'}
            >
              <a style={buttons}>
                <img src='/wallet.png' height="100%" alt="wallet" />
                <SignIn variant="outline-success" size="sm">
                  <strong>{data.phoneNumber}</strong>
                </SignIn>
              </a>
            </Link>
          ) : (
            <Link href="/sign-in">
              <a style={buttons}>
                <img src='/wallet.png' height="100%" alt="wallet" />
                <SignIn variant="outline-success" size="sm">
                  sign in
                </SignIn>
              </a>
            </Link>
          )}
        </Wallet>
      )}
    </SideNav>
  );
};
