import styled from "styled-components";

export const HButton = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
margin-right: 24px;
position: relative;
width: 216px;
height: 56px;
background: #FF8F01;
font-family: 'DM Sans', sans-serif;
font-weight: 500;
font-size: 18px;
line-height: 18px;
border-radius: 4px;
border: black;
cursor: pointer;
@media (max-width: 768px) {
    width: 123px;
}


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
position: relative;
width: 256px;
height: 56px;
background: none;
color: white;
font-family: 'DM Sans', sans-serif;
font-weight: 500;
font-size: 18px;
line-height: 18px;
border-radius: 4px;
border: solid 1px grey;
cursor: pointer;
@media (max-width: 768px) {
    width: 173px;
}
`


export const HButton2 = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 19px 32px;
width: 216px;
height: 56px;
background: #FF8F01;
font-family: DM Sans;
font-weight: 500;
font-size: 18px;
line-height: 18px;
border-radius: 4px;
margin-top: 40px;
margin-left: 115px;
margin-bottom: 40px;
cursor: pointer;
border: black;

&:hover {
    background: #FF9E24;
}

@media(max-width: 768px){
    padding: 17px 24px;
    width: 200px;
    height: 48px;
    margin-top: 32px;
    margin-left: 23px;
    font-size: 14px;
    line-height: 14px;
    margin-bottom: 0px;
}
`

export const ButtonsContainer = styled.div `
display: flex;
justify-content: center;
margin-top: 32px;
`