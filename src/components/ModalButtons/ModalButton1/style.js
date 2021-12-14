import styled from "styled-components";

export const ModalStyle = styled.div`
font-weight: 500;
font-size: 20px;
line-height: 30px;
display: flex;
align-items: center;
height: 120px;
flex: auto;
width: 100%;
/* white */
color: #EBEBEB;
@media(max-width: 768px) {
    height: auto;
    border-bottom: 1px solid #303030;
    margin-bottom: 10px;
}
`
export const Text = styled.div`
position: relative;
height: 60px;
font-family: 'DM Sans', sans-serif;
font-weight: 500;
font-size: 20px;
line-height: 30px;
text-align: left;
margin-left: 32px;
width: 150px;

@media(max-width: 768px){
    font-size: 14px;
    line-height: 24px;
    text-align: left;
    margin-left: 10px;

}
`

export const SetaStyle = styled.img`
position: relative;
padding: 9px;
width: 6px;
height: 12px;
margin-left: clamp(100px, 50px, 70px);
@media(max-width: 768px) {
    margin-left: auto;
}

`

export const EyeStyle = styled.img`

position: relative;
width: 48px;
height: 48px;
background: #242424;
padding: 15px;
border-radius: 4px;
@media(max-width: 768px){
    padding: 8px;
    margin-bottom: 10px;
`

export const Line3 = styled.div`


@media(max-width: 768px){ 
    display: none;
}
`

export const Button = styled.div`
cursor: pointer;
display: flex;
align-items: center;
flex: auto;
width: 100%;
`

export const Close = styled.img`
width: 50px;
height: 50px;
position: absolute;
top: 490px;
right: 260px;
cursor: pointer;

@media(max-width: 768px){
    width: 30px;
    height: 30px;
    top: 505px;
    right: 75px;
}
`