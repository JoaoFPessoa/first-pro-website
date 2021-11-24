import {AssistantImage, Button, CardIcon, Container, Info, Subtitle, Title} from './style'
import Card from '../../img/card.png'
import AssistantBackground from '../../img/assistantImg.svg'

export default function Assistant() {
    return (
    <div>
    <Container>
    <CardIcon src={Card} />
    <AssistantImage src={AssistantBackground} />
    </Container>
    <Info>
    <Title>
        Seja um assistente
veicular 24 horas
    </Title>
    <Subtitle>
        A nossa Central 24 horas, está preparada para atender 
        seus clientes em todo território nacional, do veículo leve
        ao extra pesado.
    </Subtitle>
    <Button>
        Quero ser um assistente
    </Button>
    </Info>
    </div>
    )
}