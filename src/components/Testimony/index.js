import {Aspas, ClientName, ClientPicture, Container, ContainerTwo, Depoimentos, Text, Title} from './style'
import { Arrow, ArrowTwo } from './style'
import LeftArrow from '../../img/Arrow.svg'
import RightArrow from '../../img/Arrow2.svg'
import AspasImage from '../../img/Aspas.svg'
import Client1 from '../../img/Client1.svg'

export default function Testimony() {

return(
    <Container>
        <Depoimentos>
            Depoimentos
        </Depoimentos>
        <Title>
        O que nossos clientes
        dizem sobre nós.
        </Title>
        <ContainerTwo>
        <Aspas src={AspasImage} />
        <Text>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
        Velit officia consequat duis enim velit. non deserunt ullamco est sit aliqua 
        dolor do amet sint.
        </Text>
        <ClientPicture src={Client1} />
        <ClientName>
            Tiago Luchtenberg
        </ClientName>
        <Arrow src={LeftArrow} />
        <ArrowTwo src={RightArrow} />
        </ContainerTwo>
    </Container>
)

}