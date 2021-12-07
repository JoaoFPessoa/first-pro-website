import styled from "styled-components";



export const SubtitleContainer = styled.div`
display: flex;
max-width: 600px;
height: 78px;
margin-top: 50px;
margin-left: 55px;
font-size: 16px;
line-height: 26px;
color: #B8B8B8;
@media(max-width: 768px){
    font-size: 12px;
    line-height: 20px;
    margin-left: 10px;
    margin-top: 10px;
    width: 250px;
}
`
export const Container = styled.div`
width: 100%;
max-width: 924px;
height: 505px;
background: #191919;
color: white;
box-shadow: 0px 4px 10px rgba(0,0,0,0.4);
margin-right: 125px;
@media(max-width: 768px){
    width: 100%;
    margin-left:33%;
    height: 350px;
}
`