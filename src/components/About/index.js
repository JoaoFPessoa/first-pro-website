import { Title, Description, Text1, Line7, Text2, Container, Ball1, Ball2, Ball3, SubtitleOne, SubtitleTwo, SubtitleThree, Text3, Text4, Text5, Background } from './style'
import Arrow from '../../img/Line 7.png'
import BallIcon from '../../img/Ellipse 11.png'
import BackgImg from '../../img/logo24h.png'

export default function About () {
    return (
<Container id="aboutUs">
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
    <Text1> +20 anos</Text1>
    <Line7 src={Arrow} />
    <Text2>Expertise e experiência no mercado</Text2>
    <Ball1 src={BallIcon} />
    <Ball2 src={BallIcon} />
    <Ball3 src={BallIcon} />
    <SubtitleOne>
    Ética, respeito e
    transparência
    </SubtitleOne>
    <SubtitleTwo>
    Central de Atendimento
    24h completa
    </SubtitleTwo>
    <SubtitleThree>
    6 mil prestadores
    de serviço
    </SubtitleThree>
    <Text3>
    Cada cliente é único e cada atendimento que realizamos é personalizado
     e exclusivo para a empresa que nos contrata. Nosso intuito é atuar como
      uma extensão do seu negócio.
    </Text3>
    <Text4>
    Com expertise no atendimento ao cliente e uma gama de serviços, somos 
    capazes de atender ao seu cliente desde o início do relacionamento.
    </Text4>
    <Text5>
    Aproximadamente 6 mil prestadores de serviço credenciados em todo o 
    território nacional. Para assistência veicular 24 horas são mais de 
    5 mil agentes de pronta resposta.
    </Text5>
    <Background src={BackgImg} />
    </Container>
    
    )
}