import {Aspas, ClientContainer, ClientName, ClientPicture, Container, ContainerTwo, Depoimentos, Divisor, LeftContainer, Text, Title} from './style'
import { Arrow, ArrowTwo } from './style'
import LeftArrow from '../../img/Arrow.svg'
import RightArrow from '../../img/Arrow2.svg'
import AspasImage from '../../img/Aspas.svg'
import Client1 from '../../img/Client1.svg'
import DivisorImg from '../../img/Group 179.svg'

export default function Testimony() {

return(
    <Container>
        <LeftContainer>
        <Depoimentos>
            Depoimentos
        </Depoimentos>
        <Title>
        O que nossos clientes
        dizem sobre nós.
        </Title>
        <Arrow src={LeftArrow} />
        <ArrowTwo src={RightArrow} />
        </LeftContainer>
        <Divisor src={DivisorImg}/>
        <ContainerTwo>
        <Aspas src={AspasImage} />
        <Text>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
        Velit officia consequat duis enim velit. non deserunt ullamco est sit aliqua 
        dolor do amet sint.
        </Text>
        <ClientContainer>
        <ClientPicture src={Client1} />
        <ClientName>
            Tiago Luchtenberg
        </ClientName>
        </ClientContainer>
        </ContainerTwo>
    </Container>
)

}