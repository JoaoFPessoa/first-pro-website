import {HomeContainer, Title, Subtitle} from './style'
import {TextOne, TextTwo} from './texts'
import {HireButton} from '../Buttons/hire-button'
import {ProviderButton} from '../Buttons/provider-button'
import Shield from './shieldSvg'

export default function Home() {
    return (
        <HomeContainer>
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