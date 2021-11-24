import { Overlay, Container, Title, SubtitleContainer, IconsContainer, IconName, Teste } from './style'
import Icon from './icon'
import MiniIcon from "./miniIcon"
import {Close} from '../../ModalButtons/ModalButton1/style'
import CloseSmall from '../../../img/CloseSmall.png'

export default function Modal6 (props) {
    return(
            <Overlay>
            <Container>
                <Title> 
                <Icon image={props.modal.image} />
                {props.modal.title}
                </Title>

                <SubtitleContainer>
                {props.modal.subtitle}
                </SubtitleContainer>
  
            <Close onClick = {props.setShowModal} src={CloseSmall} />   
            </Container>
        </Overlay>

    )

}