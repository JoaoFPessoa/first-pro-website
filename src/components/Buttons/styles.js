import styled from "styled-components";

export const HButton = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 19px 32px;
position: absolute;
width: 216px;
height: 56px;
left: 111px;
top: 531px;
background: #FF8F01;
font-weight: 500;
font-size: 18px;
line-height: 18px;
border-radius: 4px;

&:hover {
    background: #FF9E24;
}
`

export const PButton = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 19px 32px;
position: absolute;
width: 216px;
height: 56px;
left: 340px;
top: 531px;
background: none;
color: white;
font-weight: 500;
font-size: 18px;
line-height: 18px;
border-radius: 4px;
border: solid 1px grey`

export const HButton2 = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 19px 32px;
width: 216px;
height: 56px;
background: #FF8F01;
font-weight: 500;
font-size: 18px;
line-height: 18px;
border-radius: 4px;
margin-top: 40px;
margin-left: 64px;
cursor: pointer;

&:hover {
    background: #FF9E24;
}
`
