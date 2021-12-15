import { Overlay, Title} from '../Modal1/style'
import {SubtitleContainer, Container} from './style'
import Icon from './icon'
import CloseSmall from '../../../img/close-small.svg'
import { Close6 } from '../../ModalButtons/ModalButton6/style'

export default function Modal6 (props) {
    return(
            <Overlay>
            <Container>
                <Title> 
                <Icon image={props.modal.image} />
                {props.modal.title}
                <Close6 onClick = {props.setShowModal} src={CloseSmall} />   
                </Title>

                <SubtitleContainer>
                {props.modal.subtitle}
                </SubtitleContainer>
  

            </Container>
        </Overlay>

    )

}