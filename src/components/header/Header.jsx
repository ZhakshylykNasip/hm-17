import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Products } from "../cards/Products";
import { MyCart } from "../cards/MyCart";
import { MyOrder } from "../cards/MyOrder";
import { styled } from "styled-components";
import { Details } from "../cards/Details";

export const Header = () => {
  return (
    <>
      <Contaner style={{}}>
        <div>
          <Logo>LOGO </Logo>
        </div>
        <Block>
          <Links to="/products">
            <h2>Products</h2>
          </Links>
          <Links to="/cart">
            <h2>My cart</h2>
          </Links>
          <Links to="/order">
            <h2>My Orders</h2>
          </Links>
        </Block>
      </Contaner>
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id/details" element={<Details />} />

        <Route path="/cart" element={<MyCart />} />
        <Route path="/order" element={<MyOrder />} />
      </Routes>
    </>
  );
};

const Contaner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: red;
`;
const Block = styled.div`
  display: flex;
  gap: 20px;
  margin-right: 150px;
`;
const Logo = styled.h1`
  margin-left: 50px;
  color: #fff;
  font-weight: 700;
`;
const Links = styled(Link)`
  color: #fff;
  text-decoration: none;
  &:active{
    color: black;
  }
`