import { Overlay, Container, Title, SubtitleContainer, IconsContainer, IconName, Teste } from "./style"
import Icon from "./icon"
import MiniIcon from "./miniIcon"
import {Close} from '../../ModalButtons/ModalButton1/style'
import CloseSmall from '../../../img/close-small.svg'

export default function Modal1 (props) {
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

            <Teste>
                {props.modal.iconList.map((icon, index) => (
                <IconsContainer>
                <MiniIcon image={ icon.image } />
                <IconName>{ icon.name }</IconName>
                </IconsContainer>

))}
            </Teste>   
            <Close onClick = {props.setShowModal} src={CloseSmall} />   
            </Container>
        </Overlay>

    )

}