import React from "react";
import { products } from "../utils/constants";
import { styled } from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

export const Products = () => {
  const navigate = useNavigate()
  const navigateHistory = ()=>{
    navigate(-1)
  }

  return (
    <>
    <Wrapper >
      {products.map((el) => (
        <LinkProduct to={`${el.id}/details`} >
        <Container key={el.id}>
          <Images src={el.img} alt="" />
          <Title>{el.title}</Title>
          <Price>{el.price}</Price>
        </Container>
        </LinkProduct> 

      ))}
    </Wrapper>
    <Button onClick={navigateHistory} color='info' variant='contained'  >GO BACK</Button>
 
    </>

  );
};
const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const Container = styled.div`
  width: 350px;
  height: 500px;
  background-color: #615b5b;
  border-radius: 30px;
  margin-top: 40px;
`;
const Images = styled.img`
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;

  width: 350px;
`;
const Title = styled.div`
  font-size: 25px;
  font-weight: 800;
  color: #fff;
  text-decoration: none;
`
const Price = styled.h3`
font-weight: 800;
color: #91e835;
`
const LinkProduct = styled(Link)`
  text-decoration: none;
`