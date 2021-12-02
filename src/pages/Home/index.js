import {HomeContainer, Title, Subtitle, Background} from './style'
import {TextOne, TextTwo} from '../../components/HomeComponents/texts'
import {HireButton} from '../../components/Buttons/hire-button'
import {ProviderButton} from '../../components/Buttons/provider-button'
import Header from '../../components/Header'
import ModalButton1 from '../../components/ModalButtons/ModalButton1'
import ModalButton2 from '../../components/ModalButtons/ModalButton2'
import ModalButton3 from '../../components/ModalButtons/ModalButton3'
import ModalButton4 from '../../components/ModalButtons/ModalButton4'
import ModalButton5 from '../../components/ModalButtons/ModalButton5'
import ModalButton6 from '../../components/ModalButtons/ModalButton6'
import About from '../../components/About'
import Assistant from '../../components/Assistant'
import RecoveredCars from '../../components/RecoveredCars'
import Testimony from '../../components/Testimony'
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import HomeShield from '../../components/HomeComponents'
import Map from '../../img/default_map (Traced).svg'



export default function Home() {

    return (
        <HomeContainer>
            <Background src={Map}/>
            <Header />
            <Title>
            <TextOne />
            </Title>
            <Subtitle>
            <TextTwo />
            </Subtitle>
            <HireButton />
            <ProviderButton />
            <HomeShield />

            <ModalButton1 />
            <ModalButton2 />
            <ModalButton3 />
            <ModalButton4 />
            <ModalButton5 />
            <ModalButton6  />

            <About/>

            <Assistant />

            <RecoveredCars />

            <Testimony />

            <Banner />

            <Footer />
        </HomeContainer>
    )}