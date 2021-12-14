import styled from 'styled-components'



export const Container = styled.div`
position: relative;
width: 100%;
height: 600px;
margin-top: 200px;
@media(max-width: 768px){
    margin-top: 80px;
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    height: auto;
}
`

export const Title = styled.div`
position: relative;
width: 600px;
font-weight: 500;
font-size: 40px;
line-height: 48px;
color: #EBEBEB;
font-family: 'DM Sans', sans-serif;
@media(max-width: 768px){
font-size: 30px;
line-height: 35px;
width: 230px;
height: 70px;
}
`
export const Description = styled.div`
position: relative;
width: 510px;
margin-top: 80px;
font-family: 'Inter', sans-serif;
font-weight: normal;
font-size: 20px;
line-height: 30px;
/* white */
color: #EBEBEB;

@media(max-width: 768px){
font-size: 14px;
line-height: 24px;
height: auto;
color: #B8B8B8;
width: auto;
margin-top: 16px;
min-width: 335px;
max-width: 90%;
}
`

export const Text1 = styled.div`
position: relative;
width: 200px;
font-family: 'DM Sans', sans-serif;
font-weight: 500;
font-size: 40px;
line-height: 40px;
color: #EBEBEB;

@media(max-width: 768px){
font-size: 30px;
line-height: 35px;
width: 172px;
height: 35px;
margin-top: 48px;
}

`

export const Line7 = styled.img`
position: relative;
width: 350px;
top: 39px;
mix-blend-mode: normal;
@media(max-width:768px){
    margin-top: 20px;
    top: 0;
    width: 90%;
}
`

export const Text2 = styled.div`
position: relative;
width: 230px;
top: 56px;
font-weight: normal;
font-family: 'Inter', sans-serif;
font-size: 18px;
line-height: 32px;
color: #FF8F01;
@media(max-width:768px){
    font-size: 14px;
    line-height: 24px;
    top: 0;
    margin-top: 17px;
}
`

export const Ball1 = styled.img`
position: relative;
width: 8px;
height: 8px;
top: 8px;
margin-right: 24px;
@media(max-width:768px){
    top: 0;
    margin-top: 10px;
}
`
export const Ball2 = styled.img`
position: relative;
width: 8px;
height: 8px;
top: 8px;
margin-right: 24px;
@media(max-width:768px){
    top: 0px;
    margin-top: 53px;
    left: 0px;
}
`
export const Ball3 = styled.img`
position: relative;
width: 8px;
height: 8px;
top: 8px;
margin-right: 24px;
@media(max-width:768px){
    top: 0px;
    left: 0px;
    margin-top: 58px;
}
`

export const SubtitleOne = styled.div`
position: relative;
width: 200px;
height: 60px;
font-family: DM Sans;
font-size: 20px;
line-height: 30px;
font-weight: 500;
color: #EBEBEB;
@media(max-width:768px){
    top: 0px;
    font-size: 20px;
    line-height: 30px;
    width: 200px;
    height: 60px;
}
`
export const SubtitleTwo = styled.div`
position: relative;
width: 250px;
height: 60px;
font-family: DM Sans;
font-size: 20px;
line-height: 23px;
font-weight: 500;
color: #EBEBEB;
@media(max-width:768px){
    margin-top: 40px;
    font-size: 20px;
    line-height: 30px;
    width: 250px;
    height: 60px;
}
`
export const SubtitleThree = styled.div`
position: relative;
width: 200px;
height: 60px;
font-family: DM Sans;
font-size: 20px;
line-height: 23px;
font-weight: 500;
/* white */
color: #EBEBEB;
@media(max-width:768px){
    margin-top: 48px;
    font-size: 20px;
    line-height: 30px;
    width: 200px;
    height: 60px;
}
`
export const Text3 = styled.div`
position: relative;
width: 312px;
height: 130px;
margin-top: 24px;
font-family: 'Inter', sans-serif;
font-weight: normal;
font-size: 16px;
line-height: 26px;
color: #B8B8B8;
@media(max-width:768px){
    min-width: 303px;
    height: 96px;
    font-size: 14px;
    line-height: 24px;
}
`
export const Text4 = styled.div`
position: relative;
width: 312px;
height: 130px;
margin-top: 24px;
font-family: 'Inter', sans-serif;
font-weight: normal;
font-size: 16px;
line-height: 26px;
color: #B8B8B8;
@media(max-width:768px){
    width: 303px;
    height: 96px;
    font-size: 14px;
    line-height: 24px;
}
`
export const Text5 = styled.div`
position: relative;
width: 312px;
height: 130px;
margin-top: 24px;
font-family: 'Inter', sans-serif;
font-weight: normal;
font-size: 16px;
line-height: 26px;
color: #B8B8B8;
@media(max-width:768px){
    width: 303px;
    height: auto;
    font-size: 14px;
    line-height: 24px;
}

`

export const Background = styled.img`
position: absolute;
width: 550.46px;
height: 390px;
right: 0;
border: 2px solid;
opacity: 0.5;
border-image-source: linear-gradient(180deg, #525252 0%, rgba(82, 82, 82, 0) 100%);
@media(max-width:768px){
display: none;
}
`

export const UpperContainer = styled.div`
display: flex;
justify-content: space-between;
@media(max-width: 768px){
    flex-direction: column;
}
`
export const FirstContainer = styled.div`
`
export const SecondContainer = styled.div`
`
export const DownerContainer = styled.div`
display: flex;
justify-content: space-between;
margin-top: 120px;
@media(max-width: 768px){
    margin-top: 0;
    flex-direction: column;
    margin-top: 48px;
}
`
export const ThirdContainer = styled.div`
display: flex;
`
export const TitleContainer = styled.div`
`