import {HomeContainer, Title, Subtitle} from './style'
import {TextOne, TextTwo} from '../../components/HomeComponents/texts'
import {HireButton} from '../../components/Buttons/hire-button'
import {ProviderButton} from '../../components/Buttons/provider-button'
import Shield from '../../components/HomeComponents/shieldSvg'
import Header from '../../components/Header'
import ModalButton1 from '../../components/ModalButtons/ModalButton1'
import ModalButton2 from '../../components/ModalButtons/ModalButton2'
import ModalButton3 from '../../components/ModalButtons/ModalButton3'
import ModalButton4 from '../../components/ModalButtons/ModalButton4'
import ModalButton5 from '../../components/ModalButtons/ModalButton5'
import ModalButton6 from '../../components/ModalButtons/ModalButton6'



export default function Home() {

    return (
        <HomeContainer>
            <Header />
            <Title>
            <TextOne />
            </Title>
            <Subtitle>
            <TextTwo />
            </Subtitle>
            <HireButton />
            <ProviderButton />
            <Shield />
            <ModalButton1 />
            <ModalButton2 />
            <ModalButton3 />
            <ModalButton4 />
            <ModalButton5 />
            <ModalButton6 />
        </HomeContainer>
    )}