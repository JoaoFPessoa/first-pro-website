import styled from 'styled-components'

export const Container = styled.div`

position: relative;
display: flex;
justify-content: space-between;
margin-top: 120px;
@media(max-width: 768px){
    position: relative;
    margin-top: 40px;
    margin-left: 20px;
    justify-content: normal;
    flex-direction: column;
}

`

export const Logotipo = styled.img`
position: relative;
width: 232px;
height: 38px;

@media(max-width: 768px){
    position: relative;
    width: 170px;
    height: 28px;
`

export const Title = styled.div`
position: relative;
width: 308px;
font-size: 16px;
line-height: 26px;
color: #EBEBEB;
margin-top: 24px;
margin-bottom: 125px;

@media(max-width: 768px){
    position: relative;
    width: 232px;
    height: 48px;
    font-size: 14px;
    line-height: 24px;
    margin-bottom: 0px;
}
`

export const Trademark = styled.div`
position: relative;
font-size: 14px;
line-height: 24px;
color: #B8B8B8;
width: 208px;
@media(max-width: 768px){
display: none;
`
export const MobileTradeMark = styled.div`
display:none;
@media(max-width: 768px){
    display: flex;
    position: relative;
    font-size: 14px;
    line-height: 24px;
    color: #B8B8B8;
    width: 208px;
    margin-top: 80px;
}
` 

export const Subtitle = styled.div`
position: relative;
width: 81px;
height: 30px;
margin-bottom: 24px;
font-size: 20px;
line-height: 30px;
color: #EBEBEB;

@media(max-width: 768px){
    position: relative;
    margin-top: 42px;
}
`
export const ContainerServicos = styled.div`
position: relative;
top: 64px;
left: 416px;
width: 300px;
height: 300px;

@media(max-width: 768px){
    position: relative;
    margin-top:
}
`

export const ServicosFooter = styled.div`
width: 300px;
height: 26px;
font-size: 16px;
line-height: 26px;
/* gray1 */
color: #B8B8B8;
padding-bottom: 7px;
margin-bottom: 8px;

@media(max-width: 768px){
    width: 200px;
    height: 35px;
    font-size: 13px;
    line-height: 22px;
    margin-bottom: 0px;
}
`
export const ContactTitle = styled.div`
position: relative;
font-size: 20px;
line-height: 30px;
color: #EBEBEB;

@media(max-width: 768px){
    position: relative;
    width: 78px;
    height: 30px;

    
}
`
export const Cellphone = styled.div`
position: relative;
font-weight: 500;
font-size: 18px;
line-height: 24px;
color: #FFFFFF;

@media(max-width: 768px){
    position: relative;
    width: 200px;
    height: 24px;
    margin-left: 8px;
    
}
`
export const WhatsAppLogo = styled.img`
position: relative;
width: 20px;
height: 20px;
margin-right: 8px;
@media(max-width: 768px){
    position: relative;
margin-right: 0px;
    
}
`
export const Email = styled.div`
position: relative;
font-weight: 500;
font-size: 16px;
line-height: 24px;
color: #FFFFFF;
margin-top: 10px;

@media(max-width: 768px){
    width: 254px;
    height: 24px;
    margin-top: 14px;
}
`

export const LocationContainer = styled.div`
position: relative;
display: flex;
margin-top: 115px;

@media(max-width: 768px){
    width: 193px;
    height: 52px;
    margin-top: 48px;
}
`

export const LocationImg = styled.img`
position: relative;
width: 24px;
height: 24px;
@media(max-width: 768px){
    position: absolute;
    width: 15px;
    height: 20px;
}
`
export const Location = styled.div`
font-size: 16px;
line-height: 26px;
color: #B8B8B8;
left: 30px;
position: relative;
width: 183px;
height: 52px;
@media(max-width: 768px){
    position: absolute;
    font-size: 14px;
    line-height: 24px;
}
`

export const FooterContainer = styled.div`
display: flex;
flex-direction: column;
@media(max-width: 768px){
    margin-top: 48px;
}
`

export const ContactContainer = styled.div`
display: flex;
margin-top: 26px;
`