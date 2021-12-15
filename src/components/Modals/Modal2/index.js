import { Overlay, IconName, Teste } from '../Modal1/style'
import { IconsContainer, ModalTitle, Container, SubtitleContainer } from './style'
import Icon from './icon'
import MiniIcon from "./miniIcon"
import CloseSmall from '../../../img/close-small.svg'
import { Close2 } from '../../ModalButtons/ModalButton2/style'

export default function Modal2 (props) {
    return(
            <Overlay>
            <Container>
                <ModalTitle> 
                <Icon image={props.modal.image} />
                {props.modal.title}
                <Close2 onClick = {props.setShowModal} src={CloseSmall} />  
                </ModalTitle>

                <SubtitleContainer>
                {props.modal.subtitle}
                </SubtitleContainer>

            <Teste>
                {props.modal.iconList.map((icon, index) => (
                <IconsContainer>
                <MiniIcon image={ icon.image } />
                <IconName>{ icon.name }</IconName>
                </IconsContainer>

))}
            </Teste>   
 
            </Container>
        </Overlay>

    )

}