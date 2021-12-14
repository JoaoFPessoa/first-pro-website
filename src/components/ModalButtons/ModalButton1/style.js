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
width: 170px;

@media(max-width: 768px){
    width: 104px;
    height: 48px;
    left: 104px;
    top: 790px;
    font-size: 14px;
    line-height: 24px;
    text-align: left;
    margin-left: 0px;

}
`

export const SetaStyle = styled.img`
position: relative;
padding: 9px;
width: 6px;
height: 12px;
margin-left: clamp(25px, 50px, 70px);
@media(max-width: 768px) {
    left: 349px;
    top: 800px;
    margin-left: 0px;
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
    left: 20px;
    top: 790px;
    padding: 8px;
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