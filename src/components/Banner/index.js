import { Container, IconContainer, Icons, Title, Line, Shield, LeftContainer, UpperContainer, DownerContainer } from "./style";
import { HButton2 } from "../Buttons/styles";
import Balance from './img/balance-two 1(1).svg'
import Car from './img/car 1(1).svg'
import Home from './img/home 1.svg'
import Preview from './img/preview-open 1.svg'
import Protect from './img/protect 1.svg'
import FileFocus from './img/file-focus 1(1).svg'
import ShieldImg from '../HomeComponents/shield.svg'

export default function Banner(){
    return(
        <Container>
            <LeftContainer>
            <Title>
            Esteja seguro.
            Venha conosco.
            </Title>
            <HButton2>
                Contrate a PRMA
            </HButton2>
            </LeftContainer>
            <Shield src={ShieldImg} />
            <IconContainer>
                <UpperContainer>
                <Icons src={Preview} />
                <Icons src={Car} />
                <Icons src={Home} />
                </UpperContainer>
                <DownerContainer>
                <Icons src={Protect} />
                <Icons src={Balance} />
                <Icons src={FileFocus} />
                </DownerContainer>
            </IconContainer>
            <Line />
        </Container>
    )
}