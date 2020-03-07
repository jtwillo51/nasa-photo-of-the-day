import React from "react";
import styled from "styled-components";

const Headerbox = styled.header`
    background: red;

`;


function Header(){

    return(
        <Headerbox>
            
            <h1>NASA Photos!</h1>
            
        </Headerbox>
    )
}

export default Header;