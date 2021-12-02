import { Container, BoxOne, BoxTwo, ImageOne, ImageTwo, TitleOne, TitleTwo, Overlay, SetaOne, SetaTwo, Close} from './style'
import AssistantImg from '../../img/assistantImg.svg'
import AgentImg from '../../img/Agent.svg'
import Seta from '../../img/Seta.png'
import CloseImg from '../../img/CloseSmall.png'

export default function HireModals(props){
    return(
        <Overlay>
        <Container>
            <BoxOne>
                <ImageOne src={AssistantImg} />
                <TitleOne>
                    Seja um assistente veicular 24 horas
                </TitleOne>
                <SetaOne src={Seta}/>
                <SetaTwo src={Seta}/>
            </BoxOne>
            <BoxTwo>
                <ImageTwo src={AgentImg} />
                <TitleTwo>
                    Torne-se um agente de pronta resposta
                </TitleTwo>
            </BoxTwo>
            <Close onClick = {props.setShowHireModal} src={CloseImg} />
        </Container>
        </Overlay>

    )
}