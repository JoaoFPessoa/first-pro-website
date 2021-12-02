import { Overlay, Title, IconName, Teste } from '../Modal1/style'
import { IconsContainer, SubtitleContainer, Container } from './style'
import Icon from './icon'
import MiniIcon from "./miniIcon"
import CloseSmall from '../../../img/CloseSmall.png'
import { Close5 } from '../../ModalButtons/ModalButton5/style'

export default function Modal5 (props) {
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
            <Close5 onClick = {props.setShowModal} src={CloseSmall} />   
            </Container>
        </Overlay>

    )

}