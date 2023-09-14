import React from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Flex,
    Box,
    Spacer,
  } from '@chakra-ui/react'
import CartWidget from './CartWidget'
import { Link } from "react-router-dom";


const NavBar = () => {
  return (
    <div>
        <Flex>
  <Box p='4' bg='red.400'>
  <Link to={"/"}>
  <h3>Cositas3dDeFran</h3> 
  </Link>
   </Box>
  <Spacer />

  <Box p='4' bg='green.400'>
  <Menu>
  <MenuButton>
    Categorias
  </MenuButton>
  <MenuList>
  <MenuItem><Link to={`/categoria/${"peliculas"}`}>Pelicuas</Link></MenuItem>
                <MenuItem><Link to={`/categoria/${"video juegos"}`}>Video Juegos</Link></MenuItem>
                <MenuItem><Link to={`/categoria/${"otros"}`}>Otros</Link></MenuItem>
    <MenuItem></MenuItem>
    <MenuItem></MenuItem>
  </MenuList>
</Menu> 
 </Box>
 <Spacer />
 
 <Box p="4" >
 <Link to={"/cart"}>
              <CartWidget />
            </Link>
 </Box>
</Flex>
       
       
    </div>
  )
}

export default NavBar