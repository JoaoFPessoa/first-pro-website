import {WhatsAppLogo, Email, Trademark, Subtitle, ContainerServicos, ContactTitle, Cellphone, Container, Title, Logotipo, ServicosFooter, LeftContainer, FooterContainer, ContactContainer, MobileTradeMark} from './style.js'
import LogoImg from '../../img/logotipo.svg'
import Whatsapp from '../../img/Whatsapp.svg'
import { LocationContainer } from './style.js'
import { LocationImg } from './style.js'
import LocationLogo from '../../img/local-two 1.svg'
import { Location } from './style.js'
export default function Footer(){
    return(
        <Container>
            <FooterContainer>
            <Logotipo src={LogoImg}/>
            <Title>
            Soluções rápidas e efetivas
            na área de segurança.
            </Title>
            <Trademark>
            PRMA Federal
            © Todos os direitos reservados
            </Trademark>
            </FooterContainer>
            <FooterContainer>
            <Subtitle>
                Serviços
            </Subtitle>
                <ServicosFooter>
                Central de monitoramento
                </ServicosFooter>
                <ServicosFooter>
                Pronta resposta veicular
                </ServicosFooter>
                <ServicosFooter>
                Pronta resposta patrimonial
                </ServicosFooter>
                <ServicosFooter>
                Assistência veicular 24 horas
                </ServicosFooter>
                <ServicosFooter>
                Acompanhamento jurídico
                </ServicosFooter>
                <ServicosFooter>
                Sindicância
                </ServicosFooter>    
                </FooterContainer>  

            <FooterContainer>
            <ContactTitle>
                Contato
            </ContactTitle>
            <ContactContainer>
            <WhatsAppLogo src={Whatsapp} />
            <Cellphone id="contact">
            +55 (11) 4195-0859
            </Cellphone>
            </ContactContainer>
            <Email>
            contato@prmafederal.com.br
            </Email>
            <LocationContainer>
                <LocationImg src={LocationLogo} />
                <Location>
                Alphaville Comercial
                Barueri - SP

                </Location>
            </LocationContainer>
            <MobileTradeMark>
            PRMA Federal
            © Todos os direitos reservados
            </MobileTradeMark>
            </FooterContainer>
        </Container>
    )
}