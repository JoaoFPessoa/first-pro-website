import { Overlay, SubtitleContainer, IconName, Teste } from '../Modal1/style'
import { Title, Container, IconsContainer } from './style'
import Icon from './icon'
import MiniIcon from "./miniIcon"
import CloseSmall from '../../../img/close-small.svg'
import { Close3 } from '../../ModalButtons/ModalButton3/style'

export default function Modal2 (props) {
    return(
            <Overlay>
            <Container>
                <Title> 
                <Icon image={props.modal.image} />
                {props.modal.title}
                <Close3 onClick = {props.setShowModal} src={CloseSmall} />   
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
            </Container>
        </Overlay>

    )

}