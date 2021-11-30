import { Container, IconContainer, Icons, Title, Line } from "./style";
import { HButton2 } from "../Buttons/styles";
import Shield from './shield.js'
import Balance from './img/balance-two 1(1).svg'
import Car from './img/car 1(1).svg'
import Home from './img/home 1.svg'
import Preview from './img/preview-open 1.svg'
import Protect from './img/protect 1.svg'
import FileFocus from './img/file-focus 1(1).svg'

export default function Banner(){
    return(
        <Container>
            <Title>
            Esteja seguro.
            Venha conosco.
            </Title>
            <HButton2>
                Contrate a PRMA
            </HButton2>
            {/* <Shield /> */}
            <IconContainer>
                <Icons src={Preview} />
                <Icons src={Car} />
                <Icons src={Home} />
                <Icons src={Protect} />
                <Icons src={Balance} />
                <Icons src={FileFocus} />
            </IconContainer>
            <Line />
        </Container>
    )
}