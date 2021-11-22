import {HomeContainer, Title, Subtitle} from './style'
import {TextOne, TextTwo} from '../../components/HomeComponents/texts'
import {HireButton} from '../../components/Buttons/hire-button'
import {ProviderButton} from '../../components/Buttons/provider-button'
import Shield from '../../components/HomeComponents/shieldSvg'
import Header from '../../components/Header'

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
        </HomeContainer>
    )}