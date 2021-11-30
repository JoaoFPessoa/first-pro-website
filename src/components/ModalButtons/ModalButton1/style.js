import styled from "styled-components";

export const ModalStyle = styled.div`
font-weight: 500;
font-size: 20px;
line-height: 30px;

/* white */
color: #EBEBEB;
}
`
export const Text = styled.div`
position: absolute;
width: 148px;
height: 60px;
left: 205px;
top: 753px;
@media(max-width: 768px){
    width: 104px;
    height: 48px;
    left: 104px;
    top: 790px;
    font-size: 14px;
    line-height: 24px;
}
`

export const SetaStyle = styled.img`
position: absolute;
left: 401.5px;
right: 14.58%;
top: 777px;
bottom: -25%;
padding: 9px;
width: 6px;
height: 12px;
@media(max-width: 768px) {
    left: 349px;
    top: 800px;
}

`

export const EyeStyle = styled.img`

position: absolute;
width: 48px;
height: 48px;
left: 112px;
top: 759px;
background: #242424;
border-radius: 4px;
@media(max-width: 768px){
    width: 64px;
    height: 64px;
    left: 20px;
    top: 790px;
`

export const Line3 = styled.div`
position: absolute;
width: 229px;
height: 0px;
left: 350px;
top: 850px;
border: 1px solid #303030;
transform: rotate(90deg);

@media(max-width: 768px){ 
    display: none;
}
`

export const Button = styled.button`
cursor: pointer;
`

export const Close = styled.img`
width: 50px;
height: 50px;
position: absolute;
top: 550px;
right: 400px;
cursor: pointer;
`