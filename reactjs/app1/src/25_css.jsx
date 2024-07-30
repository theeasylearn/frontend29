import React from "react";
import styled from "styled-components";
const MyDiv = styled.div`
margin : 30px;
padding : 30px;
background-color: rgb(214, 214, 255);
border-radius: 25px;
box-shadow: 0px 2px 0px 2px ;
`
const MyHeading = styled.h1`
text-align:center;
text-decoration: underline;`
export default class CssExample2 extends React.Component {
    render() {
        return (<>
            <MyHeading>
                Hello world
            </MyHeading>
            <MyDiv>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi corrupti beatae repellat rem doloremque unde sequi recusandae delectus eius illo voluptas dolor ducimus cum consequuntur, autem consectetur soluta corporis iusto?
            </MyDiv>
        </>)
    }
}