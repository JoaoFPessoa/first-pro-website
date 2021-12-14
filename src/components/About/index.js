import { Title, Description, Text1, Line7, Text2, Container, Ball1, Ball2, Ball3, SubtitleOne, SubtitleTwo, SubtitleThree, Text3, Text4, Text5, Background, UpperContainer, FirstContainer, SecondContainer, DownerContainer, ThirdContainer, TitleContainer } from './style'
import Arrow from '../../img/Line 7.png'
import BallIcon from '../../img/Ellipse 11.png'
import BackgImg from '../../img/logo24h.png'

export default function About () {
    return (
<Container id="aboutUs">
    <UpperContainer>
    <FirstContainer>
    <Title>
        O que é a PRMA Federal
    </Title>
    <Description>
        Somos uma empresa B2B, situada em São Paulo. 
        Nosso propósito é oferecer atendimento de qualidade 
        e excelência 24 horas por dia, 7 dias por semana, 
        e ser a melhor para o nossos 
        clientes.
    </Description>
    </FirstContainer>
    <SecondContainer>
    <Text1> +20 anos</Text1>
    <Line7 src={Arrow} />
    <Text2>Expertise e experiência no mercado</Text2>
    </SecondContainer>
    <Background src={BackgImg} />
    </UpperContainer>


    <DownerContainer>

    <ThirdContainer>
    <Ball1 src={BallIcon} />
    <TitleContainer>
    <SubtitleOne>
    Ética, respeito e
    transparência
    </SubtitleOne>
    <Text3>
    Cada cliente é único e cada atendimento que realizamos é personalizado
     e exclusivo para a empresa que nos contrata. Nosso intuito é atuar como
      uma extensão do seu negócio.
    </Text3>
    </TitleContainer>
    </ThirdContainer>
    
    <ThirdContainer>
    <Ball2 src={BallIcon} />
    <TitleContainer>
    <SubtitleTwo>
    Central de Atendimento
    24h completa
    </SubtitleTwo>
    <Text4>
    Com expertise no atendimento ao cliente e uma gama de serviços, somos 
    capazes de atender ao seu cliente desde o início do relacionamento.
    </Text4>
    </TitleContainer>
    </ThirdContainer>

    <ThirdContainer>
    <Ball3 src={BallIcon} />
    <TitleContainer>
    <SubtitleThree>
    6 mil prestadores
    de serviço
    </SubtitleThree>
    <Text5>
    Aproximadamente 6 mil prestadores de serviço credenciados em todo o 
    território nacional. Para assistência veicular 24 horas são mais de 
    5 mil agentes de pronta resposta.
    </Text5>
    </TitleContainer>
    </ThirdContainer>

    </DownerContainer>
    </Container>
    
    )
}