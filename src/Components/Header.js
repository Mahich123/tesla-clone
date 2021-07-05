import React from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import {  useState } from 'react' 

function Header() {
   const  [burgerStatus, setburgerStatus] = useState(false);
    return (
        <Container>
            <a>
                <img src="/images/logo.svg" />
            </a>
            <Menu>
                <a href="#">Model S</a>
                <a href="#">Model 3</a>
                <a href="#">Model X</a>
                <a href="#">Model Y</a>
                <a href="#">Solar Roof</a>
                <a href="#">Solar Pannls</a>
           </Menu>
           <RightMenu>
               <a href="#">Shop</a>
               <a href="#">Account</a>
               <CustomMenu onClick={()=>setburgerStatus(true)}/>
           </RightMenu>

           <BurgerNav show={burgerStatus}>
               <CloseWrapper>
               <CloseIcon onClick={()=>setburgerStatus(false)}/>
               </CloseWrapper>
               <li><a href="#">Existing Inventory</a></li>
               <li><a href="#">Used Inventory</a></li>
               <li><a href="#">Trade-In</a></li>
               <li><a href="#">Test Drive</a></li>
               <li><a href="#">Cybertruck</a></li>
               <li><a href="#">Roadster</a></li>
               <li><a href="#">Semi</a></li>
               <li><a href="#">Charging</a></li>
               <li><a href="#">Powerwall</a></li>   
           </BurgerNav>
        </Container>
       
    )
}

export default Header
const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
`
const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    a {
        font-weight: 600;
        padding: 0 10px;
    }
    @media(max-width: 768px) {
        display: none;
    }
`
const RightMenu = styled.div`
    display: flex;
    align-items: center;
    a {
    font-weight: 600;
    padding: 0 10px;
    }
`
const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
`
const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: white;
    width: 300px;
    list-style: none;
    display: flex;
    flex-direction: column;
    text-align: start;
    padding: 20px;
    transform: ${props=> props.show ? 'translateX(0)':'translateX(100%)'};
    transition: transform .2s ease-in;
    li {
        padding: 15px 0;
        border-bottom: 1px solid #DDDDDD;
        font-weight: 600;
        cursor: pointer;
    }

`
const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    cursor: pointer;
`