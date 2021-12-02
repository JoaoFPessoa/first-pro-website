import { Overlay, SubtitleContainer, Teste } from '../Modal1/style'
import {Title, Container, IconName, IconsContainer} from './style'
import Icon from './icon'
import MiniIcon from "./miniIcon"
import CloseSmall from '../../../img/CloseSmall.png'
import { Close4 } from '../../ModalButtons/ModalButton4/style'

export default function Modal2 (props) {
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
            <Close4 onClick = {props.setShowModal} src={CloseSmall} />   
            </Container>
        </Overlay>

    )

}