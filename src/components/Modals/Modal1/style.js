import styled from "styled-components";

export const Overlay = styled.div`
background: rgba(0, 0, 0, 0.8);
position: absolute;
width: 100%;
height: 100rem;
left: 0;
top: 0;
display: flex;
align-items: center;
justify-content: center;
z-index: 20;
`

export const Container = styled.div`
width: 100%;
max-width: 924px;
height: 555px;
background: #191919;
color: white;
box-shadow: 0px 4px 10px rgba(0,0,0,0.4);
margin-right: 125px;
@media(max-width: 768px){
    width: 100%;
    margin-left:20px;
    height: 430px;
}
`

export const IconStyle = styled.img`
width: 104px;
height: 104px;
top: 48px;
margin-left: 48px;
padding-right: 32px;

@media(max-width: 768px){
width: 30px;
height: 30px;
margin-left:10px;
}

`

export const Title = styled.div`
width: 236px;
height: 80px;
margin-top: 40px;
font-weight: 500;
font-size: 32px;
line-height: 40px;
display:flex;

@media(max-width: 768px){
font-size: 14px;
line-height: 15px;
margin-top: 20px;
}
`


export const SubtitleContainer = styled.div`
display: flex;
width: 664px;
height: 52px;
margin-top: 40px;
margin-left: 48px;
font-size: 16px;
line-height: 26px;
color: #EBEBEB;


@media(max-width: 768px){
display: none;
}
`

export const IconsContainer = styled.div`
display: flex;
margin-top: 41px;
margin-left: 48px;
@media(max-width: 768px){
    margin-top: 5px;
    margin-left: 10px;
}
`

export const MiniIconStyle = styled.img`
width: 56px;
height: 56px;
background: #242424;
border-radius: 4px;

@media(max-width:768px){
    width: 20px;
    height: 20px;
}
`
export const IconName = styled.div`
width: 127px;
height: 26px;
margin-left: 24px;
font-size: 14px;
line-height: 26px;
color: #EBEBEB;
@media(max-width:768px){
    width: 70px;
    margin-right: 30px;
    line-height: 15px;
    font-size: 11px;
}
`


export const Teste = styled.div`
display: flex;
height: 335px;
width: 100%;
flex-wrap: wrap;

@max-width:768px{

}
`