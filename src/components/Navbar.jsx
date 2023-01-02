//import { Badge } from '@mui/material';
//import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import React from 'react'
import styled from 'styled-components'
//import SearchIcon from '@mui/icons-material/Search';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart } from '@material-ui/icons';
import { Badge } from '@material-ui/core';



const Contaianer = styled.div`
  height: 60px;
  
`
const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
justify-content: space-between`

const Left = styled.div`
flex:1;
display: flex;
align-items: center;`

const Language = styled.span`
font-size: 14px;
cursor: pointer;`


const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`

const Input = styled.input`
border:none;
`


const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;`

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;`


const Centre = styled.div`
flex:1;`




const Logo = styled.h1`
  font-weight: bold;
 
`


const Navbar = () => {
  const quantity = useSelector(state=> state.cart.quantity)  // from redux cart
  return (
    <Contaianer >
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>

        <Centre>
          <Logo>DAARMIK.</Logo>
        </Centre>

        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>\
         <Link to ="/cart">
          <MenuItem>
          <Badge badgeContent={quantity} color="primary">
            <ShoppingCart />
            </Badge>
          </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Contaianer>

  )
}

export default Navbar
