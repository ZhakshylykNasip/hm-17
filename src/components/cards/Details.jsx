import React from 'react'
import { products } from '../utils/constants'
import { useNavigate, useParams } from 'react-router-dom'
import { styled } from 'styled-components'
import { Button } from '@mui/material'

export const Details = () => {
  const {id} = useParams()
  const navigate = useNavigate()
  const navigateHistory = ()=>{
    navigate(-1)
  }
  return (
    <div>
      {products.map((el)=> {
        return (id === el.id && (
          <Container key={el.id}>
            <Images src={el.img} alt="" />
            <div>
            <h2>{el.title}</h2>
            <h3>{el.price}</h3>
            <DetailText>{el.details}</DetailText>
            <MyButton color='info' variant='contained' onClick={navigateHistory} >GO BACK </MyButton>
            </div>
          </Container>
        ))
      })}
    </div>
  )
}

const MyButton = styled(Button)`
  border-radius: 20px;
`

const Container = styled.div`
  display: flex;
  gap: 50px;
  margin-top: 50px;

`
const Images = styled.img`
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;

  width: 350px;
`;
const DetailText = styled.div`
  width: 277px;
  color: #fff;
`